import request from '@/utils/request'

//获取用户的邀请码
export function getInviteCode() {
    return request({
      url: '/invite/getInviteCode',
      method: 'get',
    })
  }


//根据邀请码获取用户
export function getUserInfoByInviteCode(data) {
  return request({
    url: '/invite/getUserInfoByInviteCode',
    method: 'get',
    params: data
  })
}
  