import lyRequest from '../index'

export function accountLoginRequest(account) {
  return lyRequest.post({
    url: '/log',
    data: account
  })
}
