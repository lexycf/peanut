import request from '@/utils/request'

//去支付，根据订单id获取订单数据
export function getOrderInfoToPay(data) {
    return request({
      url: '/invite/getOrderInfoToPay',
      method: 'post',
      data:data
    })
  }


 
