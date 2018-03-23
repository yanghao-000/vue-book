<template>
  <div>
    <MHeader>购物车</MHeader>
    <ul class="content">
      <li v-for="(item, i) in cartList" :key="i">
        <img :src="item.bookCover" alt="">
        {{item.bookCount}}
      </li>
      <li>共{{count}}本</li>
    </ul>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader.vue'
import {mapState, mapGetters} from 'vuex'
console.log(mapState(['cartList']))
export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {},
  computed: {
    ...mapState(['cartList']),
    ...mapGetters(['count'])
//    cartList () {
//      return this.$store.state.cartList
//    }
  },
  components: {MHeader}
}
</script>

<style scoped>

</style>
