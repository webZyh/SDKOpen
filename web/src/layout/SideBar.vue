<template>
    <div class="">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <transition name="fold">
          <el-menu
            :default-active="$route.path"
            mode="vertical"
            :unique-opened="true"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            :collapse="isCollapse"
            :collapse-transition="false"
            class="side-menu"
            :class="{collapsed:isCollapse}"
          >
            <el-menu-item index="/manageCenter">
              <i class="iconfont icon-yingyongguanli"></i>
              <span>应用管理</span>
            </el-menu-item>
            <el-submenu index="/product">
              <template slot="title">
                <i class="iconfont icon-chanpinkaifa"></i>
                <span>产品开发</span>
              </template>
              <el-menu-item index="/productDefine">产品定义</el-menu-item>
              <el-menu-item index="/orderManage">订单管理</el-menu-item>
            </el-submenu>
            <el-submenu index="/dataAnalysis">
              <template slot="title">
                <i class="iconfont icon-shujufenxi"></i>
                <span>数据分析</span>
              </template>
              <el-menu-item index="/basicAnalysis">基本分析</el-menu-item>
              <el-menu-item index="/productAnalysis">产品分析</el-menu-item>
            </el-submenu>
            <el-submenu index="/verify">
              <template slot="title">
                <i class="iconfont icon-tubiaolunkuo-"></i>
                <span>管理员审核</span>
              </template>
              <el-menu-item index="/verify/1">企业认证审核</el-menu-item>
              <el-menu-item index="/verify/2">订单审核</el-menu-item>
            </el-submenu>
            <el-col>
              <i :class="[isCollapse ? 'icon-zhedie-recovery': 'icon-zhedie','iconfont']" class="collapse-icon" @click="toggleSideMenu()" style="cursor: pointer"></i>
            </el-col>
          </el-menu>
        </transition>
      </el-scrollbar>
    </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  computed:{
     isCollapse() {
        return this.$store.state.common.isCollapse
     }
  },
  methods:{
    toggleSideMenu(){
      this.$store.commit('toggleSiderBar')
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.el-scrollbar
  height:100%
  .el-scrollbar__wrap
    overflow-x hidden
    .side-menu
      width 220px
      height 100%
      position fixed
      top 110px
      left 0
      bottom 67px
      &.fold-enter-active, &.fold-leave-active{
       transition all .5s
      }
      &.fold-enter,&.fold-leave-to{
        width 60px
      }

      &.collapsed {
        width 60px
      }
      .collapse-icon{
        position absolute
        right 0
        top 5px
      }
</style>
