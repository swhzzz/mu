<template>
  <transition name="slide">
    <music-list :title="title" :img="img" :songs="songs"></music-list>
  </transition>
</template>

<script>
  import MusicList from './music-list.vue'
  import {getSongSheetSongs} from '../api/recommend'
  import {mapGetters} from 'vuex'
  import {createSong} from '../api/song'

  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      ...mapGetters(['songSheetData']),
      title() {
        return this.songSheetData.dissname
      },
      img() {
        return this.songSheetData.imgurl
      }
    },
    components: {
      MusicList
    },
    created() {
      this._getSongSheetSongs()
    },
    methods: {
      _getSongSheetSongs() {
        if (!this.songSheetData.dissid) {
          this.$router.back()
        }
        getSongSheetSongs(this.songSheetData.dissid).then((res) => {
          if (res.code === 0) {
            res.cdlist[0].songlist.forEach((item) => {
              this.songs.push(createSong(item))
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/index';

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
