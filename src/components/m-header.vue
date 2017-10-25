<template>
  <header>
    <div class="icon-wrapper"><img class="icon" src="../common/image/star.png" alt="star"></div>
    <h1 class="title">Star Music</h1>
  </header>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  @import '../common/sass/index.scss';

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      font-size: px2rem(22);
      margin-left: px2rem(22);
      color: $color-theme;
    }
  }

  .icon-wrapper {
    padding: px2rem(8) 0;
    .icon {
      width: px2rem(20);
      vertical-align: middle;
    }
  }
</style>
