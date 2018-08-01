// import Vue from 'vue'
// import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)


const state = {
    loading: { //loading
        status: false,
        theme: '',
        size: '',
        text: ''
    },
    answerid: {}, //答案id
    itemNum: 1, // 第几题
    allTime: 0, //总共用时
    timer: '', //定时器
    showPopup: false, //弹窗
    popupText: '', //弹窗内容

    itemDetail: [{
        "type": "question1",
        "question_name": "1.《百家姓》中没有哪个姓",
        "muti": false,
        "answer": [{
            "answer_id": 1,
            "answer_name": "吴",
        }, {
            "answer_id": 2,
            "answer_name": "乌",
        }, {
            "answer_id": 3,
            "answer_name": "肖",
        }, {
            "answer_id": 4,
            "answer_name": "箫",
        }]
    }, {
        "type": "question2",

        "question_name": "2.“三玄”指的是",
        "muti": true,
        "answer": [{
            "answer_id": 1,
            "answer_name": "《老子》",
        }, {
            "answer_id": 2,
            "answer_name": "《孟子》",
        }, {
            "answer_id": 3,
            "answer_name": "《庄子》",
        }, {
            "answer_id": 4,
            "answer_name": "《周易》",
        }]


    }, {

        "type": "question3",
        "question_name": "3.古人的婚礼在什么时间举行",
        "muti": false,
        "answer": [{
            "answer_id": 1,
            "answer_name": "早上",
        }, {
            "answer_id": 2,
            "answer_name": "中午",
        }, {
            "answer_id": 3,
            "answer_name": "傍晚",
        }, {
            "answer_id": 4,
            "answer_name": "下午",
        }]
    }, {

        "type": "question4",
        "question_name": "4.下面哪个不是北京的别称",
        "muti": false,
        "answer": [{
            "answer_id": 1,
            "answer_name": "大都",
        }, {
            "answer_id": 2,
            "answer_name": "中都",
        }, {
            "answer_id": 3,
            "answer_name": "上都",
        }, {
            "answer_id": 4,
            "answer_name": "南京",
        }]
    }, {

        "type": "question5",
        "question_name": "5.唐三彩指的是",
        "muti": true,
        "answer": [{
            "answer_id": 1,
            "answer_name": "黄",
        }, {
            "answer_id": 2,
            "answer_name": "青",
        }, {
            "answer_id": 3,
            "answer_name": "红",
        }, {
            "answer_id": 4,
            "answer_name": "绿",
        }]
    }, {
        "type": "question6",
        "question_name": "6.“四羊方尊”是哪个朝代的文物",
        "muti": false,
        "answer": [{
            "answer_id": 1,
            "answer_name": "周",
        }, {
            "answer_id": 2,
            "answer_name": "元",
        }, {
            "answer_id": 3,
            "answer_name": "商",
        }, {
            "answer_id": 4,
            "answer_name": "夏",
        }]
    }]




}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})