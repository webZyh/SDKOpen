<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(bannerImg,index) in bannerImgs" :key="index">
          <a href="javascript:;" class="">
            <img :src="bannerImgPrefix+bannerImg.src" :alt="bannerImg.desc">
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper/dist/js/swiper'

  import {mapState} from 'vuex'
export default {
  data(){
    return{
      bannerImgPrefix: 'http://localhost:3000/'
    }
  },
  computed:{
    ...mapState({
      bannerImgs:state => state.common.bannerImgs
    })
  },
  mounted(){
    //获取banner数据，存vuex
    this.$store.dispatch("getBannerData");

    //this.bannerSlider();
  },
  methods: {
    /*bannerSlider() {
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }*/
  },
  watch:{
    bannerImgs(value){
      this.$nextTick(()=>{
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,    //操作后是否停止autoplay
          },
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
  padding-top 5px
  img
    width 100%
</style>
