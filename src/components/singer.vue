<template>
  <div class="singer">
    <scroll class="scroll"
            :data="singers"
            ref="scroll"
            @scroll="scroll"
            :listenScroll="listenScroll"
            :probeType="3"
    >
      <ol class="singerList" ref="singer">
        <li v-for="item in singers">
          <h6 class="title">{{item.title}}</h6>
          <div v-for="subItem in item.items" class="singerInfo" @click="jumpToSinger(subItem)">
            <img v-lazy="subItem.avatar" alt="" class="avatar">
            <span class="singer-name">{{subItem.name}}</span>
          </div>
        </li>
      </ol>
      <ol class="sidebar" ref="sidebar">
        <li v-for="(item,index) in sidebar"
            @touchstart="switchList"
            :data-index="index"
            :class="{'active': currentIndex === index}"
        >{{item}}
        </li>
      </ol>
      <div class="fixed-title" v-if="fixedTitle" ref="fixed">
        <h6>{{fixedTitle}}</h6>
      </div>
      <div class="wrapper" v-if="!singers.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import getSinger from '../api/singer'
  import scroll from '../base/scroll.vue'
  import Loading from '../base/loading/loading.vue'

  export default {
    data() {
      return {
        singers: [],
        scrollY: -1,
        currentIndex: 0,
        listHeight: [0],
        listenScroll: true,
        diff: 0
      }
    },
    created() {
      this._getSinger()
    },
    computed: {
      sidebar() {
        return this.singers.map((item) => {
          return item.title.substring(0, 1)
        })
      },
      fixedTitle() {
        if (this.scrollY > 0) {
          return;
        }
        return this.singers[this.currentIndex] ? this.singers[this.currentIndex].title : ''
      }
    },
    components: {scroll, Loading},
    methods: {
      _getSinger() {
        getSinger().then((res) => {
          console.log(res.data.list)
          let map = {
            hot: {
              title: '热门',
              items: []
            }
          }
          res.data.list.forEach((item, index) => {
            if (index < 10) {
              map.hot.items.push({
                name: item.Fsinger_name,
                id: item.Fsinger_id,
                singerMid: item.Fsinger_mid,
                avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
              })
            } else if (!map[item.Findex]) {
              map[item.Findex] = {
                title: item.Findex,
                items: []
              }
              map[item.Findex].items.push({
                name: item.Fsinger_name,
                id: item.Fsinger_id,
                singerMid: item.Fsinger_mid,
                avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
              })
            } else {
              map[item.Findex].items.push({
                name: item.Fsinger_name,
                id: item.Fsinger_id,
                singerMid: item.Fsinger_mid,
                avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
              })
            }
          })
//          console.log(map)
          // 放到数组里
          let hot = []
          let ret = []
//          console.log(map)
          for (let key in map) {
            if (map[key].title === '热门') {
              hot.push(map[key])
            } else if (/[a-zA-Z]/.test(key)) {
//              console.log(map[key])
              ret.push(map[key])
            }
          }
          // 排序
          ret.sort((a, b) => {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
          })
//          console.log(ret)
          this.singers = hot.concat(ret)
//          console.log(this.singers)
          setTimeout(() => {
            this.calculateHeight()
          }, 1000)
        })
      },
      switchList(e) {
        let index = e.target.getAttribute('data-index') // 得到点击时的序号
//        console.log(this.sidebar[index])
        let singerList = this.$refs.singer.children
        this.scrollY = -this.listHeight[index]
        this.$refs.scroll.scrollToElement(singerList[index])
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      calculateHeight() {
        let child = this.$refs.singer.children
//        console.log(child.length)
        for (let i = 0; i < child.length; i++) {
          this.listHeight.push(child[i].clientHeight + this.listHeight[i])
        }
//        console.log(this.listHeight)
      },
      jumpToSinger(subItem) {
        this.$router.push({
          path: `/singer/${subItem.singerMid}`
        })
        this.$store.commit('setSinger', subItem)
      }
    },
    watch: {
      scrollY(newY) {
        let listHeight = this.listHeight
        for (let i = 0; i < listHeight.length; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          this.diff = height2 + newY
          if (newY >= 0) { // y大于0情况
            this.currentIndex = 0
            return;
          }
          if ((-newY >= height1 && -newY < height2)) { // 在中间或者超出底部
            // 这里这个等于号很关键！！！！！否则遍历结束currentIndex = 23
            this.currentIndex = i
            return;
          }
        }
      },
      diff(newDiff) {
        let fixedTop = (newDiff > 0 && newDiff < 24) ? newDiff - 24 : 0 // 相减为负值，transform向上滚动
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/variable';

  .singer {
    position: absolute;
    width: 100%;
    top: 78px;
    bottom: 0;
    .scroll {
      height: 100%;
      overflow: hidden;
      .title {
        color: #fff;
        background-color: $color-highlight-background;
        height: 24px;
        line-height: 24px;
        padding-left: 12px;
      }
    }
  }

  .singerInfo {
    padding-top: 24px;
    .avatar {
      width: 50px;
      border-radius: 50%;
      vertical-align: middle;
      margin-left: 24px;
    }

    .singer-name {
      color: $color-text-l;
      vertical-align: middle;
      padding-left: 12px;
      font-size: 14px;
    }
    &:last-of-type {
      padding-bottom: 24px;
    }
  }

  .sidebar {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: $color-background-d;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      font-size: 12px;
      margin-top: 4px;
      color: $color-text-l;
    }
  }

  .active {
    color: $color-theme !important;
  }

  .fixed-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    h6 {
      height: 24px;
      line-height: 24px;
      padding-left: 12px;
      color: #fff;
      background-color: $color-highlight-background;
    }
  }

  .wrapper {
    display: flex;
    justify-content: center;
  }

</style>
