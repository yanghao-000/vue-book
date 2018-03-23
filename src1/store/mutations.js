import * as Types from './mutations-type'
let mutations = {
  [Types.INCREMENT] (state, addCount) {
    state.count += addCount
  },
  [Types.DECREMENT] (state, addCount) {
    state.count -= addCount
  }
}
export default mutations
