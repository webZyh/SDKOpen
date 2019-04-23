<template>
    <div class="main">
      <div class="side-bar">
        <SideBar></SideBar>
      </div>
      <div class="main-content" :class="{contentCollapse:isCollapse}">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
  import SideBar from '../../layout/SideBar.vue'
  import {mapState} from 'vuex'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      "isCollapse": state => state.common.isCollapse
    })
  },
  components:{
    SideBar
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.main
  .side-bar
    width 220px
  .main-content
    padding-left 220px
    transition all 0.5s
    &.contentCollapse
      padding-left 60px
</style>
