<template>
  <transition name="slide">
    <div class="singer-default"></div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['singer'])
    },
    created() {
      console.log(this.singer)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../common/sass/variable';

  .singer-default {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: $color-background;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
