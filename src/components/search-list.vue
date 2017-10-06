<template>
  <ul class="song-wrap">
    <li v-for="(item,index) in songList" class="song" @click="handleClick(index)">
      <i class="iconfont icon-music"></i>
      <span v-html="getDisplay(item)"></span>
    </li>
    <div class="wrap">
      <loading v-if="haveResult"></loading>
      <no-result v-else></no-result>
    </div>
  </ul>
</template>

<script>
  import scroll from '../base/scroll.vue'
  import loading from '../base/loading/loading.vue'
  import NoResult from '../base/no-result.vue'

  export default {
    props: {
      songList: {
        type: Array,
        default: []
      },
      haveResult: {
        type: Boolean,
        default: true
      }
    },
    components: {
      scroll,
      loading,
      NoResult
    },
    methods: {
      getDisplay(item) {
        return `${item.name} - ${item.singer}`
      }, // 这里用mustache日本语和韩文字不会显示
      handleClick(index) {
        this.$store.dispatch('selectPlay', {
          index,
          list: this.songList
        })
      }
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
    .wrap {
      display: flex;
      justify-content: center;
    }
  }

</style>
