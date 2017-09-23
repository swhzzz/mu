<template>
  <div class="recommend">
    <div v-if="sliderPicInfos.length" class="slider-wrap">
      <slider>
        <div v-for="item in sliderPicInfos">
          <a :href="item.linkUrl"><img :src="item.picUrl" alt=""></a>
        </div>
      </slider>
    </div>
    <div class="hotSongList-wrap">
      <h5 class="hotSongList-title">热门歌单推荐</h5>
      <div v-if="!hotSongList.length" class="loading-wrap">
        <loading></loading>
      </div>
      <ul v-else class="hotSongList" v-for="item in this.hotSongList">
        <!--<a :href="item.">-->
        <li class="listInfo">
          <div><img v-lazy="item.imgurl" alt="" class="icon"></div>
          <div class="listInfo-text">
            <h4>{{item.creator.name}}</h4>
            <p>{{item.dissname}}</p>
          </div>
        </li>
        <!--</a>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import {getRecommend, getSongList} from '../api/recommend'
  import Slider from '../base/slider.vue'
  import Loading from '../base/loading/loading.vue'

  export default {
    data() {
      return {
        sliderPicInfos: {},
        hotSongList: []
      }
    },
    components: {
      Slider,
      Loading
    },
    created() {
      this._getRecommend()
      this._getSongList()
    },
    methods: {
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
          console.log(res.data.list)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/variable.scss';

  .hotSongList-wrap {
    padding: 20px;
    .hotSongList-title {
      text-align: center;
      /*padding: 8px;*/
      color: $color-theme;
    }
    .hotSongList {
      li {
        margin-top: 20px;
      }
    }
  }

  .loading-wrap {
    display: flex;
    justify-content: center;
  }

  .listInfo {
    display: flex;
    .icon {
      width: 60px;
    }
    .listInfo-text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 20px;
      h4 {
        color: $color-text;
      }
      p {
        font-size: 14px;
        color: $color-text-d;
      }
    }
  }
</style>
