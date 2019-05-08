import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '../views/layout/Layout'
import Login from '../views/login/index'
import {getToken} from '../utils/auth'
import store from '../store'

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
// TODO 很奇怪 state.token保存下来了 但是state.roles没有保存下来
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    console.log('router\\index.js have token')
    console.log('router\\index.js roles')
    console.log(store.getters.roles)
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.getters.roles.length === 0) {
        console.log('router\\index.js have token & do not have role')
        store.dispatch('GetInfo').then(res => {
          next()
        }).catch((err) => {
          console.log(err || 'Verification failed, please login again')
          next({path: '/'}) // 有token 没有用户信息
        })
      } else {
        console.log('router\\index.js have token & have role')
        console.log('router\\index.js roles: ' + store.getters.roles)
        next() // token和用户信息都有
      }
    }
  } else { // 没有token
    console.log('router\\index.js do not have token')
    if (whiteList.indexOf(to.path) !== -1) {
      console.log('router\\index.js do not have token & to login')
      next()
    } else {
      console.log('router\\index.js do not have token & not to login')
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登陆页
    }
  }
})

export default router
