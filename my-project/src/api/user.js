import request from '@/utils/request'


//获取用户余额
export function getBalance(data) {
  return request({
    url: '/rest/getBalance',
    method: 'get',
    data:data
  })
}
