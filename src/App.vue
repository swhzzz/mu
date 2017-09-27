<template>
  <div id="app">
    <div class="wrapper">
      <m-header></m-header>
      <tab></tab>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
  import MHeader from 'components/m-header.vue'
  import Tab from 'components/tab'
  import player from './components/player.vue'

  export default {
    name: 'app',
    components: {
      MHeader, Tab, player
    }
  }
</script>

<style scoped lang="scss">
  @import './common/sass/variable.scss';

  .wrapper {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: $color-background;
  }
</style>
