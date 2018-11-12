import request from '@/utils/requestReadPack'

//得到当前用户的币和余额
export function getAssetList() {
    return request({
      url: '/redpack/assetList',
      method: 'get',
    })
  }

///发红包
export function sendRedPack(data){
  return request({
    url: '/redpack/send',
    method: 'post',
    data:data
  })
}

///领取记录
export function getRedPackInfo(data)
{
  return request({
    url: '/redpack/redpackInfo?redpack_no='+data,
    method: 'post',
    data:data
  })
}
///领取记录
export function getRedPackRecord(data)
{
  return request({
    url: '/redpack/redpackRecords?redpack_id='+data.redpack_id,
    method: 'post',
    data:data
  })
}

///领取红包
export function takeRedpack(data)
{
  return request({
    url: '/redpack/takeRedpack',
    method: 'post',
    data:data
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
