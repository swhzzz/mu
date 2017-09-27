<template>
  <div class="player" v-show="playList.length">
    <div class="normal-player" v-show="fullScreen">
      <div class="header">
        <div class="wrap">
          <i class="iconfont icon-back" @click="toggleFullScreen"></i>
          <h3 class="song-name">{{currentSong.name}}</h3>
        </div>
        <h5 class="singer-name">{{singer.name}}</h5>
      </div>
      <div class="main">
        <div>
          <img :class="rotateCls" :src="currentSong.image" alt="" class="img">
        </div>
      </div>
      <div class="footer">
        <span v-if="mode === 0"><i class="iconfont icon-list-cycle"></i></span>
        <span v-if="mode === 1"><i class="iconfont icon-random"></i></span>
        <span v-if="mode === 2"><i class="iconfont icon-single-cycle"></i></span>
        <span @click="toPrevSong"><i class="iconfont icon-prev"></i></span>
        <span v-if="isPlaying" @click="togglePlaying"><i class="iconfont icon-pause"></i></span>
        <span v-if="!isPlaying" @click="togglePlaying"><i class="iconfont icon-play"></i></span>
        <span @click="toNextSong"><i class="iconfont icon-next"></i></span>
        <span><i class="iconfont icon-heart"></i></span>
      </div>
    </div>
    <div class="mini-player" v-show="!fullScreen" @click="toggleFullScreen">
      <div class="left">
        <div>
          <img :class="rotateCls" :src="currentSong.image" alt="">
        </div>
        <div class="content">
          <h5>{{currentSong.name}}</h5>
          <span>{{singer.name}}</span>
        </div>
      </div>
      <div class="right">
        <span v-if="isPlaying" @click.stop="togglePlaying"><i class="iconfont icon-pause"></i></span>
        <span v-if="!isPlaying" @click.stop="togglePlaying"><i class="iconfont icon-play-mini"></i></span>
        <span><i class="iconfont icon-list"></i></span>
      </div>
    </div>
    <audio ref="audio" :src="currentSong.url"></audio>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        timer: null
      }
    },
    computed: {
      ...mapGetters(['playList', 'fullScreen', 'singer', 'currentSong', 'mode', 'isPlaying', 'currentIndex']),
      rotateCls() {
        return this.isPlaying ? 'rotate' : 'rotate pause'
      }
    },
    created() {
      console.log(this.currentSong)
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
      }
    },
    watch: {
      currentSong() {
        this.$nextTick(() => {
          this.$refs.audio.play()
        })
      },
      isPlaying(newPlaying) {
        let audio = this.$refs.audio
        this.$nextTick(() => {
          newPlaying === true ? audio.play() : audio.pause()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/index';

  .icon-single-cycle, .icon-random,
  .icon-list-cycle, .icon-prev,
  .icon-next, .icon-heart,
  .icon-play-mini, .icon-list {
    font-size: 32px;
  }

  .icon-play, .icon-pause {
    font-size: 40px;
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
        .icon-back {
          position: absolute;
          left: 24px;
          transform: rotate(-90deg);
          font-size: 24px;
          color: $color-theme;
        }
        .song-name {
          text-align: center;
        }
      }
      .singer-name {
        padding-top: 8px;
        text-align: center;
      }
    }
    .main {
      text-align: center;
      padding-top: 48px;
      .img {
        border-radius: 50%;
        width: 300px;
      }
    }
    .footer {
      position: absolute;
      bottom: 10%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding: 0 32px;
      text-align: center;
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
          padding-bottom: 8px;
        }
        span {
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
