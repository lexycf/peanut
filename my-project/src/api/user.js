import request from '@/utils/request'


//获取用户余额
export function getBalance(data) {
  return request({
    url: '/rest/getBalance',
    method: 'get',
    data:data
  })
}

//充值
export function deposit(data) {
  return request({
    url: '/wepay/recharge',
    method: 'post',
    data:data
  })
}
