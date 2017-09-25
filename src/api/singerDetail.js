import jsonp from '../common/js/jsonp'
import {options, commonParams} from './config'

export function getSingerDetail(singerMid) {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?'
  let data = Object.assign({}, commonParams, {
    singermid: singerMid,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1
  })
  return jsonp(url, data, options)
}
