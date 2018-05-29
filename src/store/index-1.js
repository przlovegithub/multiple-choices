import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)


const state = {
    itemDetail: [{
        "topic_id": 20,
        "active_topic_id": 4,
        "type": "age",
        "topic_name": "您的年龄段",
        "active_id": 1,
        "muti": false,
        "topic_answer": [{
            "topic_answer_id": 1,
            "topic_id": 20,
            "answer_name": "20岁~30岁",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 2,
            "topic_id": 20,
            "answer_name": "30岁~40岁",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 3,
            "topic_id": 20,
            "answer_name": "40岁~50岁",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 4,
            "topic_id": 20,
            "answer_name": "50岁以上",
            "is_standard_answer": 1
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "carComfortable",
        "topic_name": "您对此次试乘试驾车型的外观是否满意",
        "active_id": 1,
        "muti": true,
        "topic_answer": [{
            "topic_answer_id": 1,
            "topic_id": 21,
            "answer_name": "非常满意",

            "is_standard_answer": 1
        }, {
            "topic_answer_id": 2,
            "topic_id": 21,
            "answer_name": "比较满意",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 3,
            "topic_id": 21,
            "answer_name": "一般",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 4,
            "topic_id": 21,
            "answer_name": "不满意",
            "is_standard_answer": 0
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "carModel",
        "topic_name": "您会购买此次试乘试驾的车型吗",
        "active_id": 1,
        "muti": false,
        "topic_answer": [{
            "topic_answer_id": 1,
            "topic_id": 21,
            "answer_name": "马上下单",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 2,
            "topic_id": 21,
            "answer_name": "近期购买",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 3,
            "topic_id": 21,
            "answer_name": "我再看看",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 4,
            "topic_id": 21,
            "answer_name": "不再观看",
            "is_standard_answer": 0
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "carRecommend",
        "topic_name": "您会将此车型推荐给您的朋友和同事的可能性有多大",
        "active_id": 1,
        "muti": true,
        "topic_answer": [{
            "topic_answer_id": 1,
            "topic_id": 21,
            "answer_name": "肯定会",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 2,
            "topic_id": 21,
            "answer_name": "可能会",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 3,
            "topic_id": 21,
            "answer_name": "不确定",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 4,
            "topic_id": 21,
            "answer_name": "一定不会",
            "is_standard_answer": 0
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "carEvaluate",
        "topic_name": "您对此次试乘试驾服务的总体评价",
        "active_id": 1,
        "muti": false,
        "topic_answer": [{
            "topic_answer_id": 1,
            "topic_id": 21,
            "answer_name": "非常满意",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 2,
            "topic_id": 21,
            "answer_name": "比较满意",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 3,
            "topic_id": 21,
            "answer_name": "一般",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 4,
            "topic_id": 21,
            "answer_name": "不满意",
            "is_standard_answer": 0
        }]
    }],

    // answerid: [], //答案id
    answerid: {}, //答案id
    itemNum: 1, // 第几题
    allTime: 0, //总共用时
    timer: '', //定时器


}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})