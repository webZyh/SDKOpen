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

  import {mapActions} from 'vuex'
  export default {
    name: 'App',
    mounted(){
//      this.getUserInfo();
      //this.$store.dispatch('getUserInfo');
    },
    methods:{
//      ...mapActions(['getUserInfo'])
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
