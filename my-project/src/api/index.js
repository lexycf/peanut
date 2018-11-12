import request from '@/utils/request'

//总注册用户数
export function getMemberNum() {
    return request({
      url: '/rest/getMemberNum',
      method: 'get',
    })
  }


  //总赔付数
export function getPaidOrderNum() {
  return request({
    url: '/rest/getPaidOrderNum',
    method: 'get',
  })
}


