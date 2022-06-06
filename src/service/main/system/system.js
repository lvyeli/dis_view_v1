import lyRequest from '../../index'
export function getPageListData(url, queryInfo) {
  return lyRequest.post({
    url: url,
    data: queryInfo
  })
}
export function deletePageData(url) {
  return lyRequest.delete({
    url: url
  })
}
export function createPageData(url, newData) {
  return lyRequest.post({
    url: url,
    data: newData
  })
}
export function editPageData(url, editData) {
  return lyRequest.patch({
    url: url,
    data: editData
  })
}
