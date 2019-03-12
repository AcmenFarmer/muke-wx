import { config } from '../config.js'

const tips = {
  1005: 'appKe'
}

class HTTP {
  request(params) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method || 'GET',
      data: params.data,
      dataType: 'json',
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString();
        if(code.startsWith('2')){
          params.success && params.success(res.data);
        }else{
          // wx.show 
        }
      },
      fail: (err) => {

      }
    })
  }
}

export { HTTP }