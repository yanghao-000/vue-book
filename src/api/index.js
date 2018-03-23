import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export let getSliders = () => {
  return axios.get('/sliders')
}

export let getHotBook = () => {
  return axios.get('/hot')
}

export let getBooks = () => {
  return axios.get('/book')
}

export let getPage = (offset) => {
  return axios.get(`/page?offset=${offset}`)
}

export let removeBook = (id) => {
  return axios.delete(`/book?id=${id}`)
}

export let findOneBook = (id) => {
  return axios.get(`/book?id=${id}`)
}

export let updateBook = (id, data) => {
  return axios.put(`/book?id=${id}`, data)
}

export let addBook = (data) => {
  return axios.post('/book', data)
}

export let getALL = (data) => {
  return axios.all([getSliders(), getHotBook()], data)
}
