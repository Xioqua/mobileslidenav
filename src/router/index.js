import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import Four from '@/components/Four'
import Five from '@/components/Five'
import Six from '@/components/Six'
import Seven from '@/components/Seven'
import Setting from '@/components/Setting'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/setting',
      name:'setting',
      component:Setting
    },{
      path: '/',
      name:'main',
      component:Main,
      children: [
        {path:'/one',component:One},
        {path:'/two',component:Two},
        {path:'/three',component:Three},
        {path:'/four',component:Four},
        {path:'/five',component:Five},
        {path:'/six',component:Six},
        {path:'/seven',component:Seven}
      ]
    }
  ]
})
