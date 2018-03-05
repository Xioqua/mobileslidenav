<template>
  <div class="setting">
    这是设置页,可由settingBtn点击打开,也可由滑动到最后一个页面继续滑动触发打开
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<style>
.setting {
  text-align: left;
  padding: 10vmax;
}
</style>

<script>
export default {
  name:'Setting'
}
</script>
