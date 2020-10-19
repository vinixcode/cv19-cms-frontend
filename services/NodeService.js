import axios from 'axios'
const api = axios.create({
  baseURL: process.env.UrlNodeService,
})

export default {
  getSections() {
    return api.get('/crud/sectionContent')
  },
  getASection(id) {
    return api.get(`/crud/sectionContent/${id}`)
  },
}
