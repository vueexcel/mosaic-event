import { auth } from "../../plugins/firebase.js"
export default {
    namespaced: true,
    state: {
        error: false,
        login_progress: false,
        userloggedin: {},
    },
    getters: {
        username: state => state.userloggedin.displayName
    },
    actions: {
        async checkUserStatus({ commit, dispatch }) {
            try {
                auth.onAuthStateChanged(async user => {
                    if (user) {
                        const authFb = user.providerData[0].providerId.includes('facebook')
                        const authApple = user.providerData[0].providerId.includes('apple')
                        if (authFb || authApple) {
                            const snap = await db.collection("users").where('uid', '==', user.uid).get();
                            user.displayName = snap.docs[0].id;
                            if (Object.keys(user).length) {
                                commit('SET_USERS', JSON.parse(JSON.stringify(user)))
                            }
                        } else {
                            if (Object.keys(user).length) {
                                commit('SET_USERS', JSON.parse(JSON.stringify(user)))
                            }
                        }
                        return user
                    } else {
                        return false
                    }
                });
            } catch (error) {
                dispatch('errorMessage/HANDLE_MESSAGE', error)
                console.log('[:: checkUserStatus({ commit })--error ::]', error);
                return false
            }
        },
        async handlelogin({ commit, dispatch }, payload) {
            const { email, password } = payload
            try {
                commit("LOGIN_PROGRESS", true);
                const user = await auth.signInWithEmailAndPassword(email, password);
                if (Object.keys(user).length) {
                    commit('SET_USERS', JSON.parse(JSON.stringify(user.user)));
                }
                commit("LOGIN_PROGRESS", false);
                return true
            } catch (error) {
                if (error && error.code) {
                    if (error.code === 'auth/user-not-found') {
                        const msg = 'There is no user record found! Please click on DOWNLOAD THE APP NOW to create one.'
                        dispatch('errorMessage/HANDLE_MESSAGE', msg)
                        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                    } else if (error.code === 'auth/wrong-password') {
                        const msg = 'Invalid Password.'
                        dispatch('errorMessage/HANDLE_MESSAGE', msg)
                    } else {
                        dispatch('errorMessage/HANDLE_MESSAGE')
                    }
                } else {
                    dispatch('errorMessage/HANDLE_MESSAGE')
                }
                commit("LOGIN_PROGRESS", false);
                commit("LOGIN_FAIL", error)
                return false
            }
        },
        logout({ commit }) {
            auth.signOut().then(function () {
                commit("DEL_INFO")
                console.log('Signed Out');
            }, function (error) {
                console.error('Sign Out Error', error);
            });
        },
    },
    mutations: {
        LOGIN_FAIL: (state, data) => {
            state.error = data;
        },
        LOGIN_PROGRESS: (state, data) => {
            state.login_progress = data;
        },
        SET_USERS: (state, data) => {
            state.userloggedin = data;
        },
        DEL_INFO: (state) => {
            state.error = false;
            state.userloggedin = "";
        }
    }
}