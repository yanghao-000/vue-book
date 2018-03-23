<template>
  <div>
    <MHeader :back="false">首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>热门图书</h3>
        <ul>
          <li v-for="(hot ,index) in hotBooks" :key="index">
            <img :src="hot.bookCover">
            <b>{{hot.bookName}}</b>
          </li>
        </ul>
      </div>
      </template>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader.vue'
import Swiper from '@/base/Swiper.vue'
import Loading from '@/base/Loading.vue'
//  import {getSliders, getHotBook} from '@/api/index'
import {getALL} from '@/api/index'
export default {
  data () {
    return {
      sliders: [],
      hotBooks: [],
      loading: true
    }
  },
  created () {
//    this.getSlider()
//    this.getHotBooks()
    this.getData()
  },
  methods: {
//    async getSlider () {
//      this.sliders = (await getSliders()).data
//    },
//    async getHotBooks () {
//      this.hotBooks = (await getHotBook()).data
//    }
    async getData () {
      let [sliders, hotBooks] = await getALL()
      this.sliders = sliders.data
      this.hotBooks = hotBooks.data
      this.loading = false
    }
  },
  computed: {},
  components: {
    MHeader,
    Swiper,
    Loading
  }
}
</script>

<style scoped lang="less">
  h3 {
    color: #999;
    padding: 5px 0
  }
  .container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap; /*默认不换行*/
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
