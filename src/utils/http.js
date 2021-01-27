import axios from 'axios'
import Cookies from 'js-cookie'
let config = {
  baseURL: 'http://localhost:3000/',//接口地址
  timeout:1000, //超时时间
  withCredentials: false //跨域时是否可带凭证(允许携带cookie)
}
//创建axios服务
let service = axios.create(config)
// let axiosBase = axios.create(config)

//请求前拦截器
service.interceptors.request.use(
  config => {
    //可修改请求头的一些配置项
    //jwt 设置token
    config.headers.Authorization = 'Bearer ' + Cookies.get('access-token')
    return config
  },err => {
    Promise.reject(err)
  }
)
//响应后respone拦截器
service.interceptors.response.use(
  response => {
    return response.data
    // return returnResponse(response)
  },err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求'
          break
        case 401:
          err.message = '未授权，请重新登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = '请求错误，未找到该资源'
          break
        case 405:
          err.message = '请求方法未允许'
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '尚未实施'
          break
        case 502:
          err.message = '错误网关'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'http版本不支持该请求'
          break
        default:
          err.message = `链接错误${err.response.status}`
      }
    } else if (err.message !== 'isCancel') {
      err.message = '网络异常，请稍后重试'
    }
    alert(err.message)
    new Error(err.message || 'Error 网络异常，请稍后重试')
    // return Promise.reject(err)
    return false
  }
)
let http = {
  returnResponse(response){
    const res = response
    if(res.code === 200 || Object.prototype.toString.call(res) === '[object Boolean]'){
      return res.data || res
    }else{
      return false
    }
  },
  get(url,params){
    return new Promise(resolve => {
      service({
        method: 'get',
        url,
        params
      }).then(res => {
        resolve(res)
      })
    })
  },
  post(url,params){
    return new Promise(resolve => {
      service({
        method: 'post',
        url,
        params
      }).then(res => {
        resolve(res)
      })
    })
  },
  axiosGet(url,params){
    return new Promise(resolve => {
      // axiosBase({
      //   method: 'get',
      //   url,
      //   params
      // }).then(res => {
      //   resolve(res)
      // })
      // axiosBase({
      //   method: 'get',
      //   url,
      //   params
      // }).then(res => {
      //   resolve(res)
      // })
    })
  },
  base: service,
  config
}

http.install = vue =>{
  Vue.prototype.$http = http
}

export default http
