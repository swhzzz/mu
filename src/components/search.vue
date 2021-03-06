<template>
  <div class="search">
    <div class="search-box-wrap">
      <search-box @listenValue="handleInput"></search-box>
    </div>
    <div class="hot-search-wrap" v-show="!query">
      <h5 class="hot-search">热门搜索</h5>
      <ul class="hotKeys-list">
        <li v-for="item in hotKeys" @click="handleClick(item)">{{item}}</li>
      </ul>
    </div>
    <div class="searchList-wrap" v-show="query" ref="searchWrap">
      <scroll :data="songs" class="scroll" :pullup="true" @scrollToEnd="searchMore" ref="scroll">
        <search-list :songList="songs" :haveResult="haveResult"></search-list>
      </scroll>
    </div>
  </div>
</template>

<script>
  import SearchBox from './search-box.vue'
  import {getHotSearch} from '../api/getHotSearch'
  import {getSearchResult} from '../api/getSearchResult'
  import {createSong} from '../api/song'
  import SearchList from './search-list.vue'
  import scroll from '../base/scroll.vue'
  import {playListMixin} from '../common/js/mixin'

  export default {
    mixins: [playListMixin],
    data() {
      return {
        hotKeys: [],
        timer: null,
        searchResult: [],
        songs: [],
        page: 1,
        query: '',
        haveResult: true
      }
    },
    components: {SearchBox, SearchList, scroll},
    created() {
      this._getHotSearch()
    },
    methods: {
      _getHotSearch() {
        getHotSearch().then((res) => {
          let specialKey = res.data.special_key
          let ret = res.data.hotkey.map((item) => {
            return item.k
          })
          this.hotKeys = [specialKey, ...ret.slice(0, 9)]
        })
      },
      handleClick(item) {
        this._getSearchResult(item)
      },
      handleInput(value) {
        this.resetSearch()
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this._getSearchResult(value)
        }, 500)
      },
      resetSearch() {
        this.page = 1
        this.searchResult = []
        this.songs = []
      },
      _getSearchResult(item) {
        this.query = item
        getSearchResult(this.query, this.page).then((res) => {
          if (res.data.song.curnum * this.page >= res.data.song.totalnum) {
            this.searchResult = []
            this.haveResult = false
            return
          } else {
            this.haveResult = true
            this.searchResult = this.searchResult.concat(res.data.song.list)
            this.songs = []
            this.searchResult.forEach((item) => {
              this.songs.push(createSong(item))
            })
          }
          this.page++
        })
      },
      searchMore() {
        this._getSearchResult(this.query)
      },
      handlePlayList(list) {
        const bottom = list.length > 0 ? `${58 / 375}rem` : ''
        this.$refs.searchWrap.style.bottom = bottom
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/index';

  .search-box-wrap {
    padding: px2rem(8) px2rem(24);
  }

  .hot-search-wrap {
    .hot-search {
      padding-left: px2rem(24);
      margin: px2rem(8) 0;
      color: $color-text-l;
    }
    .hotKeys-list {
      overflow: hidden;
      padding: 0 px2rem(24);
      li {
        float: left;
        padding: px2rem(8);
        margin: 0 px2rem(12) px2rem(12) 0;
        border-radius: px2rem(5);
        font-size: px2rem(12);
        color: $color-text-d;
        background-color: $color-highlight-background;
      }
    }
  }

  .searchList-wrap {
    position: fixed;
    width: 100%;
    top: px2rem(132);
    bottom: 0;
    .scroll {
      height: 100%;
      overflow: hidden;
    }
  }

  .jia {
    color: #fff;
  }

  .loading-wrap {
    display: flex;
    justify-content: center;
    color: #fff;
  }
</style>
