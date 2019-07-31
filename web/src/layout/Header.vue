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
        <el-row type="flex" justify="end" class="right-menu">
          <LangSelect class="right-menu-item hover-effect" />
          <div v-if="!username">
            <router-link to="/login" class="login" v-show="!$route.meta.hideLogin">{{$t("user.login")}}</router-link>
            <router-link to="/register" class="register" v-show="!$route.meta.hideRegister">{{$t("user.register")}}</router-link>
          </div>
          <el-dropdown class="welcome-container" trigger="click" v-else>
            <div class="welcome-wrap">
              <div class="welcome">{{$t("hello")}}，{{username}}！</div>
              <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/home">
                <el-dropdown-item>{{ $t("headerMenu.homePage") }}</el-dropdown-item>
              </router-link>
              <router-link to="/developDoc">
                <el-dropdown-item>{{ $t("headerMenu.doc") }}</el-dropdown-item>
              </router-link>
              <router-link to="/table">
                <el-dropdown-item>{{ $t("headerMenu.table") }}</el-dropdown-item>
              </router-link>
              <router-link to="/myChart">
                <el-dropdown-item>{{ $t("headerMenu.chart") }}</el-dropdown-item>
              </router-link>
              <router-link to="/manageCenter">
                <el-dropdown-item>{{ $t("headerMenu.manageCenter") }}</el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span @click="logout"
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.7)"
                  v-loading.fullscreen.lock="fullscreenLoading"
                >{{$t("user.logout")}}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </el-row>
        <el-row type="flex" justify="end" v-show="!$route.meta.hideTab">
          <el-menu :default-active="$route.path" active-text-color="#1890ff" mode="horizontal" :router="true"
                   class="nav">
            <el-menu-item index="/home">{{ $t("headerMenu.homePage") }}</el-menu-item>
            <!--<el-menu-item index="/downSdk">SDK引用</el-menu-item >-->
            <el-menu-item index="/developDoc">{{$t("headerMenu.doc")}}</el-menu-item>
            <el-menu-item index="/table">{{$t("headerMenu.table")}}</el-menu-item>
            <el-menu-item index="/myChart">{{$t("headerMenu.chart")}}</el-menu-item>
            <el-menu-item index="/richText">{{$t("headerMenu.richText")}}</el-menu-item>
            <el-menu-item index="/manageCenter">{{$t("headerMenu.manageCenter")}}</el-menu-item>
            <!--<el-menu-item index="/login">登录</el-menu-item >
            <el-menu-item index="/register">注册</el-menu-item >-->
          </el-menu>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  import LangSelect from '../components/LangSelect/LangSelect.vue'
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
            //localStorage.removeItem('userInfo');
            //清空vuex中的username，使header组件刷新
            this.$store.commit('user_info','');

            this.$router.push({
              path: '/login'
            })
          }
        })
      }
    },
    components:{
      LangSelect
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
      .right-menu
        font-size 16px
        font-weight 400
        padding-right 40px
        .right-menu-item
          display inline-block
          padding 0 15px
          height 100%
          font-size: 18px
          color #5a5e66
          vertical-align text-bottom
          &.hover-effect
            cursor pointer
            transition background .3s
            &:hover
              background: rgba(0, 0, 0, .025)
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
          line-height 48px
          height 100%
</style>
