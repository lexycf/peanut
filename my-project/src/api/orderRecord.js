import request from '@/utils/request'

//已赔付订单公示信息
export function getPublish(data) {
    return request({
      url: '/rest/getPublish',
      method: 'get',
      data:data
    })
  }
