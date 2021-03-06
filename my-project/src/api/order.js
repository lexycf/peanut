import request from '@/utils/request'

//去支付，根据订单id获取订单数据
export function joinAjax(data) {
    return request({
      url: '/rest/join',
      method: 'post',
      data:data
    })
  }
  
  //红包兑换
export function useCoupon(data) {
  return request({
    url: '/rest/useCoupon',
    method: 'get',
    params:data
  })
}

//上传图片
export function uploadPic(data) {
  return request({
    url: '/rest/uploadPic',
    method: 'post',
    data:data
  })
}

//删除图片
export function delPic(data) {
  return request({
    url: '/rest/delPic',
    method: 'post',
    data:data
  })
}


export function getOrderDetail(data) {
  return request({
    url: '/rest/getOrderDetail',
    method: 'get',
    params:data
  })
}



 
