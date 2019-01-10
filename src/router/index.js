import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/page/index/index')), 'Index') // 主页
const Other = r => require.ensure([], () => r(require('@/page/other/other')), 'Other') // 其他

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index', // 首页
    name: '首页',
    component: Index,
    meta: {keepAlive: true}
  },
  {
    path: '/other', // 作者
    name: '其他页面',
    component: Other,
    meta: {keepAlive: true}
  }
]

// 路由配置
const router = new VueRouter({
  mode: 'history', // history
  base: __dirname,
  routes: routes
})

export default router
