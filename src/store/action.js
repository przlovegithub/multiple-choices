export default {
    controlLoading({ state, commit }, status) {
        commit('UPDATELOADINGSTATE', status)
    }
}