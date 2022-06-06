import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      dataList: [],
      dataCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList) {
      state.userList = userList
    },
    changeUserCount(state, userCount) {
      state.userCount = userCount
    },
    changeDataList(state, dataList) {
      state.dataList = dataList
    },
    changeDataCount(state, dataCount) {
      state.dataCount = dataCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName) => {
        return state[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName) => {
        return state[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      // 1,获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log('store', payload.queryInfo)
      // 3.将数据存储到state中
      const { list, count } = pageResult.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, count)
    },
    async deletePageDataAction({ dispatch }, payload) {
      //1.获取pageName和id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      //2.调用删除网络请求
      await deletePageData(pageUrl)
      //3.重新请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload) {
      //1.创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      //2.重新请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload) {
      //1.编辑数据的请求
      const { pageName, id, editData } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
