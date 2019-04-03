<template>
    <div class="main">
      <el-menu :default-active="$route.path" mode="vertical" :unique-opened="true" :router="true" background-color="#545c64" text-color="#fff" active-text-color="" :collapse="isCollapse" class="side-menu" :class="{collapsed:isCollapse}">
        <el-menu-item index="/manageCenter">
          <i class="iconfont icon-yingyongguanli"></i>
          <span>应用管理</span>
        </el-menu-item>
        <el-submenu index="/product">
          <template slot="title">
            <i class="iconfont icon-chanpinkaifa"></i>
            <span>产品开发</span>
          </template>
          <el-menu-item index="/product/1">产品定义</el-menu-item>
          <el-menu-item index="/product/2">订单管理</el-menu-item>
        </el-submenu>
        <el-submenu index="/dataStatistic">
          <template slot="title">
            <i class="iconfont icon-shujufenxi"></i>
            <span>数据分析</span>
          </template>
          <el-menu-item index="/dataStatistic/1">基本分析</el-menu-item>
          <el-menu-item index="/dataStatistic/2">产品分析</el-menu-item>
        </el-submenu>
        <el-submenu index="/verify">
          <template slot="title">
            <i class="iconfont icon-tubiaolunkuo-"></i>
            <span>管理员审核</span>
          </template>
          <el-menu-item index="/verify/1">企业认证审核</el-menu-item>
          <el-menu-item index="/verify/2">订单审核</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="main-content">
        <i :class="[isCollapse ? 'icon-zhedie-recovery': 'icon-zhedie','iconfont']" @click="toggleSideMenu()" style="cursor: pointer"></i>
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      isCollapse: false
    }
  },
  computed:{
    isCollapse() {
//        return this.$store.state.common.isCollapse
      return true;
    }
  },
  methods:{
    toggleSideMenu(){
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.side-menu
  width 200px
  height 100%
  position fixed
  left 0
  right 0
  transition: all 0.5s;
  &.collapsed {
    width: 60px;
    transition: all 0.5s;
  }
.main-content
  padding-left: 200px;
</style>
