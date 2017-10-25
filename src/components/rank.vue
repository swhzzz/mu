<template>
  <div class="rank" ref="rank">
    <scroll :data="topList" class="scroll" ref="scroll">
      <ul class="list-wrap">
        <li v-for="item in topList" class="type" @click="handleClick(item)">
          <div><img :src="item.picUrl" alt=""></div>
          <ul class="song-wrap">
            <li class="song" v-for="subItem in item.songList">
              {{subItem.songname}}-{{subItem.singername}}
            </li>
          </ul>
        </li>
      </ul>
      <div class="load-wrap">
        <loading v-show="!topList.length"></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getTopList} from '../api/getTopList'
  import scroll from '../base/scroll.vue'
  import loading from '../base/loading/loading.vue'
  import {playListMixin} from '../common/js/mixin'

  export default {
    mixins: [playListMixin],
    data() {
      return {
        topList: []
      }
    },
    components: {
      scroll,
      loading
    },
    created() {
      this._getTopList()
    },
    methods: {
      _getTopList() {
        getTopList().then((res) => {
          this.topList = res.data.topList
//          console.log(this.topList)
        })
      },
      handleClick(item) {
        this.$router.push({
          path: `/rank/${item.listenCount}`
        })
        this.$store.commit('setTopList', item)
      },
      handlePlayList(list) {
        const bottom = list.length > 0 ? `${58 / 375}rem` : 0
        this.$refs.rank.style.bottom = bottom
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/index.scss';

  .rank {
    position: fixed;
    width: 100%;
    top: px2rem(78);
    bottom: 0;
    .scroll {
      height: 100%;
      overflow: hidden;
    }
  }

  .list-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .type {
      display: flex;
      padding-bottom: px2rem(24);
      img {
        width: px2rem(100);
      }
      .song-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: px2rem(16);
        background-color: $color-highlight-background;
        .song {
          width: px2rem(200);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: px2rem(12);
          color: $color-text-d;
        }
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
</style>
