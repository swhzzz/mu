<template>
  <transition name="slide">
    <music-list :title="title" :img="img" :songs="songs" :rank="rank"></music-list>
  </transition>
</template>

<script>
  import MusicList from './music-list.vue'
  import {mapGetters} from 'vuex'
  import {getRankSongs} from '../api/rankDetail'
  import {createSong} from '../api/song'

  export default {
    data() {
      return {
        songs: [],
        rank: true
      }
    },
    computed: {
      ...mapGetters(['topList']),
      title() {
        return this.topList.topTitle
      },
      img() {
        return this.topList.picUrl
      }
    },
    created() {
      this._getRankSongs()
    },
    methods: {
      _getRankSongs() {
        if (!this.topList.id) {
          this.$router.back()
        }
        getRankSongs(this.topList.id).then((res) => {
//          console.log(res.songlist)
          if (res.code === 0) {
            this.songs = res.songlist.map((item) => {
              return createSong(item.data)
            })
          }
        })
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style lang="scss" scoped>

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
