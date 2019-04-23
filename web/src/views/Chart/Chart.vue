<template>
    <div class="">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        show: true
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all  .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    margin-left: 100px;
  }
</style>
