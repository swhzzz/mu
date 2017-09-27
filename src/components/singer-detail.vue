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
//      console.log(this.singer)
      this._getSingerDetail()
//      console.log(this.title)
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
//          console.log(res.data.list)
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

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
