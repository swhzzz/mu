<template>
  <div>
    <ul>
      <li v-for="(song,index) in songs" class="item" @click="selectItem(song,index)">
        <h5 class="song-name">{{song.name}}</h5>
        <span class="song-detail">{{song.singer}}-{{song.album}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      songs: {
        type: Array,
        default: []
      }
    },
    components: {
      scroll
    },
    methods: {
      selectItem(song, index) {
        console.log(this.songs)
        this.$emit('select', song, index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/index';

  .item {
    padding: 24px 36px 0;
    .song-name {
      color: #fff;
      margin-bottom: 8px;
    }
    .song-detail {
      font-size: 14px;
      color: $color-text-d;
    }
  }
</style>
