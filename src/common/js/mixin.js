import {mapGetters} from 'vuex'

export const playListMixin = {
  computed: {
    ...mapGetters(['playList'])
  },
  mounted() {
    this.handlePlayList(this.playList) // 进入歌手详情页需要mounted来初始化
  },
  activated() {
    this.handlePlayList(this.playList) // 切换路由时需要activated初始化
  },
  methods: {
    handlePlayList(list) {
      console.log('handlePlayList not defined')
    }
  },
  watch: {
    playList(newValue) {
      this.handlePlayList(newValue) // 点击播放歌曲，返回时的初始化
    }
  }
}
