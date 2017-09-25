<template>
  <transition name="slide">
    <div class="singer-default"></div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from '../api/singerDetail'
  import {createSong} from '../api/song'

  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      ...mapGetters(['singer'])
    },
    created() {
//      console.log(this.singer)
      this._getSingerDetail()
    },
    methods: {
      _getSingerDetail() {
        let singerMid = this.singer.singerMid
        if (!singerMid) { // 在detail页面刷新，返回歌手页面
          this.$router.push({
            path: '/singer'
          })
        }
        getSingerDetail(singerMid).then((res) => {
          console.log(res.data.list)
          this.songs = res.data.list.map((item) => {
            return createSong(item.musicData)
          })
          console.log(this.songs)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/variable';

  .singer-default {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: $color-background;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
