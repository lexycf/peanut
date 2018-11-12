import request from '@/utils/request'

//去支付，根据订单id获取订单数据
export function getOrderInfoToPay(data) {
    return request({
      url: '/invite/getOrderInfoToPay',
      method: 'post',
      data:data
    })
  }

  //根据订单id获取订单数据
export function getOrderInfo(data) {
  return request({
    url: '/invite/getOrderInfo',
    method: 'get',
    params: data
  })
}

  //获取用户的邀请码接口
  export function getInviteCode() {
    return request({
      url: '/invite/getInviteCode',
      method: 'get',
    })
  }

    //点击按钮，我已支付
    export function clickHavePay(data) {
      return request({
        url: '/invite/clickHavePay',
        method: 'get',
        params: data
      })
    }

      //囤币-取消订单
      export function storeCancel(data) {
        return request({
          url: '/invite/storeCancel',
          method: 'post',
          data: data
        })
      }
  

 
