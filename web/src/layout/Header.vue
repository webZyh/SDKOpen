<template>
  <div class="clearfix">
    <el-row class="header-wrap">
      <el-col :span="12" class="logo-wrap">
        <div class="logo">
          <router-link to="/">
            <img src="./imgs/logo.svg" alt="">
          </router-link>
        </div>
      </el-col>
      <el-col :span="12" class="right-wrap">
        <el-row type="flex" justify="end" class="login-group">
          <div v-if="true">
            <router-link to="/login" class="login" v-show="!$route.meta.showLogin">登录</router-link>
            <router-link to="/register" class="register" v-show="!$route.meta.showRegister">注册</router-link>
          </div>
          <div v-else class="welcome">
            您好！晶讯云
          </div>
        </el-row>
        <el-row type="flex" justify="end" v-show="!$route.meta.showTab">
          <el-menu :default-active="$route.path" active-text-color="#1890ff" mode="horizontal" :router="true" class="nav">
            <el-menu-item index="/home">首页</el-menu-item>
            <!--<el-menu-item index="/downSdk">SDK引用</el-menu-item >-->
            <el-menu-item index="/developDoc">文档</el-menu-item >
            <el-menu-item index="/manageCenter">管理中心</el-menu-item >
            <!--<el-menu-item index="/login">登录</el-menu-item >
            <el-menu-item index="/register">注册</el-menu-item >-->
          </el-menu>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.header-wrap
  height 110px
  .logo-wrap
    padding-top 25px
    padding-left 10px
    .logo
      width 180px
      height 50px
  .right-wrap
    padding-top 10px
    .login-group
      font-size 16px
      font-weight 400
      padding-right 40px
      .login,.register
        /*text-decoration underline*/
        color blue
        vertical-align middle
      .register
        margin-left 10px
        vertical-align middle
    .nav
      height 48px;
      line-height 48px;
      font-size 14px;
      border-bottom 1px solid #e8e8e8
      margin-top 10px
      margin-right 20px
      .el-menu-item
        line-height 48px;
        height 100%
</style>
