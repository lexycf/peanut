import request from '@/utils/request'
//未登录用户获取短信验证码
export function shareurl(data) {
    return request({
      url: '/share/url',
      method: 'post',
      data:data
    })
  }