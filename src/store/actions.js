import {playMode} from '../common/js/config'

export const selectPlay = function ({state, commit}, {list, index}) {
  commit('setIsPlaying', true)
  commit('setFullScreen', true)
  commit('setPlayList', list)
  commit('setSequence', list)
  commit('setCurrentIndex', index)
}

export const toPrevOrNext = function ({state, commit}, {newIndex}) {
  commit('setCurrentIndex', newIndex)
  commit('setIsPlaying', true)
}

export const randomPlay = function ({state, commit}, {list, randomList}) {
  commit('setIsPlaying', true)
  commit('setMode', playMode.random)
  commit('setCurrentIndex', 0)
  commit('setPlayList', randomList)
  commit('setSequence', list)
}
