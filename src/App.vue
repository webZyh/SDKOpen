<template>
  <div id="app">
    <HeaderTab></HeaderTab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderTab from './components/HeaderTab.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components:{
      HeaderTab,
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
