import { accountLoginRequest } from '@/service/login/login'
const loginMoudle = {
  namespaced: true,
  state() {
    return {
      token: ''
    }
  },
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload) {
      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log('accountAction', payload)
    },
    phoneLoginAction({ commit }, payload) {
      console.log('phoneLoginAction', payload)
    }
  }
}
export default loginMoudle
