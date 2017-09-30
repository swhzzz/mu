<template>
  <music-list :title="title" :img="img" :songs="songs"></music-list>
</template>

<script>
  import MusicList from './music-list.vue'
  import {mapGetters} from 'vuex'
  import {getRankSongs} from '../api/rankDetail'
  import {createSong} from '../api/song'

  export default {
    data() {
      return {
        songs: []
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
        getRankSongs(this.topList.id).then((res) => {
//          console.log(res.songlist)
          this.songs = res.songlist.map((item)=>{
            console.log(item.data)
            return createSong(item.data)
          })
        })
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style lang="scss" scoped></style>
