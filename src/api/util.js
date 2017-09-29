export const messList = function (arr) {
  let _arr = arr.slice() // 这里不能直接改songs的数据，否则在songlist里点击歌曲不会跳转到对应的歌曲
  for (let i = 0; i < _arr.length; i++) {
    let randomIndex = getRandom(0, i)
    let temp = _arr[i]
    _arr[i] = _arr[randomIndex]
    _arr[randomIndex] = temp
  }
  return _arr
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
