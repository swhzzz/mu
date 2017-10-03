<template>
  <div class="player" v-show="playList.length">
    <div class="normal-player" v-show="fullScreen">
      <div class="header">
        <div class="wrap">
          <i class="iconfont icon-back" @click="toggleFullScreen"></i>
          <h3 class="song-name" v-html="currentSong.name"></h3>
        </div>
        <h5 class="singer-name" v-html="currentSong.singer"></h5>
      </div>
      <div class="main">
        <div class="main-left">
          <img :class="rotateCls" :src="currentSong.image" alt="" class="img">
        </div>
        <div class="main-right">
          <scroll ref="scroll" :data="lyricLines" class="scroll">
            <div class="lyric-wrap">
              <p v-for="(item,index) in lyricLines" v-html="item" class="lyric-line"
                 :class="{'active': index === currentLineIndex}" ref="lyricLines">
              </p>
            </div>
          </scroll>
        </div>
      </div>
      <div class="footer">
        <div class="time">
          <div class="time-left"><span>{{format(currentTime)}}</span></div>
          <progress-bar class="progress-wrap" :rate="rate" @jumpProgress="jumpProgress"></progress-bar>
          <div class="time-right"><span>{{format(currentSong.duration)}}</span></div>
        </div>
        <div class="icon-wrap">
          <span @click="changeMode"><i :class="modeCls"></i></span>
          <span @click="toPrevSong"><i class="iconfont icon-prev"></i></span>
          <span v-if="isPlaying" @click="togglePlaying"><i class="iconfont icon-pause"></i></span>
          <span v-if="!isPlaying" @click="togglePlaying"><i class="iconfont icon-play"></i></span>
          <span @click="toNextSong"><i class="iconfont icon-next"></i></span>
          <span><i class="iconfont icon-heart1"></i></span>
        </div>
      </div>
      <div class="bg" :style="bgCls"></div>
      <div class="layer"></div>
    </div>
    <div class="mini-player" v-show="!fullScreen" @click="toggleFullScreen">
      <div class="left">
        <div>
          <img :class="rotateCls" :src="currentSong.image" alt="">
        </div>
        <div class="content">
          <h5 v-html="currentSong.name"></h5>
          <p v-html="currentSong.singer"></p>
        </div>
      </div>
      <div class="right">
        <span v-if="isPlaying" @click.stop="togglePlaying"><i class="iconfont icon-pause"></i></span>
        <span v-if="!isPlaying" @click.stop="togglePlaying"><i class="iconfont icon-play-mini"></i></span>
      </div>
    </div>
    <audio ref="audio" :src="currentSong.url" @timeupdate="updateTime" @ended="end"></audio>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import progressBar from '../base/progress-bar.vue'
  import {playMode} from '../common/js/config'
  import {messList} from '../api/util'
  import {getLyric} from '../api/lyric'
  import Lyric from 'lyric-parser'
  import Scroll from '../base/scroll.vue'

  export default {
    data() {
      return {
        timer: null,
        currentTime: 0,
        lyric: null,
        lyricLines: [],
        currentLineIndex: 0
      }
    },
    components: {progressBar, Scroll},
    computed: {
      ...mapGetters(['playList', 'sequenceList', 'fullScreen', 'currentSong', 'mode', 'isPlaying', 'currentIndex']),
      rotateCls() {
        return this.isPlaying ? 'rotate' : 'rotate pause'
      },
      bgCls() {
        return `background-image: url(${this.currentSong.image})`
      },
      rate() {
        return this.currentTime / this.currentSong.duration
      },
      modeCls() {
        const map = {
          0: 'icon-sequence',
          1: 'icon-loop',
          2: 'icon-random'
        }
        let index = this.mode
        return `iconfont ${map[index]}`
      }
    },
    methods: {
      toggleFullScreen() {
        this.$store.commit('setFullScreen', !this.fullScreen)
      },
      togglePlaying() {
        this.$store.commit('setIsPlaying', !this.isPlaying)
      },
      toPrevSong() {
        let prev = this.currentIndex - 1 >= 0 ? this.currentIndex - 1 : this.playList.length - 1
        clearTimeout(this.timer) // 解决频繁点击报错
        setTimeout(() => {
          this.$store.dispatch('toPrevOrNext', {
            newIndex: prev
          })
        }, 300)
      },
      toNextSong() {
        let next = this.currentIndex + 1 === this.playList.length ? 0 : this.currentIndex + 1
        clearTimeout(this.timer)
        setTimeout(() => {
          this.$store.dispatch('toPrevOrNext', {
            newIndex: next
          })
        }, 300)
      },
      updateTime(e) {
        this.currentTime = e.target.currentTime
      },
      format(interval) {
        interval = interval | 0
        let minute = interval / 60 | 0
        let second = interval % 60
        second = second < 10 ? `0${second}` : second
        return `${minute}:${second}`
      },
      jumpProgress(rate) {
        this.$refs.audio.currentTime = rate * this.currentSong.duration
      },
      changeMode() {
        let mode = (this.mode + 1) % 3
        this.$store.commit('setMode', mode)
        let list = []
        if (mode === playMode.random) {
          list = messList(this.sequenceList)
        } else {
          list = this.sequenceList
        }
        this.resetCurrentIndex(list) //
        this.$store.commit('setPlayList', list)
      },
      resetCurrentIndex(list) {
        let index = list.findIndex((item) => {
          return item.id === this.currentSong.id
        })
        this.$store.commit('setCurrentIndex', index)
      },
      end() {
        if (this.mode === playMode.loop) {
          this.$refs.audio.currentTime = 0
          this.$refs.audio.play()
        } else {
          this.toNextSong()
        }
      },
      _getLyric() {
        getLyric(this.currentSong.mid).then((lyric) => {
          this.lyric = new Lyric(lyric, this.handleLyric)
          this.lyric.lines.map((item) => {
            this.lyricLines.push(item.txt)
          })
          console.log(this.lyric)
          if (this.isPlaying) {
            this.lyric.play()
          }
        })
      },
      handleLyric({lineNum, txt}) {
        this.currentLineIndex = lineNum
        if (lineNum > 5) {
          let el = this.$refs.lyricLines[lineNum - 7]
          this.$refs.scroll.scrollToElement(el, 1000) // 设置滚动歌词
        } else {
          this.$refs.scroll.scrollToElement(0, 0) // 入股歌词行数小于
        }
      }
    },
    watch: {
      currentSong(newSong, oldSong) {
        if (newSong === oldSong) {
          return
        }
        this.$nextTick(() => {
          this.$refs.audio.play()
          this._getLyric()
        })
      },
      isPlaying(newPlaying) {
        let audio = this.$refs.audio
        this.$nextTick(() => {
//          newPlaying === true ? audio.play() : audio.pause()
          if (newPlaying) {
            audio.play()
            this.lyric.play()
          } else {
            audio.pause()
            this.lyric.stop()
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/index';

  .icon-sequence, .icon-random,
  .icon-loop, .icon-prev,
  .icon-next, .icon-heart1,
  .icon-play-mini, .icon-list {
    font-size: 32px;
    color: $color-theme;
  }

  .icon-play, .icon-pause {
    font-size: 40px;
    color: $color-theme;
  }

  .player {
    .bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      background-size: cover;
      background-position: center;
      filter: blur(30px);
    }
    .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
      z-index: -1;
    }
  }

  .normal-player {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    background-color: $color-background;
    height: 100%;
    color: #fff;
    .header {
      .wrap {
        position: relative;
        padding: 8px 0;
        height: 32px;
        .icon-back {
          position: absolute;
          left: 24px;
          transform: rotate(-90deg);
          font-size: 24px;
          color: $color-theme;
        }
        .song-name {
          position: absolute;
          left: 20%;
          width: 60%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
      .singer-name {
        padding-top: 8px;
        text-align: center;
      }
    }
    .main {
      position: fixed;
      width: 100%;
      top: 48px;
      bottom: 144px;
      overflow: hidden;
      white-space: nowrap;
      .main-left {
        display: inline-block;
        text-align: center;
        width: 100%;
        vertical-align: top;
        padding-top: 48px;
        overflow: hidden;
        .img {
          border-radius: 50%;
          width: 300px;
        }
      }
      .main-right {
        display: inline-block;
        vertical-align: top;
        padding-top: 16px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .scroll {
          height: 100%;
          overflow: hidden;
          .lyric-wrap {
            width: 100%;
            .lyric-line {
              display: flex;
              justify-content: center;
              align-items: center;
              padding-bottom: 12px;
              color: rgba(2555, 255, 255, 0.5);
              &.active {
                color: #fff;
              }
            }
          }
        }
      }
    }
    .footer {
      position: absolute;
      top: 80%;
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      .time {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 48px;
        font-size: 12px;
        .time-left {
          width: 32px;
          box-sizing: border-box;
          padding-right: 8px;
        }
        .progress-wrap {
          width: 80%;
        }
        .time-right {
          width: 32px;
          box-sizing: border-box;
          padding-left: 8px;
        }
      }
      .icon-wrap {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 0 32px;
        text-align: center;
      }
    }
  }

  .mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $color-highlight-background;
    z-index: 101;
    .left {
      display: flex;
      img {
        width: 40px;
        border-radius: 50%;
      }
      .content {
        float: left;
        padding-left: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h5 {
          color: #fff;
          width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-bottom: 8px;
        }
        p {
          width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          color: $color-text-l;
        }
      }
    }
    .right {
      color: $color-theme;
      .icon-play-mini, .icon-pause {
        padding-right: 12px;
      }
      .icon-pause {
        font-size: 32px;
      }
    }
  }

  .rotate {
    animation: rotate 20s infinite linear;
  }

  .pause {
    animation-play-state: paused;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
