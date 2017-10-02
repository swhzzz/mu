import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export const getSearchResult = function (value, index) {
  let url = 'https://szc.y.qq.com/soso/fcgi-bin/search_for_qq_cp?'
  let data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 0,
    w: value,
    zhidaqu: 1,
    catZhida: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    p: index,
    remoteplace: 'yxt.mqq.all'
  })
  return jsonp(url, data, options)
}
