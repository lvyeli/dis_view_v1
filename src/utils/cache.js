class LocalCache {
  setCache(key, value) {
    //value传过来可能不是string类型，转换
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key) {
    //obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
