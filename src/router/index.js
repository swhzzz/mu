import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend.vue'
import Singer from '../components/singer.vue'
import Rank from '../components/rank.vue'
import Search from '../components/search.vue'
import SingerDetail from '../components/singer-detail.vue'
import RecommendDetail from '../components/recommend-detail.vue'
import RankDetail from '../components/rank-detail.vue'

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
          component: RecommendDetail
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
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
