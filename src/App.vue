<template>
  <div id="app">
    <v-nav></v-nav>
    <v-swiper></v-swiper>
  </div>
</template>

<script>
import nav from './components/nav'
import swiper from './components/swiper'

export default {
  name: 'App',
  components: {
    'v-nav': nav,
    'v-swiper': swiper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vmax;
}
body {margin: 0;}
</style>
