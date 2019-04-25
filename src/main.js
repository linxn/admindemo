// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import Qs from 'qs'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
require('../mock')
Vue.prototype.$axios = axios
Vue.prototype.qs = Qs

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
