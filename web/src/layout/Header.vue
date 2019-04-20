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
          <div v-if="!username">
            <router-link to="/login" class="login" v-show="!$route.meta.showLogin">登录</router-link>
            <router-link to="/register" class="register" v-show="!$route.meta.showRegister">注册</router-link>
          </div>
          <el-dropdown class="welcome-container" trigger="click" v-else>
            <div class="welcome-wrap">
              <div class="welcome">您好，{{username}}！</div>
              <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/home">
                <el-dropdown-item>首页</el-dropdown-item>
              </router-link>
              <router-link to="/developDoc">
                <el-dropdown-item>文档</el-dropdown-item>
              </router-link>
              <router-link to="/manageCenter">
                <el-dropdown-item>管理中心</el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span @click="logout"
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.7)"
                  v-loading.fullscreen.lock="fullscreenLoading"
                >退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </el-row>
        <el-row type="flex" justify="end" v-show="!$route.meta.showTab">
          <el-menu :default-active="$route.path" active-text-color="#1890ff" mode="horizontal" :router="true"
                   class="nav">
            <el-menu-item index="/home">首页</el-menu-item>
            <!--<el-menu-item index="/downSdk">SDK引用</el-menu-item >-->
            <el-menu-item index="/developDoc">文档</el-menu-item>
            <el-menu-item index="/manageCenter">管理中心</el-menu-item>
            <!--<el-menu-item index="/login">登录</el-menu-item >
            <el-menu-item index="/register">注册</el-menu-item >-->
          </el-menu>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        fullscreenLoading:false
      }
    },
    computed: {
      /*username(){
        return this.$store.state.common.username
      },*/
      ...mapState({
        'username': state => state.common.username
      }),
    },
    methods: {
      logout() {
        this.fullscreenLoading = true;
        this.$axios.post('api/logout').then((res) => {
          let rs = res.data;
          if (rs.code == 0) {
            this.fullscreenLoading = false;
            //清空localStorage
            localStorage.removeItem('userInfo');
            //清空vuex中的username，使header组件刷新
            this.$store.commit('user_info','');

            this.$router.push({
              path: '/login'
            })
            //window.location.reload();   //刷新页面
          }
        })
      }
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
        .login, .register
          /*text-decoration underline*/
          color blue
          vertical-align middle
        .register
          margin-left 10px
          vertical-align middle
      .welcome-wrap
        position relative
        .welcome
          cursor pointer
        .el-icon-caret-bottom
          cursor pointer
          position absolute
          right -12px
          top 4px
          font-size 12px
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
