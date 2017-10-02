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
        if (!newValue) {
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
    border-radius: 5px;
    .icon-search {
      height: 30px;
      line-height: 30px;
      font-size: 24px;
      color: #000;
    }
    input {
      flex: 1;
      outline: none;
      border: none;
      padding-left: 8px;
      font-size: 14px;
    }
  }
</style>
