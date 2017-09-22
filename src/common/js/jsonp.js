import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => { // error为Timeout时调用
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let str = ''
  for (let key in data) {
    let value = data[key] === undefined ? '' : data[key] // 过滤undefined
    str += `&${key}=${encodeURIComponent(value)}`
  }
  return str ? str.slice(1) : '' // 判断是否有参数传递进来，有的话把第一个&删除
}
