import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import Four from '@/components/Four'
import Five from '@/components/Five'
import Six from '@/components/Six'
import Seven from '@/components/Seven'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'One',
      component: One
    },
    {
      path: '/one',
      redirect: '/'
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/Three',
      name: 'three',
      component: Three
    },
    {
      path: '/four',
      name: 'four',
      component: Four
    },
    {
      path: '/five',
      name: 'five',
      component: Five
    },
    {
      path: '/six',
      name:'six',
      component:Six
    },
    {
      path: '/seven',
      name:'seven',
      component:Seven
    }
  ]
})
