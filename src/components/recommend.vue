<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" :data="hotSongList" class="scroll">
      <div>
        <div v-if="sliderPicInfos.length">
          <slider>
            <div v-for="item in sliderPicInfos">
              <a :href="item.linkUrl"><img :src="item.picUrl" @load="loadImage"></a>
            </div>
          </slider>
        </div>
        <div class="hotSongList-wrap">
          <h5 class="hotSongList-title">热门歌单推荐</h5>
          <div v-if="!hotSongList.length" class="load-wrap">
            <loading></loading>
          </div>
          <ul v-else class="hotSongList">
            <li class="listInfo" v-for="item in hotSongList" @click="handleClick(item)">
              <div><img v-lazy="item.imgurl" alt="" class="icon"></div>
              <div class="listInfo-text">
                <h4>{{item.creator.name}}</h4>
                <p>{{item.dissname}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getRecommend, getSongList} from '../api/recommend'
  import Slider from '../base/slider.vue'
  import Loading from '../base/loading/loading.vue'
  import scroll from '../base/scroll.vue'
  import {playListMixin} from '../common/js/mixin'

  export default {
    mixins: [playListMixin],
    data() {
      return {
        sliderPicInfos: {},
        hotSongList: []
      }
    },
    components: {
      Slider,
      Loading,
      scroll
    },
    created() {
      this._getRecommend()
      this._getSongList()
    },
    methods: {
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          this.$refs.scroll.refresh()
        }
      },
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === 0) {
            this.sliderPicInfos = res.data.slider
          }
        })
      },
      _getSongList() {
        getSongList().then((res) => {
          this.hotSongList = res.data.list
        })
      },
      handleClick(item) {
        this.$store.commit('setSongSheetData', item)
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
      },
      handlePlayList(list) {
        const bottom = list.length > 0 ? `${58 / 375}rem` : ''
        this.$refs.recommend.style.bottom = bottom
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/index';

  .recommend {
    position: fixed;
    width: 100%;
    top: px2rem(88);
    bottom: 0;
    .scroll {
      height: 100%;
      overflow: hidden;
    }
  }

  .hotSongList-wrap {
    padding: px2rem(20);
    .hotSongList-title {
      text-align: center;
      color: $color-theme;
    }
    .hotSongList {
      li {
        margin-top: px2rem(20);
      }
    }
  }

  .load-wrap {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .listInfo {
    display: flex;
    .icon {
      width: px2rem(60);
    }
    .listInfo-text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: px2rem(20);
      h4 {
        color: $color-text;
      }
      p {
        font-size: px2rem(14);
        color: $color-text-d;
      }
    }
  }
</style>
