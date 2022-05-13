import lyRequest from '../index'

export function accountLoginRequest(account) {
  return lyRequest.post({
    url: '/login',
    data: account
  })
}
export function requestUserInfoById(id) {
  return lyRequest.get({
    url: '/user/' + id
  })
}
export function requestUserMenusByRoleId(id) {
  return lyRequest.get({
    url: '/role/' + id + '/menu'
  })
}
