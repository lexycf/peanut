import request from '@/utils/requestReadPack'

//得到当前用户的币和余额
export function getPublish() {
    return request({
      url: '/rest/getPublish',
      method: 'get',
    })
  }



export function wxSaveInfo(data)
{
  return request({
    url: '/wechat/saveinfo',
    method: 'post',
    data:data
  })
}


export function wxBindUserInfo(data)
{
  return request({
    url: '/wechat/binduser',
    method: 'post',
    data:data
  })
}


export function wxJSApiData(data)
{
  return request({
    url: '/wechat/jsdata?wechat_no=coinopen&url='+data.url,
    method: 'get',
    data:data
  })
}
