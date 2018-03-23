<template>
  <div>
    <div class="detail">
      <MHeader :back="true">详情</MHeader>
      <!--<div class="content">-->
        <!--{{bid}}-->
      <!--</div>-->
      <ul>
        <li>
          <label for="bookName">书的名称</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <button @click="update">确认修改</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MHeader from '@/base/MHeader.vue'
import {findOneBook, updateBook} from '@/api/index'
export default {
  data () {
    return {
      book: {}
    }
  },
  created () {
    this.getData()
  },
  watch: {
    $route () {
      this.getData()
    }
  },
  methods: {
    async getData () { // 通过id找到某一项后 赋给book
      this.book = (await findOneBook(this.bid)).data
      // 如果是空对象 需要跳转回列表页
      Object.keys(this.book).length > 0 ? void 0 : this.$router.push('/list')
    },
    async update () {
      await updateBook(this.bid, this.book)
      this.$router.push('/list')
    }
  },
  computed: {
    bid () {
      return this.$route.params.bid
    }
  },
  components: {
    MHeader
  }
}
</script>

<style scoped lang="less">
  ul{
    margin:50px 20px 0 20px;
  li{
  label{
    display: block;
    font-size: 25px;
  }
  input{
    margin: 10px 0;
    height: 25px;
    width: 100%;
  }
  button{ display: block;width: 80px;height: 35px; background: #2aabd2; color: #fff;border: none; border-radius: 4px; outline: none;}
  }
  }
  .detail{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
  }
</style>
