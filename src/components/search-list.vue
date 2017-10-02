<template>
  <ul class="song-wrap">
    <li v-for="item in songList" class="song" >
      <i class="iconfont icon-music"></i>
      <span v-html="getDisplay(item)"></span>
    </li>
  </ul>
</template>

<script>
  import scroll from '../base/scroll.vue'

  export default {
    props: {
      songList: {
        type: Array,
        default: []
      }
    },
    components: {
      scroll
    },
    methods: {
      getDisplay(item) {
        return `${item.name} - ${item.singer}`
      } // 这里用mustache日本语和韩文字不会显示
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/font/iconfont.css';
  @import '../common/sass/index';

  .song-wrap {
    .song {
      display: flex;
      color: $color-text-d;
      padding: 16px 24px;
      font-size: 14px;
      .icon-music {
        padding-right: 16px;
      }
    }
  }

</style>
