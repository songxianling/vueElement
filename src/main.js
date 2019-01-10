/* eslint-disable */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import api from '@/api'
import axios from 'axios'
import '@/assets/css/reset.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.prototype.$api = api
// 跨域请求时自动携带cookie
axios.defaults.withCredentials = true
// 阻止vue的启动时生成生产提示警告
Vue.config.productionTip = false
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body)
//   }, false)
// }
/* eslint-disable no-new */
// 手动调用vm.$mount()方法来延迟挂载
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// export function createApp () {
//   // 创建 router 实例
//   const router = new createRouter()
//   const store = createStore()
//   sync(router,store)
//   const app = new Vue({
//     // 注入 router 到根 Vue 实例
//     router,
//     render: h => h(App)
//   })
//   // 返回 app 和 router
//   return { app, router }
// }
