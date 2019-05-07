/*const whiteList = ['/login'] //不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path == './login') {
      next({ path: '/'})
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          next()   //进行管道的下一个钩子 确保next被调用 不然不会执行resolved
          //GetInfo的时候就已经把用户数据写入cookie了（从服务端获取后写入cookie）
          //然后next函数为执行下个钩子  即进行本来的跳转
        }).catch((err) => {
          next({ path: '/Login' })
          console.log('ccc' + err)
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

})*/
