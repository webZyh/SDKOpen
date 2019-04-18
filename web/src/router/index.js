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
      component: resolve => require(['views/Login/Login.vue'],resolve),
      meta:{
        showTab: true,
        showLogin: true
      }
    },
    {
      path: '/register',
      name:'register',
      component: resolve => require(['views/Register/Register.vue'],resolve),
      meta:{
        showTab: true,
        showRegister: true
      }
    },
    {
      path: '/forgetPsd',
      name:'forgetPsd',
      component: resolve => require(['views/ForgetPassword/ForgetPassword.vue'],resolve),
      meta:{
        showTab: true
      }
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
          component: resolve => require(['views/ManageCenter/Application/ApplicationManage.vue'],resolve)
        },
        {
          path:'/productDefine',
          name:'',
          component: resolve => require(['views/ManageCenter/Product/ProductDefine.vue'],resolve)
        },
        {
          path:'/orderManage',
          name:'',
          component: resolve => require(['views/ManageCenter/Product/OrderManage.vue'],resolve)
        },
        {
          path:'/basicAnalysis',
          name:'',
          component: resolve => require(['views/ManageCenter/DataAnalysis/BasicAnalysis.vue'],resolve)
        },
        {
          path:'/productAnalysis',
          name:'',
          component: resolve => require(['views/ManageCenter/DataAnalysis/ProductAnalysis.vue'],resolve)
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})


router.beforeEach((to,from,next)=>{
  console.log(to);  //去哪个页面
  if(to.matched.some(res=>res.meta.requireAuth)){ //判断是否需要登录权限

    if(document.cookie.indexOf('user_id')!=-1){  //已登录
      next()
    }else{  //未登录
      console.log(to);
      next({
        path:'/login',
        query:{ redirect: to.fullPath }
      })
    }
  }else{    //不需要登录权限
    next()
  }
})

export default router;
