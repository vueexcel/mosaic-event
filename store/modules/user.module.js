import { usersCollection } from "../../plugins/firebase.js"

export default {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        usersArray: state => state.users
    },
    actions: {
        async fetchUsers({ commit }) {
            const data = await usersCollection.get()
            data.docs.forEach((doc) => {
                commit('USER_DETAILS', doc.data())
            })
        },
    },
    mutations: {
        USER_DETAILS: (state, data) => {
            state.users.push(data);
        },
    }
}