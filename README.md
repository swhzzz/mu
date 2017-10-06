# 使用方法
```
git clone git@github.com:swhzzz/mu.git

cd mu

npm install 

npm run dev
```

# 小结

## 一.`<meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">`针对移动端的meta标签，宽度===设备宽度，初始缩放比例=1，最大缩放比例=1，不予许用户进行缩放。

## 二.移动端300ms延迟解决==> `fastclick`
安装👇
```
npm i fastlclick --save 
```
使用方式很简单，import进来，注册一下就可以了👇
```
import fastclick from 'fastclick'
fastclick.attach(document.body)
```
参考：[Github FastClick](https://github.com/ftlabs/fastclick)

## 三.babel-polyfill用来支持浏览器不支持的ES6 API比如promise、Set等
安装👇
```
npm install --save babel-polyfill 
```
**注意：安装之后引用时，必须把polyfill第一个引入**
```
import 'babel-polyfill' // 第一个引入
import Vue from 'vue'
import App from './App'
...
```
参考：[babel官网](https://babeljs.io/docs/usage/polyfill/)

## 四.vue-router
1.router-link配置
(1)`<router-link tag="div" to="/route"><span>推荐</span></router-link>`可以当做a标签，点击会跳转到对应的路由(由`to`控制路由)
(2)在router文件夹下的index.js里要写明导入的组件，以及跳转的时候的组件，如果初次进入页面就要加载，则应当定义`redirect: "/route"`对应的组件，这里要注意配置routes的时候，component为单数
```
// router/index.js

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
```
(3)在app.vue里引入，同时要写明`<router-view></router-view>`来存放跳转的路由的存放
```
// App.vue

<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import Tab from 'components/tab'

  export default {
    name: 'app',
    components: {
     Tab
    }
  }
</script>

```
2.`router-link-active`表示当前所在的路由时的css样式

3.vue-router配合webpack实现路由懒加载
```
import xx from  'path/to/component'  // 不使用路由懒加载时候的写法

const xx = () => import('path/to/component') // 使用路由懒加载写法
```
4.嵌套路由：需要在父路由下配置children选项
```
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id', // 这里千万不要加 '/'，加了斜杠不需要点击也会跳转
          component: SingerDetail
        }
      ]
    },
```
参考：
[vue-router](https://router.vuejs.org/zh-cn/advanced/lazy-loading.html)
[Lazy Loading in Vue using Webpack's Code Splitting](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/)


## 五.created和mounted
在开发的过程中，recommend组件在created的时候去异步获取请求，而slider组件在mounted时候去渲染页面（计算容器宽度），那么这里就会导致一个问题：由于请求图片信息是异步的，当得到数据时，mounted钩子里的函数已经执行了（就是说已经添加class了），但是由于数据还没有到，slider组件里是空的，所以添加不上class，这就导致了图片不能正常排版，解决办法是，给slider的容器添加v-if（判断data.length是否存在）当得到数据之后，再执行mounted钩子，此时执行函数就可以将class正确地添加上去

## 六.keep-alive缓存
每次切换tab的时候，再切换回原页面，会重新渲染页面，此时就需要keep-alive包裹动态组件，也就是router-view，这样再切换回来的时候就不会再重新渲染了，节约了流量

## 七.用jsonp请求qq音乐网页歌单数据时，发现报错返回状态码是500，服务器出错。但是qq音乐自己是可以调用这个接口的，这是为什么呢。原因就在于qq音乐对请求做了处理，控制台Network ==> Request Header 下有个host和referer，host为c.y.qq.com，referer为https://y.qq.com/portal/playlist.html，就是因为这两个参数才请求不到数据。好，那么明确了问题，要怎么解决？前端能在发请求的时候携带header里的参数吗，想了一想好像不行，后端好像可以，有了直接用nodejs就好了 。。。build文件夹下有个dev-server.js文件就是一个服务器，我先发一个请求给dev-server，然后让dev-server去伪造header，再发请求，这样貌似可以行得通。附上dev-server的代码
```
var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/getSongSheet', (req, res) => {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      host: 'c.y.qq.com',
      referer: 'https://c.y.qq.com/'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})
app.use('/api', apiRoutes)
```
当前端向后端发请求时，由后端去获取qq音乐的歌单数据，然后通过res.json返回给前端，这样就可以渲染数据了

## 八.better-scroll的大坑
**为什么我初始化了better-scroll结果不能滚动，黑人问号？？**
scroll组件的height一定要小于他包裹的第一个子元素的高度！！！
scroll组件的height一定要小于他包裹的第一个子元素的高度！！！
scroll组件的height一定要小于他包裹的第一个子元素的高度！！！
重要的事情说三遍！！！

以上如果还是不成功的话，那说明better-scroll的初始化时机不正确，在还没有渲染数据的时候，better-scroll已经初始化。解决办法===>为scroll组件传递一个`:data="someAsyncData"`，然后scroll内部用一个watch监听data的变化，data变化就将scroll组件refresh，重新计算内容区域宽度

## 九.better-scroll的scrollToElement的应用
在做歌手页面的时候，有个常见的需求是点击歌手对应的首字母，跳转到歌手列表。这里简单记录下scrollToElement的用法，`scrollToElement(el, time, offsetX, offsetY, easing)`，在点击右侧字母的时候通过获取它的index，让后通过ref获得list的children，接着引入scroll调用scrollToElement方法，既可以滚动
参考：[better-scroll文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/api.html#scrolltoelementel-time-offsetx-offsety-easing)

## 十.singer页面的左右联动
首先说下需求：
1. 右边sidebar点击时，歌手列表滚动到相应位置
2. 歌手列表滚动的时候，右边要滚动到对应的字母
3. 滚动的时候顶部title会被顶走

逻辑实现： 
1. 见九👆

2. 新建一个数组存放list的高度之和，当发生滚动的时候，用better-scroll去监听y的变化派发事件告诉singer组件，singer组件监听pos.y的变化保存`this.scrollY=pos.y`，当scrollY发生改变时，执行相应方法，在此方法中判断，遍历高度数组，判断-newY的值是否在两个高度值之间，若是，则将currentIndex = i ，并在sidebar的children上:class = "{'active': currentIndex===index}",还有两种临界情况，newY大于0（用户在歌手页面往下划）以及最后height2不存在的时候，要注意。

3. 在watch scrollY的时候，当scrollY大于height1小于height2时，添加diff属性用来计算fixedTitle与height2之间的距离，同时watch diff属性，当diff的值大于0且小于24（24为fixedTitle与当前列表字母间的距离，小于说明需要进行动画），利用transform进行动画

## 十一.vuex相关
插件相关之前用vuex做项目的时候一直没有用到vuex官方提供的插件，这次用了下createLogger插件以及在生产环境下的process.env发现调试方便了许多，以下是配置
```
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
```

## 十二.播放器player组件，核心
分两块，全屏播放器和缩小在页面底部的小型播放器

1.  全屏播放器
(1)顶部返回按钮，歌手，歌曲信息
(2)中间album的图片，无线滚动，点击暂停时，需要暂停animation动画，这里用到了一个属性叫`animation-play-state: paused;`
(3)底部5个按钮，分别是切换播放模式，上一曲，播放/暂停，下一曲，收藏
- 切换播放模式
通过点击icon触发事件来改变mode，第一步先通过Vuex的getters来获取当前的mode，第二步当前的播放模式+1取3的余数可以得到下一个状态的播放模式，第三步发起一个mutation改变当前的mode，第四部判断当前的播放模式是哪个，random的话则打乱播放列表，默认列表循环则什么都不做，单曲循环则在ended时改变currentTime
- 上一曲/下一曲
这里用到了audio标签的两个api，需要些获得audio的refs然后通过play()和pause()来切换播放状态，当然这里涉及到了状态的切换，这里要注意临界值的情况

- 播放/暂停
切换isPlaying状态，`togglePlay()`

2. mini播放器
(1)左边图片+歌曲信息，图片做animation旋转
(2)右边icon切换暂停播放和红心切换

3. progress-bar进度条
- 左右时间
这里audio标签页提供了原生的api支持，可以通过this.$refs.audio.currentTime来**实时**获取现在播放当多少秒了，总时间则可以通过currentSong的duration来获取(currentSong则通过songList和currentIndex来获取，所以不需要再多定义一个state)

- 中间进度条
这里定义一个progress-bar组件，需要外部传入rate(当前播放了多少秒/总时间)，
然后根据rate和进度条宽度以及拖动进度条的btn可以计算出偏移宽度，通过watch属性rate已经操作ref来改变width实现进度条的实时增加；btn同理；
点击跳转到指定的时间播放怎么实现？通过emit一个事件，把点击时的位置(e.target.offsetX/进度条的width)告诉player，player拿到rate之后乘以currentSong.duration就可以得到应当调到多少秒进行播放，设置的话还是audio的那个api=> this.$refs.audio.currentTime，这是个可读写的api，完了之后再算下rate传给progress就好了。

4.  播放模式
(1) 默认顺序播放，此时sequenceList和playList相同
(2) 单曲循环，单曲循环主要用到了audio标签的可读写属性currentTime和ended属性，当ended(播放完)时，检测当前的播放模式，如果是loop(循环播放)则将currentTime设置为0，再调用audio的play()函数实现单曲循环
(3) 随机播放，检测当前的播放模式，如果是random，则需要用洗牌算法打乱当前的播放模式，然后将currentIndex重新设置(如果不重新设置currentIndex点击随机播放会使当前播放的歌曲被打断插入一首新的歌曲进行播放)，寻找当前的currentIndex使用ES6的findIndex方法即可，通过判断currentSong.id === item.id。

5. 歌词
(1)歌词获取和解析，先用axios向后端发送请求，再由后端发送请求得到数据，得到的数据是一个base64的字符串用`js-base64`插件进行解析，得到歌词，在调用`lyric-parser`插件new Lyric()得到歌词的实例，new Lyric传入获得的歌词和一个异步函数，实例通过`play() stop() tooglePlay() seek()`四个方法来操纵歌词的滚动
(2)歌词滚动实现，先把歌词渲染到页面，外面包一个scroll组件使歌词可以滚动，调用play()方法可以滚动歌词，tooglePlay()方法在暂停歌曲或者播放歌曲的时候调用可以切换歌词是否暂停播放，当lineNum发生变化时，将lineNum赋值给data的currentLineIndex，通过currentLineIndex与index比较来切换高亮的行数，当lineNum>8时，调用scroll组件的scrollToElement方法滚动到指定的歌词行数(el是通过ref获取p标签数组，然后通过lineNum-8作为下标来获取的)，这样就能使得歌词保持在中间
(3)歌词与cd页面切换，cd页面和歌词页面都是绝对定位，通过transition-group的name来设置动画，这里要注意transition-group的每个子元素必须包含key属性

## 十三.排行页面以及songlist扩展
在排行页面点击进入歌曲列表的时候，前三名会变成红色，这里对songlist做了扩展，让songlist接受一个prop: rank，rank默认为false，当为true时显示歌曲前面的数字

## 十四.搜索页面
- search-box组件，内部有个双向绑定的value，当value变化时，emit触发监听的时间listenValue把value传出去，在外部进行发送jsonp请求进行搜索，当value值为空的时候，则不发送请求
- search组件则是绑定一个事件到search-box上，当search-box触发这个事件，进行搜索，把结果告诉search-list，search-list进行渲染
