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
  @import '../common/sass/variable.scss';

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 22px;
      margin-left: 1em;
      color: $color-theme;
    }
  }

  .icon-wrapper {
    padding: 8px 0;
    .icon {
      width: 20px;
      vertical-align: middle;
    }
  }
</style>
