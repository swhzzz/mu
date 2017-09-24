<template>
  <div>
    <ol class="singerList">
      <li v-for="item in singers">
        <h6 class="title">{{item.title}}</h6>
        <div v-for="subItem in item.items" class="singerInfo">
          <img v-lazy="subItem.avatar" alt="" class="avatar">
          <span class="singer-name">{{subItem.name}}</span>
        </div>
      </li>
    </ol>
    <ol class="sidebar">
      <li v-for="item in sidebar">
        <span>{{item}}</span>
      </li>
    </ol>
  </div>
</template>

<script>
  import getSinger from '../api/singer'

  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSinger()
    },
    methods: {
      _getSinger() {
        getSinger().then((res) => {
//          console.log(res.data.list)
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
                avatar: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
              })
            } else if (!map[item.Findex]) {
              map[item.Findex] = {
                title: item.Findex,
                items: []
              }
              map[item.Findex].items.push({
                name: item.Fsinger_name,
                id: item.Fsinger_id,
                avatar: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
              })
            } else {
              map[item.Findex].items.push({
                name: item.Fsinger_name,
                id: item.Fsinger_id,
                avatar: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
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
        })
      }
    },
    computed: {
      sidebar() {
        return this.singers.map((item) => {
          return item.title.substring(0, 1)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../common/sass/variable';

  .title {
    color: #fff;
    background-color: $color-highlight-background;
    height: 24px;
    line-height: 24px;
    padding-left: 12px;
  }

  .singerInfo {
    margin-top: 24px;
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
      margin-bottom: 24px;
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
      justify-content:center;
      span {
        font-size: 12px;
        margin-top: 4px;
        color: $color-text-l;
      }
    }
  }
</style>
