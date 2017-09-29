import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend.vue'
import Singer from '../components/singer.vue'
import Rank from '../components/rank.vue'
import Search from '../components/search.vue'
import SingerDetail from '../components/singer-detail.vue'
import SongSheet from '../components/songSheet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: SongSheet
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
