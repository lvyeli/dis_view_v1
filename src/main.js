import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import lyRequest from './service'
import 'normalize.css'
import './assets/css/index.less'
const app = createApp(App)
//注册element-icon
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
