export const singer = state => state.singer

export const songSheetData = state => state.songSheetData

export const topList = state => state.topList

export const isPlaying = state => state.isPlaying

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
