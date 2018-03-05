<template>
  <div>
    <v-nav></v-nav>
    <v-swiper></v-swiper>
  </div>
</template>

<style>

</style>

<script>
import nav from '@/components/nav'
import swiper from '@/components/swiper'

export default {
  name: 'Main',
  components: {
    'v-nav': nav,
    'v-swiper': swiper
  }
}
</script>
