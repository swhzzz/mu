import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/sass/index.scss'
document.write(`<style>
html{
font-size: ${document.documentElement.clientWidth}px;
}
</style>`)

fastclick.attach(document.body) // 解决点击300ms延迟

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('common/image/star.png'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
