import axios from 'axios'
import QS from 'qs'


// 请求超时时间
axios.defaults.timeout = 1000 * 10;
// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
 let ret = ''
 for (let it in data) {
  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
 }
 return ret
}]

// 设置公共url
//axios.defaults.baseURL = 'http://127.0.0.1:7001'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // console.log(config);
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // console.log(error);
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log(response);
  // 对响应数据做点什么
  return response;
}, function (error) {
  // console.log(error);
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios