<template>
  <div class="music-list">
    <div class="header">
      <h4 class="title">{{title}}</h4>
      <i class="iconfont icon-back" @click="back"></i>
    </div>
    <div class="bg-img" :style="bgImg">
      <div class="random-play">
        <span @click="randomPlay"><i class="iconfont icon-play"></i>随机播放歌曲</span>
      </div>
      <div class="filter"></div>
    </div>
    <div class="scroll-wrap" ref="scrollWrap">
      <div v-show="songs.length === 0" class="loading-wrap">
        <loading></loading>
      </div>
      <scroll class="scroll" :data="songs" ref="scroll">
        <songList :songs="songs" :rank="rank" @select="handleSelect"></songList>
      </scroll>
    </div>
  </div>
</template>

<script>
  import songList from '../base/songlist.vue'
  import scroll from '../base/scroll.vue'
  import {messList} from '../api/util'
  import {playListMixin} from '../common/js/mixin'
  import loading from '../base/loading/loading.vue'

  export default {
    mixins: [playListMixin],
    props: {
      title: {
        type: String,
        default: ''
      },
      img: {
        type: String,
        default: ''
      },
      songs: {
        type: Array,
        default: []
      },
      rank: {
        type: Boolean,
        default: false
      }
    },
    components: {songList, scroll, loading},
    computed: {
      bgImg() {
        return `background-image: url(${this.img})`
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      handleSelect(song, index) {
//        console.log(this.songs)
        this.$store.dispatch('selectPlay', {
          list: this.songs,
          index: index
        })
      },
      randomPlay() {
        let randomList = messList(this.songs)
        let list = this.songs
        this.$store.dispatch('randomPlay', {list, randomList})
      },
      handlePlayList(list) {
        const bottom = list.length > 0 ? '58px' : 0
        this.$refs.scrollWrap.style.bottom = bottom
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/index.scss';
  @import '../common/font/iconfont.css';

  .music-list {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: $color-background;
    .header {
      position: absolute;
      top: 0;
      width: 100%;
      padding: 24px 0;
      z-index: 2;
      .title {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        white-space: nowrap;
        color: #fff;
      }
      .icon-back {
        position: absolute;
        left: 24px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        font-size: 24px;
        color: $color-theme;
      }
    }
    .bg-img {
      position: relative;
      width: 100%;
      padding-top: 60%;
      background-position: 0%, 10%;
      background-size: cover;
      z-index: 1;
      .random-play {
        position: absolute;
        left: 50%;
        bottom: 24px;
        transform: translate3d(-50%, 0, 0);
        color: $color-theme;
        padding: 8px 16px;
        border: 1px solid $color-theme;
        border-radius: 16px;
        z-index: 11;
        span {
          font-size: 14px;
          .icon-play {
            font-size: 16px;
            margin-right: 8px;
            vertical-align: middle;
          }
          &:after {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }
        }
      }
      .filter {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
      }
    }
    .scroll-wrap {
      position: fixed;
      top: 220px;
      bottom: 0;
      width: 100%;
      .loading-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
      .scroll {
        height: 100%;
        overflow: hidden;
      }
    }
  }
</style>
