import { eventsCollection } from "../../plugins/firebase.js"

export default {
    namespaced: true,
    state: {
        event_registration_progress: false,
    },
    getters: {
    },
    actions: {
        async registerEvent({ commit, rootState }, payload) {
            if (payload.title && payload.description) {
                console.log(payload)
                return true
            } else {
                return false
            }
            // try {
            //     commit('EVENT_REGISTRATION_PREGRESS', true)
            //     const userData = rootState.loginModule.userloggedin
            //     // create storage reference
            //     const ref = storage.ref().child(`${auth.currentUser.displayName}/Questionimage.png`)
            //     // upload data into /users/<auth-uid>/profile_pic.png
            //     await ref.put(payload.file)
            //     // get download url or storage reference url
            //     const downloadUrl = await ref.getDownloadURL()
            //     delete payload.file
            //     delete payload.url
            //     payload.imageUrl: downloadUrl,
            //     const response = await eventsCollection.add(payload)
            //     await eventsCollection.doc(response.id).update({ id: response.id });
            //     commit('EVENT_REGISTRATION_PREGRESS', false)
            //     return true
            // } catch (error) {
            //     commit('EVENT_REGISTRATION_PREGRESS', false)
            //     console.log('[:: fetchEventDetails({ commit })--error ::]', error);
            //     return false
            // }
        },
    },
    mutations: {
        EVENT_REGISTRATION_PREGRESS: (state, data) => {
            state.event_registration_progress = data;
        },
    }
}