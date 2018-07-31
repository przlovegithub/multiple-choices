import { Loading } from 'element-ui';
let loading;

function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

function endLoading() {
    loading.close()
}
// 同一时刻的多个请求合并为一次 loading，在所有响应都返回后，结束 loading。
let needLoadingRequestCount = 0;

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

// https://www.jianshu.com/p/c66adc327553
// https://github.com/woodccc/axios-global-loading-demo/tree/master/frontend/src