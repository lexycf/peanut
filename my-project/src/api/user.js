import request from '@/utils/request'


//获取用户余额
export function getBalance() {
  return request({
    url: '/rest/getBalance',
    method: 'get',
  })
}
