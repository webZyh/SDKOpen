<template>
    <div class="main">
      <SideBar></SideBar>
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
.main-content
  padding-left 200px
  transition all 0.5s
  &.contentCollapse
    padding-left 60px
    transition all 0.5s
</style>
