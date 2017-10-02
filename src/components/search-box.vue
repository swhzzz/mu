<template>
  <div class="search-part">
    <input placeholder="搜索歌曲、歌手" v-model="query">
    <i class="iconfont icon-search"></i>
  </div>
</template>

<script>
  export default {
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    watch: {
      query(newQuery) {
        if (newQuery === '') {
          return
        }
        this.$emit('listenValue', newQuery)
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
