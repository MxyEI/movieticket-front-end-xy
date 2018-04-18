/**
 * Created by Administrator on 2017/4/25 0025.
 */
import Qs from 'qs'
import axios from 'axios'
import router from '../router/index'
import { Message } from 'element-ui';

var  service=axios.create({
  baseURL: 'http://192.168.1.188:9000/aiom', // api的base_url yyx-house-expor-api
  timeout: 5000,                  // 请求超时时间
  transformRequest: [function (data, headers) {
      // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
    data = Qs.stringify(data)
    return data;
  }],

  // `transformResponse`可以在响应数据被传递给/ catch之前进行更改
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    return data;
  }],

  // `headers`是要发送的自定义标题
  // headers: {'Content-Type': 'application/json;charset=UTF-8'},
  // `params`是与请求一起发送的URL参数
  params: {},

  // `paramsSerializer`是一个可选的函数，负责序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  }
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

service.defaults.withCredentials = true;

service.interceptors.request.use(
  config => {
    if (store.state.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `${store.state.token}`;
    }
    if(config.url=="/user/upload" || config.url=="/user/downloadkey"){
      config.headers.Authorization = `${store.state.token}`;
    }
    if(config.method=='post'){
      config.data = {
        ...config.data
      }
    }else if(config.method=='get'){
      config.params = {
        ...config.params
      }
    }
    return config
  },function(error){
    return Promise.reject(error)
  }
)
service.interceptors.response.use(// 响应成功关闭loading
  config => {
    config.data = JSON.stringify(config.data)
    /*console.log( config.headers)
    console.log("------")*/
    if (store.state.token) {

      // 判断是否存在token，如果存在的话，则每个http header都加上token
 /* config.headers.Authorization =store.state.token;*/

      /*config.headers.Authorization= `token ${store.state.token}`*/
      config.headers['Authorization'] = `token ${store.state.token}`

      /*console.log( config.headers)*/
    }
    config.headers = {
     'Content-Type' : 'application/x-www-form-urlencoded'
     }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

// http响应拦截器
service.interceptors.response.use(// 响应成功关闭loading
  response => {
    response.data = eval(response.data)
    return response;
  },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '请求错误'
            break
          case 401:
            error.message =JSON.parse(error.response.data).message
              /*'用户会话过期，请重新登录。'*/
            break
          case 403:
            error.message = '当前用户没有该权限！'
            break
          case 404:
            error.message = (process.env.NODE_ENV === 'production' ? `请求地址出错` : `请求地址出错: ${error.response.config.url}`)
            break
          case 408:
            error.message = '请求超时'
            break
          case 500:
            error.message = '服务器内部错误，请联系管理员。'
            break
          case 501:
            error.message = '服务未实现'
            break
          case 502:
            error.message = '网关错误'
            break
          case 503:
            error.message = '服务不可用'
            break
          case 504:
            error.message = '网关超时'
            break
          case 505:
            error.message = 'HTTP版本不受支持'
            break
          default:
        }
        Message({
          message: error.message,
          type: 'error',
          duration: 5 * 1000
        });
        if (error.message == '用户会话过期，请重新登录。'){
          router.replace({
            path: '/'
          })
        }
      }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
      return Promise.reject(error.response)
    });
export default service


