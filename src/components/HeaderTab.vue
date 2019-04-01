<template>
  <div class="clearfix">
    <el-menu :default-active="$route.path" active-text-color="#1890ff" mode="horizontal" class="nav">
      <el-menu-item index="/home"><router-link to="/home" class="tab-item">首页</router-link></el-menu-item>
      <el-menu-item  index="/downSdk"><router-link to="/downSdk" class="tab-item">SDK引用</router-link></el-menu-item >
      <el-menu-item  index="/developDoc"><router-link to="/developDoc" class="tab-item">文档</router-link></el-menu-item >
      <el-menu-item  index="/manageCenter"><router-link to="/manageCenter" class="tab-item">管理中心</router-link></el-menu-item >
      <el-menu-item  index="/login"><router-link to="/login" class="tab-item">登录</router-link></el-menu-item >
      <el-menu-item  index="/register"><router-link to="/register" class="tab-item">注册</router-link></el-menu-item >
    </el-menu>
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
.nav
  height 48px;
  line-height 48px;
  font-size 14px;
  float right
  border-bottom 1px solid #e8e8e8
  margin-bottom 20px
  margin-right 20px
  .el-menu-item
    line-height 48px;
    height 100%
</style>
