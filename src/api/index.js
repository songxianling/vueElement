/**
 * api集成管理
 */
import axios from 'axios'

let sUrl
if (process.env.NODE_ENV === 'dev') {
  console.log('开发环境')
  sUrl = 'https://apiwx.xiangha.com'
} else {
  sUrl = 'http://177.77.77.77'
}

export default {
  apiComPost(apiname, param, callback) {
    let params = param
    let apiUrl = sUrl
    axios.post(apiUrl + apiname, params).then(response => {
      callback(response.data)
    })
  }
}

// 添加接口回调拦截器
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return response
  } else {
    alert('突然打了个盹～～～')
  }
}, error => {
  alert('发生错误了～')
  return Promise.reject(error)
})
