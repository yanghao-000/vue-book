// vuex 平级组件交互，找共同的父级解决，跨组件交互，eventBus混乱（发布订阅）

// vuex主要借鉴了 （flux redux）,vuex只能在vue中使用（单独为vue开发的）

// vuex为了大型项目，主要是（状态）管理,将数据统一管理

import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 计数器
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
