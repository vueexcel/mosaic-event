export default {
    namespaced: true,
    state: {
        handleMessage: ""
    },
    getters: {
    },
    actions: {
        handleMessage({ commit }, payload) {
            commit('HANDLE_MESSAGE', payload)
        },
    },
    mutations: {
        HANDLE_MESSAGE: (state, data) => {
            const message = data ? data : 'Oops something went wrong!'
            state.handleMessage = message;
        },
    }
}