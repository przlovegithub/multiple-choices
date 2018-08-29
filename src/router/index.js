// import Vue from 'vue'
// import Router from 'vue-router'
import store from '../store/index'
const choces = r => require.ensure([], () => r(require('@/components/choces')), 'choces');
const score = r => require.ensure([], () => r(require('@/components/score')), 'score');
const login = r => require.ensure([], () => r(require('@/components/login')), 'login');
const notFound = r => require.ensure([], () => r(require('@/components/notFound')), 'notFound');

// Vue.use(Router)
Vue.use(VueRouter)

// export default new Router({
const router = new VueRouter({
    routes: [{
            path: '/choces',
            name: 'choces',
            component: choces,
            meta: {
                title: '问题',
                need2Login: true
            }
        },
        {
            path: '/score',
            name: 'score',
            component: score,
            meta: {
                title: '分数',
                need2Login: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: "/",
            redirect: "/choces"
        },
        {
            path: "/404",
            name: "notFound",
            component: notFound
        },
        {
            path: "*", // 此处需特别注意置于最底部
            redirect: "/404"
        },

    ]

})
router.beforeEach((to, from, next) => { //全局钩子函数
    // console.log(to);
    let documentTitle = '一站到底';
    // route 是多级的，遍历
    to.matched.forEach((route) => { //动态修改文档标题
        // console.log(route);
        if (route.meta.title) {
            documentTitle += ` - ${route.meta.title}`;
        }
    });
    document.title = documentTitle;
    to.matched.some((route) => {
        // to.matched.forEach((route) => {
        if (route.meta.need2Login) { //通过此操作可以判断哪些页面需要登录
            if (store.state.isLogin || sessionStorage.getItem('isLogin')) {
                next()
            } else {
                next({ name: 'login', params: { path: route.path } })
            }
        } else {
            next();
        }
    });

});
export default router;