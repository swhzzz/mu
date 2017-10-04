<template>
  <transition name="slide">
    <music-list :title="title" :songs="songs" :img="img"></music-list>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from '../api/singerDetail'
  import {createSong} from '../api/song'
  import MusicList from './music-list.vue'

  export default {
    data() {
      return {
        songs: []
      }
    },
    components: {
      MusicList
    },
    computed: {
      ...mapGetters(['singer']),
      title() {
        return this.singer.name
      },
      img() {
        return this.singer.avatar
      }
    },
    created() {
      this._getSingerDetail()
    },
    methods: {
      _getSingerDetail() {
        let singerMid = this.singer.singerMid
        if (!singerMid) { // 在detail页面刷新，返回歌手页面
          this.$router.back()
        }
        getSingerDetail(singerMid).then((res) => {
          if (res.code === 0) {
            this.songs = res.data.list.map((item) => {
              return createSong(item.musicData)
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/variable';

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
