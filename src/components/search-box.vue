<template>
  <div class="search-part">
    <input type="text" placeholder="搜索歌曲、歌手" v-model="value">
    <i class="iconfont icon-search"></i>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    watch: {
      value(newValue) {
        if (newValue === '') {
          return
        }
        this.$emit('listenValue', newValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/index';

  .search-part {
    display: flex;
    border-radius: px2rem(5);
    .icon-search {
      height: px2rem(30);
      line-height: px2rem(30);
      font-size: px2rem(24);
      color: #000;
      background-color: #fff;
    }
    input {
      flex: 1;
      outline: none;
      border: none;
      padding-left: px2rem(8);
      font-size: px2rem(14);
    }
  }
</style>
