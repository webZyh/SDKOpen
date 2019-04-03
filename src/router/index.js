import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home/Home.vue'

Vue.use(Router)

const router =  new Router({
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
      component: resolve => require(['views/ManageCenter/ManageCenter.vue'],resolve),
      children:[
        {
          path:'/',
          name:'',
          component: resolve => require(['views/ManageCenter/ApplicationManage.vue'],resolve)
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})


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

export default router;
