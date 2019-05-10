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
    },
    {
      path: '/example',
      component: Layout,
      redirect: '/example/table',
      name: 'Example',
      meta: { title: 'Example', icon: 'example' },
      children: [
        {
          path: 'table',
          name: 'Table',
          component: () => import('@/views/table/index'),
          meta: { title: 'Table', icon: 'table' }
        },
        {
          path: 'tree',
          name: 'Tree',
          component: () => import('@/views/tree/index'),
          meta: { title: 'Tree', icon: 'tree' }
        }
      ]
    },

    {
      path: '/form',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Form',
          component: () => import('@/views/form/index'),
          meta: { title: 'Form', icon: 'form' }
        }
      ]
    },

    {
      path: '/nested',
      component: Layout,
      redirect: '/nested/menu1',
      name: 'Nested',
      meta: {
        title: 'Nested',
        icon: 'nested'
      },
      children: [
        {
          path: 'menu1',
          component: () => import('@/views/nested/menu1/index'), // Parent router-view
          name: 'Menu1',
          meta: { title: 'Menu1' },
          children: [
            {
              path: 'menu1-1',
              component: () => import('@/views/nested/menu1/menu1-1'),
              name: 'Menu1-1',
              meta: { title: 'Menu1-1' }
            },
            {
              path: 'menu1-2',
              component: () => import('@/views/nested/menu1/menu1-2'),
              name: 'Menu1-2',
              meta: { title: 'Menu1-2' },
              children: [
                {
                  path: 'menu1-2-1',
                  component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                  name: 'Menu1-2-1',
                  meta: { title: 'Menu1-2-1' }
                },
                {
                  path: 'menu1-2-2',
                  component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                  name: 'Menu1-2-2',
                  meta: { title: 'Menu1-2-2' }
                }
              ]
            },
            {
              path: 'menu1-3',
              component: () => import('@/views/nested/menu1/menu1-3'),
              name: 'Menu1-3',
              meta: { title: 'Menu1-3' }
            }
          ]
        },
        {
          path: 'menu2',
          component: () => import('@/views/nested/menu2/index'),
          meta: { title: 'menu2' }
        }
      ]
    },

    {
      path: 'external-link',
      component: Layout,
      children: [
        {
          path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
          meta: { title: 'External Link', icon: 'link' }
        }
      ]
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
