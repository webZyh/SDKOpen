<template>
    <div class="">
      <div class="search-box"></div>
      <div class="developDoc-wrap">
        <div class="menu-wrapper">
          <ul class="developDoc-menu">
            <li class="nav-item">
              <template>
                <div class="nav-group" v-for="(item,key) in data" :key="key">
                  <div class="nav-group-title" v-if="item.groups">{{item.groupName}}</div>
                  <router-link v-else active-class="active" :to="item.path" exact v-text="item.groupName"></router-link>
                  <ul class="menu-list">
                    <li class="nav-item" v-for="(navItem ,key) in item.groups" :key="key">
                      <div class="list-title" v-if="navItem.lists">{{navItem.name}}</div>
                      <router-link v-else active-class="active" :to="navItem.path" exact v-text="navItem.name"></router-link>
                      <ul class="nav-item-list" v-if="navItem.lists" >
                        <li v-for="(navList,key) in navItem.lists">
                          <router-link active-class="active" :to="navList.path" exact v-text="navList.name"></router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </template>
            </li>
          </ul>
        </div>
        <div class="developDoc-cont cont-wrapper">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      data(){
        return{
          data:[]
        }
      },
      mounted(){
        this.initDocData();
        this.initContScroll();
      },
      methods: {
        initDocData(){
          this.$axios.get('/developDoc').then((res)=>{
            let rs = res.data;
            if(rs.code == 0){
              this.data = rs.data;
              this.$nextTick(()=>{
                this.menuScroll = new BScroll('.menu-wrapper',{
                  bounce: true,
                  momentumLimitDistance: 5,
                  scrollY: true,
                  scrollbar: {
                    fade: false,      //显示滚动条
                    interactive: false // 1.8.0 新增
                  },
                  mouseWheel: true,
                })
              })
            }
          }).catch((err)=>{
            console.log(err);
          })
        },
        initContScroll(){
          this.$nextTick(()=>{
            this.contentScroll = new BScroll('.cont-wrapper',{
              bounce: true,
              momentumLimitDistance: 5,
              scrollY: true,
              /*scrollbar: {
                fade: false,      //显示滚动条
                interactive: false // 1.8.0 新增
              },*/
              mouseWheel: true,
            })
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.developDoc-wrap
  display flex
  position absolute
  top 110px
  bottom 67px
  padding 0 20px
  overflow hidden
  .menu-wrapper
    position relative   /*控制scrollBar的显示位置*/
    width 200px
    .developDoc-menu
      .nav-item
        a
          display block
          height 40px
          color #444
          line-height 40px
          font-size 14px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          font-weight normal
          &:hover,&.active
            color #409EFF
        .nav-group-title
          font-size 12px
          color #999
          line-height 26px
          margin-top 15px
        .menu-list
          .list-title
            color #666
            line-height 26px
            margin-top 15px
        .nav-item-list
          padding-left 10px
  .developDoc-cont
    flex 1
    width 1200px
</style>
