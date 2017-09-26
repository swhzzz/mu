<template>
  <div class="music-list">
    <div class="header">
      <h4 class="title">{{title}}</h4>
      <i class="iconfont icon-back"></i>
    </div>
    <div class="bg-img" :style="bgImg">
      <div class="filter"></div>
    </div>
    <scroll class="scroll" :data="songs">
      <songList :songs="songs"></songList>
    </scroll>
  </div>
</template>

<script>
  import songList from '../base/songlist.vue'
  import scroll from '../base/scroll.vue'

  export default {
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
      }
    },
    components: {songList, scroll},
    computed: {
      bgImg() {
        return `background-image: url(${this.img})`
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
      .title {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
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
      /*height: 0;*/
      padding-top: 55%;
      transform-origin: top;
      background-size: cover;
      z-index: -1;
      .filter {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
      }
    }
    .scroll {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }


</style>
