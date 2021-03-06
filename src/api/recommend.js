import jsonp from '../common/js/jsonp'
import {options, commonParams} from './config'
import axios from 'axios'

export function getRecommend() {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  let data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getSongList() {
  const url = '/api/getSongList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongSheetSongs(dissid) {
  const data = Object.assign({}, commonParams, {
    disstid: dissid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    notice: 0,
    needNewCode: 0
  })
  return axios.get('/api/getSongSheetSongs', {
    params: data
  }).then((res) => {
    return Promise.resolve(res)
  })
}
