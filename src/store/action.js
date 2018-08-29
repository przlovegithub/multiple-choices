import {
    login
} from '@/service/api'
// import { UPDATELOADINGSTATE, GETUSERINFO } from '@/store/mutation-types'
export default {
    controlLoading({ state, commit }, status) {
        commit('UPDATELOADINGSTATE', status)
    },
    async getUserInfo({ state, commit }, payload) {

        let res = await login(payload);
        console.log(res);

        if (res.result.code === 10000) {
            commit('GETUSERINFO', { info: res.data[0], isLogin: true })
        } else {
            commit('GETUSERINFO', { info: res, isLogin: false })
        }

    }
}