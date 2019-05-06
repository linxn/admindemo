import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from "@/utils/auth"

const whiteList = ['/login'] //不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path == './login') {
      next({ path: '/'})
    } else {

    }
  }

})
