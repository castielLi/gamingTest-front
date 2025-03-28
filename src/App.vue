<template>
  <layoutPage>
    <router-view></router-view>
  </layoutPage>
</template>

<script>
import layoutPage from './views/layoutPage.vue'


export default {
  name: 'App',
  components: {
    layoutPage
  }
}
</script>

<style>
/* 全局样式可以保留在这里 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
