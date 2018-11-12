import request from '@/utils/request'


//我的资产列表
export function myassets() {
  return request({
    url: '/asset/myassets',
    method: 'get',
  })
}

//我的资产总数（btc cny）
export function myassetsTotal() {
  return request({
    url: '/asset/myassetsTotal',
    method: 'get',
  })
}

//获取用户信息
export function userinfo() {
  return request({
    url: '/auth/web/userinfo',
    method: 'get',
  })
}
