# vue-slider-tab

> 一个适用于移动端的滑动导航demo,配合vue-router,swiper

提供路由控制、点击切换、滑动导航、跟随滑动、侧滑菜单等效果

## 效果展示

![mobileslidenav](https://github.com/Xioqua/mobileslidenav/blob/master/screenshots/mobileslidenav.gif?raw=true)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

```

灵感来源 [http://www.cnblogs.com/zishang91/p/7940433.html](http://www.cnblogs.com/zishang91/p/7940433.html)

## <del>bug todo fix</del>

1. 在nav.vue
 
 > bug: 如果在最后一个页面反向(后退)滑动,会发生读取不到setBtn,造成异常
 > 为什么只发生在 最后一个slide往回滑动的时候 找到是swiper.vue里不该监听 touchMove
 > bug解决 通过视口宽度 * 导航项个数

 2. 如何让swiper每次滑动不管触摸多大都只滑动一张!

 > 使用拖动距离`thresholdb`不小于250px(不知道这个值为多少比较好)变相实现