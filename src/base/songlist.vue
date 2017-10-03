<template>
  <div>
    <ul>
      <li v-for="(song,index) in songs" class="item" @click="handleClick(song,index)">
        <div :class="getRankCls(index)" v-if="rank">{{index + 1}}</div>
        <div class="right">
          <h5 class="song-name">{{getSong(song)}}</h5>
          <span class="song-detail">{{getSinger(song)}}-{{getAlbum(song)}}</span>
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
//        console.log(this.songs)
        this.$emit('select', song, index)
      },
      getSong(song) { // 这里不同的歌单获取的数据不一样，要+个或
        return song.name || song.data.songname
      },
      getSinger(song) {
        return song.singer || this._getSinger(song.data.singer)
      },
      getAlbum(song) {
        return song.album || song.data.albumname
      },
      _getSinger(singer) {
        let tempArr = []
        singer.forEach((item) => {
          tempArr.push(item.name)
        })
        return tempArr === 1 ? tempArr : tempArr.join('/')
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
