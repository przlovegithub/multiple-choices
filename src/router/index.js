import Vue from 'vue'
import Router from 'vue-router'
const choces = r => require.ensure([], () => r(require('@/components/choces')), 'choces');
const score = r => require.ensure([], () => r(require('@/components/score')), 'score');

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'choces',
            component: choces
        },
        {
            path: '/score',
            name: 'score',
            component: score
        }

    ]

})