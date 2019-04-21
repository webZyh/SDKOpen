<template>
    <div class="developDoc-wrap">
      <!--<el-menu
        :default-active="$route.path"
        mode="vertical"
        :unique-opened="true"
        :router="true"
        background-color="#FFF"
        text-color="#000"
        class="developDoc-menu"
      >
        <el-menu-item index="">
          <span>鉴权</span>
        </el-menu-item>
        <el-submenu index="">
          <template slot="title">
            <span>Android</span>
          </template>
          <el-menu-item index="">快速开始</el-menu-item>
          <el-menu-item index="">说明文档</el-menu-item>
        </el-submenu>
        <el-submenu index="/dataAnalysis">
          <template slot="title">
            <span>IOS</span>
          </template>
          <el-menu-item index="">快速开始</el-menu-item>
          <el-menu-item index="">说明文档</el-menu-item>
        </el-submenu>
      </el-menu>-->
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick"
        class="developDoc-menu"
      >

      </el-tree>
      <div class="developDoc-cont">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          data:[
            {
              label:'鉴权',
              path:'/developDoc'
            },
            {
              label: 'Andorid',
              children: [
                {
                  label: '快速开始',
                  path:'/developDoc/fastStart'
                },
                {
                  label:'开发文档',
                  path:'/developDoc/doc'
                }
              ]
            },
            {
              label: 'IOS',
              children: [
                {
                  label: '快速开始',
                  path:'/developDoc/ifastStart'
                },
                {
                  label:'开发文档',
                  path:'/developDoc/idoc'
                }
              ]
            }
          ],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        }
      },
      methods: {
        handleNodeClick(obj) {
          console.log(obj);
          this.$router.push(obj.path);
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.developDoc-wrap
  padding 0 20px
  display flex
  .developDoc-menu
    width 200px
    background #dcdcdc
  .developDoc-cont
    flex 1
</style>
