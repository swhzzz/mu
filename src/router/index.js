import Vue from 'vue'
import Router from 'vue-router'

const Recommend = () => import('../components/recommend.vue')
const Singer = () => import('../components/singer.vue')
const Rank = () => import('../components/rank.vue')
const Search = () => import('../components/search.vue')
const SingerDetail = () => import('../components/singer-detail.vue')
const RecommendDetail = () => import('../components/recommend-detail.vue')
const RankDetail = () => import('../components/rank-detail.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
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
