<template>
  <div class="clearfix">
    <el-row type="flex" justify="end">
      <el-menu :default-active="$route.path" active-text-color="#1890ff" mode="horizontal" :router="true" class="nav">
        <el-menu-item index="/home">首页</el-menu-item>
        <!--<el-menu-item index="/downSdk">SDK引用</el-menu-item >-->
        <el-menu-item index="/developDoc">文档</el-menu-item >
        <el-menu-item index="/manageCenter">管理中心</el-menu-item >
        <el-menu-item index="/login">登录</el-menu-item >
        <el-menu-item index="/register">注册</el-menu-item >
      </el-menu>
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
.nav
  height 48px;
  line-height 48px;
  font-size 14px;
  border-bottom 1px solid #e8e8e8
  margin-bottom 20px
  margin-right 20px
  .el-menu-item
    line-height 48px;
    height 100%
</style>
