import axios from 'axios'
const api = axios.create({
  baseURL: process.env.backendUrl,
})

export default {
  getContent() {
    return api.get('/content')
  },
  getAContent(id) {
    return api.get(`/content/${id}`)
  },
  createContent(data) {
    return api.post('/content', data)
  },
}
