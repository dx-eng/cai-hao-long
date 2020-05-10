import axios from 'axios'
import store from '@/store'
import NProgress from 'nprogress'
import { Message } from 'element-ui'
import {getToken, setToken, removeToken} from '@/utils/auth'
import website from '@/config/website';

axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress Configuration
NProgress.configure({
    showSpinner: false
});
//HTTPrequest拦截
axios.interceptors.request.use(config => {
    NProgress.start(); // start progress bar
    const meta = (config.meta || {});
    const isToken = meta.isToken === false;
    //const token = getToken();
    const token = store.state.token;
    if (token) {
        config.headers['authorization'] = 'bearer ' + token;

    }
    console.log(token,config.method);
    //headers中配置serialize为true开启序列化
    if (config.method === 'post' && meta.isSerialize === true) {
      console.log(config.data,88888888899998889988);
        config.data = serialize(config.data);
    }
    return config
}, error => {
    return Promise.reject(error)
});

//HTTPresponse拦截
axios.interceptors.response.use(res => {
  NProgress.done();
  console.log(res.data )
  const status = res.data || 200;
  const statusWhiteList = website.statusWhiteList || [];
  const message = res.data.msg || '未知错误';
  //如果在白名单里则自行catch逻辑处理
  console.log(99999,status)
  if (statusWhiteList.includes(status)) return Promise.reject(res);
  //如果是502则跳转到登录页面
  if (status === 502) {
      store.dispatch('FedLogOut').then(() => {
          window.location.href = '/login'
      })
  }


  if (status === 501) {
      store.dispatch('FedLogOut').then(() => {
          window.location.href = '/login'
      })

  }
  if (status !== 200) {
      // console.error("LOOK ERROR MSG:",message);
      Message({
          message: message,
          type: 'error'
      });
      return Promise.reject(new Error(message))
  }
  return res;
}, error => {
  NProgress.done();
  return Promise.reject(new Error(error));
});

export default axios;










// const request = axios.create({
//   baseURL: 'http://jsonplaceholder.typicode.com',
//   timeout: 12000,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// })

// // 请求拦截器
// request.interceptors.request.use(
//   config => {
//     config.headers['token'] = store.state.token
//     NProgress.start()
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
// // 响应拦截器
// request.interceptors.response.use(
//   response => {
//     NProgress.done()
//     return response
//   },
//   error => {
//     Message.error({
//       message: error.message
//     })
//     NProgress.done()
//     return Promise.reject(error)
//   }
// )
// export default request



