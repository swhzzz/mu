import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function param(data) {
  let str = ''
  for (let key in data) {
    let value = data[key] === undefined ? '' : data[key] // 过滤undefined
    str += `&${key}=${encodeURIComponent(value)}` // 转义特殊字符?:/，=+等
  }
  return str ? str.slice(1) : '' // 删除第一个&
}
