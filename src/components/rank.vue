<template>
  <div class="rank">
    <scroll :data="topList" class="scroll">
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

  export default {
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
//        console.log(item)
        this.$router.push({
          path: `/rank/${item.listenCount}`
        })
        this.$store.commit('setTopList', item)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/index.scss';

  .rank {
    position: fixed;
    width: 100%;
    top: 88px;
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
      padding-bottom: 24px;
      img {
        width: 100px;
      }
      .song-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 16px;
        background-color: $color-text-d;
        .song {
          width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
          color: #fff;
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
