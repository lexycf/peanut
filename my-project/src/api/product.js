import request from '@/utils/request'
//未登录用户获取短信验证码
export function getBtcPriceRny(data) {
    return request({
      url: '/invite/getBtcPriceRny',
      method: 'post',
      data:data
    })
  }

  //提交兑换囤币接口
export function createOrder(data) {
    return request({
      url: '/invite/createOrder',
      method: 'post',
      data:data
    })
  }

    //提交兑换囤币接口
export function storeShowInfo(data) {
    return request({
      url: '/invite/storeShowInfo',
      method: 'get',
      data:data
    })
  }