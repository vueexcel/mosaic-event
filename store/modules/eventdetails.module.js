import { eventsCollection } from "../../plugins/firebase.js"

export default {
    namespaced: true,
    state: {
        fetch_progress: false,
        details: {}
    },
    getters: {
        loading: state => state.fetch_progress,
        eventDetails: state => state.details
    },
    actions: {
        async fetchEventDetails({ commit }, payload) {
            try {
                commit('FETCH_PROGRESS', true)
                const data = await eventsCollection.doc(payload.details).get()
                commit('EVENT_DETAILS', data.data())
                commit('FETCH_PROGRESS', false)
            } catch (error) {
                commit('FETCH_PROGRESS', false)
                console.log('[:: fetchEventDetails({ commit })--error ::]', error);
                return error
            }
        },
    },
    mutations: {
        EVENT_DETAILS: (state, data) => {
            state.details = data
        },
        FETCH_PROGRESS: (state, data) => {
            state.fetch_progress = data;
        },
    }
}