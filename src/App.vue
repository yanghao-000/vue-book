<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from '@/base/Tab.vue'
export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {},
  computed: {},
  components: {
    Tab
  }
}
</script>

<style lang="less">
  @import '//at.alicdn.com/t/font_598019_86qkszu87k9ms4i.css';
  *{margin: 0;padding: 0}
  ul,li{list-style: none}
  a{text-decoration: none}
  input,button{-webkit-appearance:none}
  .content{position: fixed;width: 100%;top: 40px;bottom: 50px;overflow: auto}

  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.3s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.3s linear;
    opacity: 0;
  }
</style>
