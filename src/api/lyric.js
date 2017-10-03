import axios from 'axios'
import {commonParams} from './config'
import {Base64} from 'js-base64'

export const getLyric = function (songmid) {
  let data = Object.assign({}, commonParams, {
    songmid: songmid,
    loginUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'jsonp',
    pcachetime: +new Date()
  })

  return axios.get('/api/lyric', {
    params: data
  }).then((res) => {
    return Promise.resolve(Base64.decode(res.data.lyric))
  })
}
