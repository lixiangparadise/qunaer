// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// click事件延迟问题
import fastClick from 'fastclick'
//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
// 引入rest.css 不同浏览器显示不同问题
import 'styles/reset.css'
// border.css 1px边框像素问题
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
