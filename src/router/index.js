// import Vue from 'vue'
// import Router from 'vue-router'
const choces = r => require.ensure([], () => r(require('@/components/choces')), 'choces');
const score = r => require.ensure([], () => r(require('@/components/score')), 'score');

// Vue.use(Router)
Vue.use(VueRouter)

// export default new Router({
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'choces',
            component: choces,
            meta: {
                title: '问题'
            }
        },
        {
            path: '/score',
            name: 'score',
            component: score,
            meta: {
                title: '分数'
            }
        }

    ]

})
router.beforeEach((to, from, next) => { //全局钩子函数
    // console.log(to);
    let documentTitle = '一站到底';
    // path 是多级的，遍历
    to.matched.forEach((path) => { //动态修改文档标题
        // console.log(path);
        if (path.meta.title) {
            documentTitle += ` - ${path.meta.title}`;
        }
    });
    document.title = documentTitle;
    to.matched.some((path) => {
        // to.matched.forEach((path) => {
        if (path.meta.need2Login) { //通过此操作可以判断哪些页面需要登录
            if (localStorage.token) {
                next()
            } else {
                next({ path: '/login' })
            }
        } else {
            next();
        }
    });

});
export default router;