<template>
    <transition name="slide">
      <music-list :title="title" :img="img"></music-list>
    </transition>
</template>

<script>
  import MusicList from './music-list.vue'
  import {mapGetters} from 'vuex'

  export default {
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
