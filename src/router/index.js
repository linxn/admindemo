import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '../views/layout/Layout'
import Login from '../views/login/index'
import store from '../store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      alias: '/layout',
      component: Layout
    }
  ]
})

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === './login') {
      next({ path: '/' })
    } else {
      console.log('roles: ' + store.getters.roles)
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          next() // 进行管道的下一个钩子 确保next被调用 不然不会执行resolved
          // GetInfo的时候就已经把用户数据写入cookie了（从服务端获取后写入cookie）
          // 然后next函数为执行下个钩子  即进行本来的跳转
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      // 不太明白后面的参数是什么意思 有什么用
    }
  }
})

export default router
