import axios from 'axios'
// import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000
})

export default service
