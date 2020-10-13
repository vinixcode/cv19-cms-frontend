import axios from 'axios'
const api = axios.create({
  baseURL: process.env.backendUrl,
  withCredentials: true,
})

export default {
  getContent() {
    return api.get('/content')
  },
}
