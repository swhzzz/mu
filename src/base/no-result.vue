<template>
  <div>
    <p v-html="txt"></p>
  </div>
</template>

<script>
  export default {
    props: {
      txt: {
        type: String,
        default: '暂无搜索结果'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/index';

  p{
    color: $color-text-d;
  }
</style>
