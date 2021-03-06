import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',//动态路由
      name: 'Detail',
      component: Detail
    }
  ],
  //页面切换过程中返回最顶部
  //对于拖动，多个页面之间会相互影响
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
