import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'
import router from './router'
import store from './store'

import lyRequest from './service'
import 'normalize.css'
import './assets/css/index.less'
const app = createApp(App)
//注册element-icon
app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')

lyRequest
  .get({
    url: '/index',
    showLoading: false
  })
  .then((res) => {
    console.log('res:', res)
  })
