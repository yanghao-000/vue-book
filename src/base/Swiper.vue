<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props: ['swiperSlides'],
    data () {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          observeParents: true
        }
      }
    },
    mounted () {

    }
  }
</script>

<style scoped>
  img{
    width: 100%;
    height: 120px;
  }
</style>
