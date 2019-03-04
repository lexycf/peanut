import request from '@/utils/request'

//总注册用户数
export function getMemberNum(data) {
    return request({
      url: '/rest/getMemberNum',
      method: 'get',
      params: data
    })
  }


  //总赔付数
export function getPaidOrderNum(data) {
  return request({
    url: '/rest/getPaidOrderNum',
    method: 'get',
    params: data
  })
}


