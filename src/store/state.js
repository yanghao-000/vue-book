export let state = {
  cartList: []
}

export let getters = {
  count: (state) => {
    return state.cartList.reduce((prev, next) => {
      console.log(prev)
      console.log(next)
      return prev + next.bookCount
    }, 0)
  }
}
