import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  let data = Object.assign({}, commonParams, {
    loginUin: 0,
    platform: 'h5',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}
