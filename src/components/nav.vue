<template>
 <div class="nav swiper-container" ref="nav">
   <div class="swiper-wrapper">
     <div class="item swiper-slide" 
          v-for="(item,index) in navList"
          :class="{'active': nowIndex===index}"    
          @click="tabClick(index)"
      >
       {{item.name}}
     </div>
   </div>
 </div>
</template>

<script>
import Router from 'vue-router'
import Swiper from '../../static/swiper/swiper-4.1.0.min.js'
import '../../static/swiper/swiper-4.1.0.min.css'

export default {
  data() {
    return {
      navList: [
        {name:'页面一'},
        {name:'页面二'},
        {name:'页面三'},
        {name:'页面四'},
        {name:'页面五'},
        {name:'页面六'},
        {name:'页面七'}
      ],
      nowIndex: 0,
      arr: ['/one','/two','/three','/four','/five','/six','/seven']
    }
  },
  mounted() {
    this.$root.eventHub.$on('slideTab',this.slideTab)

    this.$nextTick(() => {
      this.initPage()
    })

    this.navSwiper = new Swiper('.nav',{
      slidesPerView: 3,
      watchSlidesProgress: true,
      watchSlidesVisibility: true
    })
  },
  methods: {
    initPage() {
     this.nowIndex = this.arr.indexOf(this.$route.path)
    },

    tabClick(index) {
      this.nowIndex = index
      this.$root.eventHub.$emit('changeTab',index)
    },
    slideTab(index) {
      this.nowIndex = index
      let href = this.arr[this.nowIndex]
      let router = new Router()
      router.push(href)

      this.navSwiper.slideTo(this.nowIndex-1)
   }
  }
}

</script>

<style scoped>
.item {padding: 1em;box-sizing: border-box;}
.item.active {
  background-color: #abc;
}
</style>


