<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots-wrap">
      <ul class="dots">
        <li class="dot" v-for="(item,index) in dots" :class="{'active': index === currentIndex}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        dots: [],
        currentIndex: 0,
        timer: null
      }
    },
    mounted() {
      setTimeout(() => {
        this.setSliderWidth()
        this.initDots()
        this.initSlider()
      }, 20)

      if (this.autoPlay) {
        this.play()
      }
    },
    methods: {
      setSliderWidth() {
        this.children = this.$refs.sliderGroup.children
        let length = this.children.length
        let width = this.$refs.slider.clientWidth
        for (let i = 0; i < length; i++) {
          this.children[i].className = 'slider-item'
          this.children[i].style.width = width + 'px' // 设置单个图片div的宽度
        }
        if (this.loop) {
          length += 2
        }
        this.$refs.sliderGroup.style.width = (width * length) + 'px' // 设置wrap的宽度
      },
      initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: true,
            speed: 400
          }
        })
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX // 当前播放的slider的位置
          this.currentIndex = pageIndex - 1

          if (this.autoPlay) {
            clearTimeout(this.timer)
            this.play()
          }
        })
      },
      initDots() {
        this.dots = new Array(this.$refs.sliderGroup.children.length)
      },
      play() {
        let pageIndex = this.currentIndex + 2 // 下一张轮播图下标
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 700)
        }, this.interval)
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../common/sass/index';
  .slider {
    position: relative;
    overflow: hidden;
    .slider-group {
      position: relative;
      overflow: hidden;
      .slider-item {
        float: left;
        a {
          width: 100%;
        }
        img {
          width: 100%;
        }
      }
    }
    .dots-wrap {
      width: px2rem(80);
      position: absolute;
      bottom: px2rem(10);
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      .dots {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          width: px2rem(8);
          height: px2rem(8);
          border-radius: px2rem(12);
          background-color: rgba(255, 255, 255, 0.8);
          &.active {
            width: px2rem(20);
          }
        }
      }
    }
  }
</style>
