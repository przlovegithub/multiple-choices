import axios from 'axios';
import qs from 'qs';
import store from '../store'; //此处引入是为了loading效果
import router from '../router'; //此处引入是为了跳转到登录
import { baseUrl } from './env'; //此处引入是判断是在开发环境还是生产环境

// 全局默认配置
// 授权认证
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


// 若axios传递的参数是json格式的，后台接受formdata形式的参数

// 设置 POST 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 在向服务器发送前，修改请求数据(只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法)
axios.defaults.transformRequest = [(data) => { return qs.stringify(data) }]


// 在传递给 then/catch 前，允许修改响应数据
// axios.defaults.transformResponse = [(data) => { return JSON.parse(data) }]

// 配置 CORS 跨域
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;

axios.defaults.crossDomain = true;

// 设置超时
axios.defaults.timeout = 40000;


// 拦截器的说明
// 1、interceptor必须在请求前设置才有效。
// 2、直接为axios全局对象创建interceptor， 会导致全局的axios发出的请求或接收的响应都会被拦截到， 所以应该使用axios.create() 来创建单独的axios实例。

// 创建axios实例
let instance = axios.create({
    baseURL: baseUrl,
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000,
    withCredentials: true,
    // transformRequest: [(data) => {//可在axios实例中设置，也可在拦截器中设置
    //     return JSON.stringify(data)
    // }]
})


// Add a request interceptor
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    store.dispatch( //请求前触发loading效果
            'controlLoading', {
                status: true,
                theme: 'dark',
                size: '',
                text: '加载中...'
            })
        // POST 请求参数处理成 axios post 方法所需的格式        
    if (config.method === 'post' || config.method === "put" || config.method === "delete") {
        config.data = JSON.stringify(config.data);
    }
    // 若是有做鉴权token , 就给头部带上token
    // if (localStorage.AUTH_TOKEN) {
    //     config.headers.Authorization = localStorage.AUTH_TOKEN;
    // }
    if (!localStorage.login) { //若无登录信息，去登录界面
        // https://router.vuejs.org/zh-cn/essentials/navigation.html
        // router.replace({ path: '/error' })
    }
    return config;
}, function(error) {
    // Do something with request error
    store.dispatch(
        'controlLoading', {
            status: false,
        })
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function(response) {
    // Do something with response data
    store.dispatch( //请求后关闭loading效果
        'controlLoading', {
            status: false,
        })
    return response.data;
}, function(error) {
    // Do something with response error
    store.dispatch(
        'controlLoading', {
            status: false,
        })
    return Promise.reject(error);
});



export { instance };