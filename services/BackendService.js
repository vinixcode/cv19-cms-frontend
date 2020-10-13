import axios from 'axios'
const api = axios.create({
  baseURL: process.env.backendUrl,
})

export default {
  getContent() {
    return api.get('/content')
  },
}
