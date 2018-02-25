import axios from 'axios';
import qs from "qs";

/**
 * 请求前操作
 */
axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error)
})

/**
 * 响应拦截
 */
axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.resolve(error.response)
})

/**
 * 响应操作
 * @param {*} res 
 */
function successState(res) {

}
/**
 * 异常操作
 * @param {*} res 
 */
function errorState(res) {
    if (res && (res.status === 200 || res.status === 304 || response.status === 400)) {
        return res;
    } else {
        console.error('网络异常');
    }
}
/**
 * 请求封装
 * @param  opts 
 * @param  data 
 */
const http = (opts, data) => {
    let defaultOpt = {
        url: opts.url,
        timeout: 10000,
        responseType: "json",
        params: Object.assign(data),
        method:opts.method,
        data: qs.stringify(data),
        headers: opts.method == 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8"
        } : {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
    }
    if (opts.method == 'get') {
        delete defaultOpt.data
    } else {
        delete defaultOpt.params
    }
    let promise = new Promise(function (resolve, reject) {
        axios(defaultOpt).then(
            (res) => {
                successState(res)
                resolve(res)
            }
        ).catch(
            (response) => {
                errorState(response)
                reject(response)
            }
            )

    })
    return promise
}

export default http;