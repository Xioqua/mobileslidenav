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
  <setting-btn></setting-btn>
 </div>
</template>

<script>
import Router from 'vue-router'
import Swiper from '../../static/swiper/swiper-4.1.0.min.js'
import '../../static/swiper/swiper-4.1.0.min.css'
import SettingBtn from '@/components/SettingBtn'

export default {
  components: {
    'setting-btn': SettingBtn
  },
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
      arr: ['/one','/two','/three','/four','/five','/six','/seven'],
      slidesPerView: 3
    }
  },
  mounted() {
    this.$root.eventHub.$on('slideTab',this.slideTab)

    this.$nextTick(() => {
      this.initPage()
    })

    this.navSwiper = new Swiper('.nav',{
      slidesPerView: this.slidesPerView,
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
      var posA = this.navList.length - Math.ceil(this.slidesPerView / 2)
      // console.log(posA)
      // 当到达posA位置时把setting-btn的样式去掉
      var setBtn = document.getElementsByClassName('setting-btn')[0]
      if (this.nowIndex >= posA) {
        setBtn.classList = 'setting-btn'
      } else if(this.nowIndex < posA) {
        setBtn.classList = 'setting-btn icon-in'
      }
      // bug: 如果在最后一个页面反向(后退)滑动,会发生读取不到setBtn 根源在swiper页面
   }
  }
}

</script>

<style scoped>
.item {padding: .5em;box-sizing: border-box;}
.item.active {
  color: #cd6115;
}
.item:last-child {
  padding-right: 3.5em;
}
</style>