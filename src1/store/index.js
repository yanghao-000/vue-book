import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import logger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {count: 0}
const getters = {
  val: (state) => state.count % 2 ? '奇数' : '偶数'
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [logger()],
  strict: true
})
