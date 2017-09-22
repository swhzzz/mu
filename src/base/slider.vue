<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots"></div>
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
    mounted() {
      setTimeout(() => {
        this.setSliderWidth()
        this.initSlider()
      }, 20)
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
            Loop: true,
            Threshold: 0.3,
            Speed: 400
          },
          click: true
        })
      }
    }
  }
</script>


<style lang="scss" scoped>
  .slider {
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
  }
</style>
