/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * 
 */

let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
    console.log("this is development")
    baseUrl = 'http://appfwb.faw-mazda.com/';
} else if (process.env.NODE_ENV == 'production') {
    console.log("this is production")
    baseUrl = 'http://appfwb.faw-mazda.com/';
}

export {
    baseUrl
}