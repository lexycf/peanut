import request from '@/utils/request'


//未登录用户获取短信验证码
export function smscode(data) {
  return request({
    url: '/auth/web/smscode',
    method: 'post',
    data:data
  })
}

//登录
export function mlogin(data) {
  return request({
    url: '/auth/web/mlogin',
    method: 'post',
    data:data
  })
}

//登录
export function login(data) {
  return request({
    url: '/auth/web/slogin',
    method: 'post',
    data:data
  })
}
//设置密码后登录
export function login2(data) {
  return request({
    url: '/auth/web/slogin2',
    method: 'post',
    data:data
  })
}
//注册
export function register(data) {
  return request({
    url: '/auth/web/register',
    method: 'post',
    data:data
  })
}

//注册后，绑定邀请关系接口
export function bindRelationshipAfterRegist(data) {
  return request({
    url: '/invite/bindRelationshipAfterRegist',
    method: 'post',
    data:data
  })
}
