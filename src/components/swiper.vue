<template>
 <div class="swiper-box">
   <div class="swiper-container content">
     <div class="swiper-wrapper">
       <div class="swiper-slide" v-for="(item,index) in list">
         <keep-alive>
           <component :is="item.component"></component>
         </keep-alive>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import Swiper from '../../static/swiper/swiper-4.1.0.min.js'
import '../../static/swiper/swiper-4.1.0.min.css'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import Four from '@/components/Four'
import Five from '@/components/Five'
import Six from '@/components/Six'
import Seven from '@/components/Seven'

export default {
  components: {One,Two,Three,Four,Five,Six},
  data() {
    return {
      list: [
        {path:'/one',component:One},
        {path:'/two',component:Two},
        {path:'/three',component:Three},
        {path:'/four',component:Four},
        {path:'/five',component:Five},
        {path:'/six',component:Six},
        {path:'/seven',component:Seven}
      ],
      arr: ['/one','/two','/three','/four','/five','/six','/seven']
    }
  },
  mounted() {
    var that = this

    var mySwiper = new Swiper('.content',{
       on: {
        //  bug根据在于touchMove没有确定方向
        touchMove() {
          if(this.isEnd) {
            that.$router.push({path:'/setting'})
          }
        }
      }
    })

    this.$root.eventHub.$on('changeTab',(index) => {
      mySwiper.slideTo(index,0,false)
    })

    mySwiper.on('slideChange',() => {
      this.$root.eventHub.$emit('slideTab',mySwiper.activeIndex)
    })

    var i = this.arr.indexOf(this.$route.path)
    mySwiper.slideTo(i,0,false)
  }
}
</script>

<style scoped>
.swiper-container {
  height: 100vmin;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
