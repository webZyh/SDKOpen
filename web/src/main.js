// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$axios = axios;  //全局注册
Vue.prototype.$qs = qs;

import 'font-awesome/css/font-awesome.min.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import './mock/mockServer'    //加载mockServer

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
