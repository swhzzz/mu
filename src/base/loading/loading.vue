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
  @import '../../common/sass/variable.scss';

  img {
    width: 20px;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: $color-text-d;
  }
</style>
