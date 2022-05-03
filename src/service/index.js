//service统一出口
import LYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
var base64 = require('base-64')
const lyRequest = new LYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      let token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTE5NjQwMzAsImlkIjoiMTIzIn0.fQAFmH1DTdncY0dlLRo7OCwF9k3Gjo8ssVHbaChmOgo'
      if (token) {
        token = token + ':'
        const hash = base64.encode(token)
        config.headers.Authorization = `Basic ${hash}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default lyRequest
