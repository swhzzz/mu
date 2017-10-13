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
    padding: 0 36px 24px;
    &:first-of-type {
      padding-top: 24px;
    }
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      padding-right: 24px;
      color: $color-theme;
    }
    .strong {
      font-style: italic;
      color: red;
    }
    .right {
      .song-name {
        color: #fff;
        margin-bottom: 8px;
      }
      .song-detail {
        font-size: 14px;
        color: $color-text-d;
      }
    }
  }
</style>
