import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations'
import * as States from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  ...States,
  plugins: [logger()],
  strict: true,
  mutations
})
