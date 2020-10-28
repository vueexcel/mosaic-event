import { eventsCollection } from "../../plugins/firebase.js"

export default {
    namespaced: true,
    state: {
        events: []
    },
    getters: {
        eventsArray: state => state.events
    },
    actions: {
        async fetchEvents({ commit }) {
            commit('CLEAR_DATA')
            const data = await eventsCollection.orderBy('date', 'asc').limit(8).get()
            data.docs.forEach((doc) => {
                commit('USER_DETAILS', doc.data())
            })
        },
        
    },
    mutations: {
        USER_DETAILS: (state, data) => {
            state.events.push(data)
        },
        CLEAR_DATA: (state, data) => {
            state.events = []
        },
    }
}