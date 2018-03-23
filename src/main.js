import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522374856&di=00c2322ebbc4c8cec4214d517828cac8&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn2.freepik.com%2Fimage%2Fth%2F318-10733.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521782806936&di=96f80d8f8e313b86e0d411e6e568ffb0&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e9875542c6380000019ae955160b.jpg',
  attempt: 1
})

Vue.config.productionTip = false

// 在进入路由之前 每一次都会执行此方法,全局钩子,拦截功能
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title
  if (to.path === '/list') {
    // next({path:'/add'})
    next()
  } else {
    next()
  }
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  store
})
