import axios from 'axios'
import { ElLoading } from 'element-plus'
//单独引入loading 样式
import 'element-plus/theme-chalk/el-loading.css'

const DEFAULT_LOADING = true
class LYRequest {
  constructor(config) {
    //创建axios实例
    this.instance = axios.create(config)
    //保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    //使用拦截器
    //1.从config取出拦截器是对应的实例的拦截器
    //->请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )
    //->响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )
    //添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        console.log('所有：请求成功拦截')
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        //响应成功移除loading
        if (this.loading) {
          this.loading.close()
        }
        return res
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('404')
        }
        return err
      }
    )
  }
  request(config) {
    return new Promise((resolve, reject) => {
      //1.单个请求处理拦截器
      if (config.interceptors) {
        if (config.interceptors.requestInterceptor) {
          config = config.interceptors.requestInterceptor(config)
        }
      }
      //2.判断是否需要loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request(config)
        .then((res) => {
          //1.单个请求处理数据
          if (config.interceptors) {
            if (config.interceptors.responseInterceptor) {
              res = config.interceptors.responseInterceptor(res)
            }
          }
          //2.请求完成后初始化
          this.showLoading = DEFAULT_LOADING
          return resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          return reject(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default LYRequest
