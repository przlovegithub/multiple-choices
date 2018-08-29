import {
    UPDATELOADINGSTATE,
    ADD_ITEMNUM,
    REMBER_ANSWER,
    REMBER_TIME,
    INITIALIZE_DATA,
    SET_TIME,
    SHOW_POPUP,
    GETUSERINFO
} from './mutation-types'


export default {
    [UPDATELOADINGSTATE](state, status) {
        state.loading.status = status.status;
        state.loading.theme = status.theme;
        state.loading.size = status.size;
        state.loading.text = status.text;
    },
    //点击进入下一题
    [ADD_ITEMNUM](state, num) {
        state.itemNum += num;
    },
    //记录答案
    [REMBER_ANSWER](state, id) {
        state.answerid = Object.assign({}, state.answerid, id)
    },
    /*
    记录做题时间
     */
    [REMBER_TIME](state) {
        state.timer = setInterval(() => {
            state.allTime--;
        }, 1000)
    },
    /*
    初始化信息，
     */
    [INITIALIZE_DATA](state) {
        state.itemNum = 1;
        state.allTime = 10;
        state.answerid = {};
    },
    // 设置时间
    [SET_TIME](state, time) {
        state.allTime = time;
    },
    // 设置是否显示弹窗
    [SHOW_POPUP](state, text) {
        state.showPopup = !state.showPopup;
        state.popupText = text;
    },
    [GETUSERINFO](state, { info, isLogin }) {
        state.userinfo = info;
        state.isLogin = isLogin;
    }


}