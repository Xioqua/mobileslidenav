<template>
  <div class="setting-btn icon-in">
    <router-link to="/setting"><i class="iconfont icon-list"></i></router-link>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: #000;
}
.iconfont {
  font-size: 2em;
}
/* 这个图标与文字垂直不对齐 */ 
.setting-btn {
  position: fixed;
  height: 37px; /*magic:为了让图标对其选项*/
  right: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
}
.icon-in {
  border-radius: .3em 0 0 .3em;
  box-shadow: -5px 0 5px rgba(0,0,0,.6);
}
</style>

<script>
import '../../static/iconfont/iconfont.css'

export default {
  name: 'SettingBtn'
}
</script>
