// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  if(to.matched.some(res=>res.meta.requireAuth)){ //判断是否需要登录权限
    if(localStorage.getItem('aid')){  //已登录
      next()
    }else{  //未登录
      console.log(to);
      next({
        path:'/login',
        query:{ redirect: to.fullPath }
      })
    }
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
