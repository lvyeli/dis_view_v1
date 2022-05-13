//service统一出口
import LYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
var base64 = require('base-64')
const lyRequest = new LYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      let token = localCache.getCache('token')
      if (token) {
        token = `${token}:`
        const hash = base64.encode(token)
        config.headers.Authorization = `Basic ${hash}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default lyRequest
