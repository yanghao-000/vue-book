<template>
  <div>
    <MHeader :back="false">首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader.vue'
import Swiper from '@/base/Swiper.vue'
import {getSliders} from '@/api/index'
export default {
  data () {
    return {
      sliders: []
    }
  },
  created () {
    this.getSlider()
  },
  methods: {
    async getSlider () {
      // 给data起别名 对象中的属性名字必须和 得到的结果名字一致
      this.sliders = (await getSliders()).data
      // 将获取的数据放到sliders中
    }
  },
  computed: {},
  components: {
    MHeader,
    Swiper
  }
}
</script>

<style scoped>

</style>
