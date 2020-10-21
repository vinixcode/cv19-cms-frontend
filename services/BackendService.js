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
  updateContent(id, data) {
    return api.patch('/content/' + id, data)
  },
  deleteContent(id) {
    return api.delete(`/content/${id}`)
  },
  getSections() {
    return api.get('/section')
  },
  getAContentSection(id) {
    return api.get(`/section/${id}`)
  },
}
