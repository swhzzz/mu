import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend.vue'
import Singer from '../components/singer.vue'
import Rank from '../components/rank.vue'
import Search from '../components/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
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
