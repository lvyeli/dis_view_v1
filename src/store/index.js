import { createStore, storeKey } from 'vuex'
import login from './login/login'
import system from './main/system/system'
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default store
