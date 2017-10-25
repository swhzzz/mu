<template>
  <div>
    <img src="./loading.gif" alt="">
    <span>正在载入...</span>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  @import '../../common/sass/index';

  img {
    width: px2rem(20);
    vertical-align: middle;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    font-size: px2rem(14);
    color: $color-text-d;
  }
</style>
