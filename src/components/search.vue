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
        console.log(1)
        this.page = 1
        this.searchResult = []
        this.songs = []
      },
      _getSearchResult(item) {
        this.query = item
        getSearchResult(this.query, this.page).then((res) => {
          if (res.message === 'no results' || res.message === 'query error') {
            console.log(res.message)
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
        })
        this.page++
      },
      searchMore() {
        this._getSearchResult(this.query)
      },
      handlePlayList(list) {
        const bottom = list.length > 0 ? '58px' : ''
        this.$refs.searchWrap.style.bottom = bottom
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/index';

  .search-box-wrap {
    padding: 8px 24px;
  }

  .hot-search-wrap {
    .hot-search {
      padding-left: 24px;
      margin: 8px 0;
      color: $color-text-l;
    }
    .hotKeys-list {
      overflow: hidden;
      padding: 0 24px;
      li {
        float: left;
        padding: 8px;
        margin: 0 12px 12px 0;
        border-radius: 5px;
        font-size: 12px;
        color: $color-text-d;
        background-color: $color-highlight-background;
      }
    }
  }

  .searchList-wrap {
    position: fixed;
    width: 100%;
    top: 132px;
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
