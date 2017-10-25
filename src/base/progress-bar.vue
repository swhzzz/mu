<template>
  <div class="progress-bar-wrap" @click="progressClick">
    <div class="progress-bar" ref="progressBar">
      <div class="bar" ref="bar"></div>
      <div class="btn" ref="btn"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      rate: {
        type: Number,
        default: 0
      }
    },
    methods: {
      progressClick(e) {
        let diffWidth = e.offsetX
        this.$emit('jumpProgress', diffWidth / (this.$refs.progressBar.clientWidth - 12))
        this.setWidth(diffWidth)
      },
      setWidth(diffWidth) {
        this.$refs.bar.style.width = `${diffWidth / 375}rem` // px一定要加啊，真是醉了。
        this.$refs.btn.style.transform = `translate3d(${diffWidth / 375}rem,0,0)` // px...
      }
    },
    watch: {
      rate(newRate) {
        let progressBarWidth = this.$refs.progressBar.clientWidth - 12 // 12是btn宽度
        let diffWidth = progressBarWidth * newRate
        this.setWidth(diffWidth)
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '../common/sass/index';

  .progress-bar-wrap {
    padding: px2rem(8) 0;
    width: 100%;
    .progress-bar {
      position: relative;
      width: 100%;
      height: px2rem(2);
      background-color: #fff;
      .bar {
        position: absolute;
        top: 0;
        background-color: $color-theme;
        height: px2rem(2);
        width: 0;
      }
      .btn {
        position: absolute;
        left: 0;
        top: px2rem(-5);
        width: px2rem(12);
        height: px2rem(12);
        background-color: $color-theme;
        border: 1px solid $color-theme;
        border-radius: 50%;
      }
    }
  }
</style>
