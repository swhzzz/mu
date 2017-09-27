export const selectPlay = function ({state, commit}, {list, index}) {
  commit('setIsPlaying', true)
  commit('setFullScreen', true)
  commit('setPlayList', list)
  commit('setSequence', list)
  commit('setCurrentIndex', index)
}

export const toPrevOrNext = function ({state, commit}, {newIndex}) {
  console.log(1)
  commit('setCurrentIndex', newIndex)
  commit('setIsPlaying', true)
}
