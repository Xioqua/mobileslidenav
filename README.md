# vue-slider-tab

> 一个适用于移动端的滑动导航demo,配合vue-router,swiper

提供路由控制、点击切换、滑动导航、跟随滑动等效果

## 效果展示

![mobileslidenav](https://github.com/Xioqua/mobileslidenav/blob/master/screenshots/mobileslidenav.gif?raw=true)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

```

灵感来源 [http://www.cnblogs.com/zishang91/p/7940433.html](watchSlidesVisibility)

## bug todo fix

1. 在nav.vue
 
 > bug: 如果在最后一个页面反向(向)滑动,会发生读取不到setBtn

 2. 如何让swiper每次滑动不管触摸多大都只滑动一张!