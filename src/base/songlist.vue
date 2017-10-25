<template>
  <div>
    <ul>
      <li v-for="(song,index) in songs" class="item" @click="handleClick(song,index)">
        <div :class="getRankCls(index)" v-if="rank">{{index + 1}}</div>
        <div class="right">
          <h5 class="song-name" v-html="song.name"></h5>
          <span class="song-detail">{{song.singer}}-{{song.album}}</span>
        </div>
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
      },
      rank: {
        type: Boolean,
        default: false
      }
    },
    components: {
      scroll
    },
    methods: {
      handleClick(song, index) {
        this.$emit('select', song, index)
      },
      getRankCls(index) {
        return index < 3 ? 'left strong' : 'left'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/index';

  .item {
    display: flex;
    padding: 0 px2rem(36) px2rem(24);
    &:first-of-type {
      padding-top: px2rem(24);
    }
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: px2rem(16);
      padding-right: px2rem(24);
      color: $color-theme;
    }
    .strong {
      font-style: italic;
      color: red;
    }
    .right {
      .song-name {
        color: #fff;
        margin-bottom: px2rem(8);
      }
      .song-detail {
        font-size: px2rem(14);
        color: $color-text-d;
      }
    }
  }
</style>
