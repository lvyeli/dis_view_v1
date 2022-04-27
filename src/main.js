import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lyRequest from './service'

createApp(App).use(store).use(router).mount('#app')
// let token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTE5NjQwMzAsImlkIjoiMTIzIn0.fQAFmH1DTdncY0dlLRo7OCwF9k3Gjo8ssVHbaChmOgo'
lyRequest
  .get({
    url: '/index',
    showLoading: false
  })
  .then((res) => {
    console.log('res:', res)
  })
