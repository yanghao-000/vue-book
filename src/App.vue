<template>
  <div id="app">
    <router-view></router-view>
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

<style scoped lang="less">
  @import '//at.alicdn.com/t/font_598019_jprmjk930x80k9.css';
  *{margin: 0;padding: 0}
  ul,li{list-style: none}
  a{text-decoration: none}
  input,button{-webkit-appearance:none;}
  .content{position: fixed;width: 100%;top: 40px;bottom: 50px;overflow: auto}
</style>
