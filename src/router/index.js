import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {
      path: '/login',
      name:'login',
      component: resolve => require(['views/Login/Login.vue'],resolve)
    },
    {
      path: '/register',
      name:'register',
      component: resolve => require(['views/Register/Register.vue'],resolve)
    },
    {
      path: '/forgetPsd',
      name:'forgetPsd',
      component: resolve => require(['views/ForgetPassword/ForgetPassword.vue'],resolve)
    },
    {
      path: '/manageCenter',
      name:'manageCenter',
      meta: {
        requireAuth: true
      },
      component: resolve => require(['views/ManageCenter/ManageCenter.vue'],resolve)
    }
  ],
  linkActiveClass: 'active'
})
