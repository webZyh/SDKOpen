<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'

  import libs from '../libs'
  import {mapActions} from 'vuex'
  export default {
    name: 'App',
    mounted(){
      this.getUserInfo();
      //this.$store.dispatch('getUserInfo');

      //this.initLocalStorage()
    },
    methods:{
      ...mapActions(['getUserInfo'])

      /*//设置localStorage过期时间
      initLocalStorage(){
        let newTime = new Date().getTime()
        console.log(newTime);
        libs.checkLocalStorage('userInfo',newTime,1000*60*60);

        //let obj = libs.getLocalStorage("userInfo")
        //console.log(obj);
      }*/
    },
    components:{
      Header,
      Footer
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
