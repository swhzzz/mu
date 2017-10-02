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
        default: 4000
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
          let className = this.children[i].className.split('')
          className.push('slider-item')
          this.children[i].className = className
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
            threshold: 0.3,
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
        let pageIndex = this.currentIndex + 1 // 当前的轮播图下标
        if (this.loop) {
          pageIndex++
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, 2000)
      }
    }
  }
</script>


<style lang="scss" scoped>
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
      width: 80px;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      .dots {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          width: 8px;
          height: 8px;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.8);
          &.active {
            width: 20px;
          }
        }
      }
    }
  }
</style>
