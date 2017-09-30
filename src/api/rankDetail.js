import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export const getRankSongs = function (id) {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?'
  let data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'jsonp',
    platform: 'h5',
    needNewCode: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: id
  })
  return jsonp(url, data, options)
}
