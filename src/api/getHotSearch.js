import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export const getHotSearch = function () {
  let url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  let data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'json',
    platform: 'h5',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}
