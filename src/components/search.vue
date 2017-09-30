<template>
  <div>
    <div class="search-wrap">
      <search-box @listenValue="xxx"></search-box>
    </div>
    <div class="hot-search-wrap">
      <h5 class="hot-search">热门搜索</h5>
      <ul class="hotKeys-list">
        <li v-for="item in hotKeys" @click="handleClick(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SearchBox from './search-box.vue'
  import {getHotSearch} from '../api/getHotSearch'
  import {getSearchResult} from '../api/getSearchResult'
  import SearchList from './search-list.vue'

  export default {
    data() {
      return {
        hotKeys: [],
        searchResult: [],
        timer: null
      }
    },
    components: {SearchBox, SearchList},
    created() {
      this._getHotSearch()
    },
    methods: {
      _getHotSearch() {
        getHotSearch().then((res) => {
          let specialKey = res.data.special_key
//          console.log(res.data);
          let ret = res.data.hotkey.map((item) => {
            return item.k
          })
          this.hotKeys = [specialKey, ...ret.slice(0, 9)]
        })
      },
      handleClick(item) {
        this._getSearchResult(item)
      },
      xxx(value) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this._getSearchResult(value)
        }, 1000)
      },
      _getSearchResult(item) {
        getSearchResult(item).then((res) => {
          this.searchResult = res.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/index';

  .search-wrap {
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
</style>
