import {mapGetters} from 'vuex'

export const playListMixin = {
  computed: {
    ...mapGetters(['playList'])
  },
  activated() {
    this.handlePlayList(this.playList)
  },
  methods: {
    handlePlayList(list) {
      console.log('handlePlayList not defined')
    }
  },
  watch: {
    playList(newValue) {
      this.handlePlayList(newValue)
    }
  }
}
