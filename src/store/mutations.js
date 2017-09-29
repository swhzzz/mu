const mutations = {
  setSinger(state, payload) {
    state.singer = payload
  },
  setSongSheetData(state, payload) {
    state.songSheetData = payload
  },
  setIsPlaying(state, flag) {
    state.isPlaying = flag
  },
  setFullScreen(state, flag) {
    state.fullScreen = flag
  },
  setPlayList(state, list) {
    state.playList = list
  },
  setSequence(state, list) {
    state.sequenceList = list
  },
  setMode(state, mode) {
    state.mode = mode
  },
  setCurrentIndex(state, index) {
    state.currentIndex = index
  }
}

export default mutations
