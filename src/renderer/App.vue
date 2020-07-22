<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import appMenu from './components/common/Menu'
  export default {
    name: 'electron',
    components:{
      appMenu
    },
  }
</script>

<style>
  /* CSS */
</style>
