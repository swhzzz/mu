import axios from 'axios'
import {commonParams} from './config'

export const getLyric = function (songmid) {
  let data = Object.assign({}, commonParams, {
    songmid: songmid,
    loginUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'jsonp',
    pcachetime: +new Date()
  })

  axios.get('/api/lyric', {
    params: data
  }).then((res) => {
    console.log(res.data.lyric)
  })
}
