webpackJsonp([8],{"1NQy":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[e("m-header"),t._v(" "),e("tab")],1),t._v(" "),e("keep-alive",[e("router-view")],1),t._v(" "),e("player")],1)},r=[],s={render:i,staticRenderFns:r};n.a=s},"6M3K":function(t,n,e){"use strict";function i(t){e("eImB")}var r=e("TBkx"),s=e("Ha1T"),a=e("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-d5819892",null);n.a=c.exports},"772a":function(t,n,e){"use strict";n.a={}},"9j/D":function(t,n){},Ewld:function(t,n,e){"use strict";var i=e("pevK"),r=e("lCiF"),s=e("VU/8"),a=s(i.a,r.a,null,null,null);n.a=a.exports},Ha1T:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"progress-bar-wrap",on:{click:t.progressClick}},[e("div",{ref:"progressBar",staticClass:"progress-bar"},[e("div",{ref:"bar",staticClass:"bar"}),t._v(" "),e("div",{ref:"btn",staticClass:"btn"})])])},r=[],s={render:i,staticRenderFns:r};n.a=s},IcnI:function(t,n,e){"use strict";var i=e("/5sW"),r=e("NYxO"),s=e("lwq5"),a=e("UjVw"),o=e("mUbh"),c=e("ukYY"),l=e("sax8");e.n(l);i.a.use(r.b);n.a=new r.b.Store({state:s.a,getters:a,mutations:c.a,actions:o,strict:!1,plugins:[]})},M93x:function(t,n,e){"use strict";function i(t){e("iAqD")}var r=e("xJD8"),s=e("1NQy"),a=e("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-73b00972",null);n.a=c.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("j1ja"),r=(e.n(i),e("/5sW")),s=e("M93x"),a=e("YaEn"),o=e("IcnI"),c=e("v5o6"),l=e.n(c),u=e("cTzj"),f=e.n(u),d=e("XQUS");e.n(d);l.a.attach(document.body),r.a.use(f.a,{preLoad:1.3,loading:e("RCTW"),attempt:1}),new r.a({el:"#app",router:a.a,store:o.a,render:function(t){return t(s.a)}})},PA3C:function(t,n){},RCTW:function(t,n,e){t.exports=e.p+"static/img/star.720f8b0.png"},T452:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r});var i={g_tk:102740937,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0},r={param:"jsonpCallback"}},TBkx:function(t,n,e){"use strict";n.a={props:{rate:{type:Number,default:0}},methods:{progressClick:function(t){var n=t.offsetX;this.$emit("jumpProgress",n/(this.$refs.progressBar.clientWidth-12)),this.setWidth(n)},setWidth:function(t){this.$refs.bar.style.width=t+"px",this.$refs.btn.style.transform="translate3d("+t+"px,0,0)"}},watch:{rate:function(t){var n=this.$refs.progressBar.clientWidth-12,e=n*t;this.setWidth(e)}}}},UjVw:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"singer",function(){return i}),e.d(n,"songSheetData",function(){return r}),e.d(n,"topList",function(){return s}),e.d(n,"isPlaying",function(){return a}),e.d(n,"fullScreen",function(){return o}),e.d(n,"playList",function(){return c}),e.d(n,"sequenceList",function(){return l}),e.d(n,"mode",function(){return u}),e.d(n,"currentIndex",function(){return f}),e.d(n,"currentSong",function(){return d});var i=function(t){return t.singer},r=function(t){return t.songSheetData},s=function(t){return t.topList},a=function(t){return t.isPlaying},o=function(t){return t.fullScreen},c=function(t){return t.playList},l=function(t){return t.sequenceList},u=function(t){return t.mode},f=function(t){return t.currentIndex},d=function(t){return t.playList[t.currentIndex]||{}}},"W/7t":function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i={sequence:0,loop:1,random:2}},XQUS:function(t,n){},YaEn:function(t,n,e){"use strict";var i=e("/5sW"),r=e("/ocq"),s=function(){return e.e(4).then(e.bind(null,"oMBN"))},a=function(){return e.e(5).then(e.bind(null,"Pns5"))},o=function(){return e.e(6).then(e.bind(null,"wrZl"))},c=function(){return e.e(0).then(e.bind(null,"7biW"))},l=function(){return e.e(1).then(e.bind(null,"9kGq"))},u=function(){return e.e(2).then(e.bind(null,"hEic"))},f=function(){return e.e(3).then(e.bind(null,"msT+"))};i.a.use(r.a),n.a=new r.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:s,children:[{path:":id",component:u}]},{path:"/singer",component:a,children:[{path:":id",component:l}]},{path:"/rank",component:o,children:[{path:":id",component:f}]},{path:"/search",component:c}]})},YgNb:function(t,n,e){"use strict";function i(t,n){return Math.floor(Math.random()*(n-t+1)+t)}e.d(n,"a",function(){return r});var r=function(t){for(var n=t.slice(),e=0;e<n.length;e++){var r=i(0,e),s=n[e];n[e]=n[r],n[r]=s}return n}},"Zp+1":function(t,n,e){"use strict";function i(t){e("PA3C")}var r=e("772a"),s=e("be/+"),a=e("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-d677dc74",null);n.a=c.exports},aN8A:function(t,n,e){"use strict";function i(t){e("cR5D")}var r=e("jSyP"),s=e("bVXk"),a=e("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-d62cbf80",null);n.a=c.exports},bVXk:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.playList.length,expression:"playList.length"}],staticClass:"player"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[e("div",{staticClass:"header"},[e("div",{staticClass:"wrap"},[e("i",{staticClass:"iconfont icon-back",on:{click:t.toggleFullScreen}}),t._v(" "),e("h3",{staticClass:"song-name",domProps:{innerHTML:t._s(t.currentSong.name)}})]),t._v(" "),e("h5",{staticClass:"singer-name",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),e("div",{staticClass:"main",on:{click:t.toggleLyric}},[e("transition-group",{attrs:{name:"fade",tag:"div"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isImgShow,expression:"isImgShow"}],key:"pic",staticClass:"main-left"},[e("img",{staticClass:"img",class:t.rotateCls,attrs:{src:t.currentSong.image,alt:""}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isImgShow,expression:"!isImgShow"}],key:"lyric",staticClass:"main-right"},[e("scroll",{ref:"scroll",staticClass:"scroll",attrs:{data:t.mixData}},[e("div",{staticClass:"lyric-wrap"},t._l(t.lyricLines,function(n,i){return e("p",{ref:"lyricLines",refInFor:!0,staticClass:"lyric-line",class:{active:i===t.currentLineIndex},domProps:{innerHTML:t._s(n)}})}))])],1)])],1),t._v(" "),e("div",{staticClass:"footer"},[e("div",{staticClass:"time"},[e("div",{staticClass:"time-left"},[e("span",[t._v(t._s(t.format(t.currentTime)))])]),t._v(" "),e("progress-bar",{staticClass:"progress-wrap",attrs:{rate:t.rate},on:{jumpProgress:t.jumpProgress}}),t._v(" "),e("div",{staticClass:"time-right"},[e("span",[t._v(t._s(t.format(t.currentSong.duration)))])])],1),t._v(" "),e("div",{staticClass:"icon-wrap"},[e("span",{on:{click:t.changeMode}},[e("i",{class:t.modeCls})]),t._v(" "),e("span",{on:{click:t.toPrevSong}},[e("i",{staticClass:"iconfont icon-prev"})]),t._v(" "),t.isPlaying?e("span",{on:{click:t.togglePlaying}},[e("i",{staticClass:"iconfont icon-pause"})]):t._e(),t._v(" "),t.isPlaying?t._e():e("span",{on:{click:t.togglePlaying}},[e("i",{staticClass:"iconfont icon-play"})]),t._v(" "),e("span",{on:{click:t.toNextSong}},[e("i",{staticClass:"iconfont icon-next"})]),t._v(" "),t.currentSong.isHeart?t._e():e("span",{on:{click:t.toggleHeart}},[e("i",{staticClass:"iconfont icon-heart1"})]),t._v(" "),t.currentSong.isHeart?e("span",{on:{click:t.toggleHeart}},[e("i",{staticClass:"iconfont icon-heart2"})]):t._e()])]),t._v(" "),e("div",{staticClass:"bg",style:t.bgCls}),t._v(" "),e("div",{staticClass:"layer"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.toggleFullScreen}},[e("div",{staticClass:"left"},[e("div",[e("img",{class:t.rotateCls,attrs:{src:t.currentSong.image,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h5",{domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.currentSong.singer)}})])]),t._v(" "),e("div",{staticClass:"right"},[t.isPlaying?e("span",{on:{click:function(n){n.stopPropagation(),t.togglePlaying(n)}}},[e("i",{staticClass:"iconfont icon-pause"})]):t._e(),t._v(" "),t.isPlaying?t._e():e("span",{on:{click:function(n){n.stopPropagation(),t.togglePlaying(n)}}},[e("i",{staticClass:"iconfont icon-play-mini"})])])]),t._v(" "),e("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{timeupdate:t.updateTime,ended:t.end}})])},r=[],s={render:i,staticRenderFns:r};n.a=s},"be/+":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"tab"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"li",to:"/recommend"}},[e("span",[t._v("推荐")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"li",to:"/singer"}},[e("span",[t._v("歌手")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"li",to:"/rank"}},[e("span",[t._v("排行")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"li",to:"/search"}},[e("span",[t._v("搜索")])])],1)},r=[],s={render:i,staticRenderFns:r};n.a=s},cR5D:function(t,n){},eImB:function(t,n){},fo2f:function(t,n,e){"use strict";function i(t){e("9j/D")}var r=e("mUhR"),s=e("gccL"),a=e("VU/8"),o=i,c=a(r.a,s.a,o,"data-v-37b5518c",null);n.a=c.exports},gccL:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("header",[i("div",{staticClass:"icon-wrapper"},[i("img",{staticClass:"icon",attrs:{src:e("RCTW"),alt:"star"}})]),t._v(" "),i("h1",{staticClass:"title"},[t._v("Star Music")])])}],s={render:i,staticRenderFns:r};n.a=s},iAqD:function(t,n){},jSyP:function(t,n,e){"use strict";var i=e("Dd8w"),r=e.n(i),s=e("NYxO"),a=e("6M3K"),o=e("W/7t"),c=e("YgNb"),l=e("x5wy"),u=e("OKJt"),f=e.n(u),d=e("Ewld");n.a={data:function(){return{timer:null,currentTime:0,lyric:null,lyricLines:[],currentLineIndex:0,isImgShow:!0}},components:{progressBar:a.a,Scroll:d.a},computed:r()({mixData:function(){return this.lyricLines.push(this.isImgShow),this.lyricLines}},e.i(s.a)(["playList","sequenceList","fullScreen","currentSong","mode","isPlaying","currentIndex"]),{rotateCls:function(){return this.isPlaying?"rotate":"rotate pause"},bgCls:function(){return"background-image: url("+this.currentSong.image+")"},rate:function(){return this.currentTime/this.currentSong.duration},modeCls:function(){return"iconfont "+{0:"icon-sequence",1:"icon-loop",2:"icon-random"}[this.mode]}}),methods:{toggleFullScreen:function(){this.$store.commit("setFullScreen",!this.fullScreen)},togglePlaying:function(){this.$store.commit("setIsPlaying",!this.isPlaying),this.lyric.togglePlay()},toPrevSong:function(){var t=this,n=this.currentIndex-1>=0?this.currentIndex-1:this.playList.length-1;clearTimeout(this.timer),setTimeout(function(){t.$store.dispatch("toPrevOrNext",{newIndex:n})},300)},toNextSong:function(){var t=this,n=this.currentIndex+1===this.playList.length?0:this.currentIndex+1;clearTimeout(this.timer),setTimeout(function(){t.$store.dispatch("toPrevOrNext",{newIndex:n})},300)},updateTime:function(t){this.currentTime=t.target.currentTime},format:function(t){t|=0;var n=t/60|0,e=t%60;return e=e<10?"0"+e:e,n+":"+e},jumpProgress:function(t){var n=t*this.currentSong.duration;this.$refs.audio.currentTime=n,this.lyric.seek(1e3*n)},changeMode:function(){var t=(this.mode+1)%3;this.$store.commit("setMode",t);var n=[];n=t===o.a.random?e.i(c.a)(this.sequenceList):this.sequenceList,this.resetCurrentIndex(n),this.$store.commit("setPlayList",n)},resetCurrentIndex:function(t){var n=this,e=t.findIndex(function(t){return t.id===n.currentSong.id});this.$store.commit("setCurrentIndex",e)},end:function(){this.mode===o.a.loop?(this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.lyric.seek(0)):this.toNextSong()},_getLyric:function(){var t=this;e.i(l.a)(this.currentSong.mid).then(function(n){t.lyric=new f.a(n,t.handleLyric),t.lyric.lines.map(function(n){t.lyricLines.push(n.txt)}),t.isPlaying&&t.lyric.play()})},handleLyric:function(t){var n=t.lineNum;t.txt;if(console.log(n),this.currentLineIndex=n,n>8){var e=this.$refs.lyricLines[n-8];this.$refs.scroll.scrollToElement(e,1e3)}else console.log("xx"),this.$refs.scroll.scrollToElement(0,0)},toggleHeart:function(){this.currentSong.isHeart?this.currentSong.isHeart=!this.currentSong.isHeart:this.currentSong.isHeart=!0},toggleLyric:function(){this.isImgShow=!this.isImgShow}},watch:{currentSong:function(t,n){var e=this;t!==n&&(this.lyric&&this.lyric.stop(),this.lyricLines=[],this.currentLineIndex=0,this.$nextTick(function(){e.$refs.audio.play(),e._getLyric()}))},isPlaying:function(t){var n=this.$refs.audio;this.$nextTick(function(){!0===t?n.play():n.pause()})}}}},lCiF:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{ref:"wrapper"},[t._t("default")],2)},r=[],s={render:i,staticRenderFns:r};n.a=s},lwq5:function(t,n,e){"use strict";var i=e("W/7t"),r={singer:{},songSheetData:{},topList:{},isPlaying:!1,fullScreen:!1,playList:[],sequenceList:[],mode:i.a.sequence,currentIndex:-1};n.a=r},mUbh:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"selectPlay",function(){return r}),e.d(n,"toPrevOrNext",function(){return s}),e.d(n,"randomPlay",function(){return a});var i=e("W/7t"),r=function(t,n){var e=(t.state,t.commit),i=n.list,r=n.index;e("setIsPlaying",!0),e("setFullScreen",!0),e("setPlayList",i),e("setSequence",i),e("setCurrentIndex",r)},s=function(t,n){var e=(t.state,t.commit);e("setCurrentIndex",n.newIndex),e("setIsPlaying",!0)},a=function(t,n){var e=(t.state,t.commit),r=n.list,s=n.randomList;e("setIsPlaying",!0),e("setMode",i.a.random),e("setCurrentIndex",0),e("setPlayList",s),e("setSequence",r)}},mUhR:function(t,n,e){"use strict";n.a={}},pevK:function(t,n,e){"use strict";var i=e("m3es"),r=e.n(i);n.a={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:[Array,Boolean],default:null},listenScroll:{type:Boolean,default:!1},pullup:{type:Boolean,default:!1}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new r.a(this.$refs.wrapper,{click:this.click,probeType:this.probeType}),this.listenScroll){var n=this;this.scroll.on("scroll",function(t){n.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")})}},refresh:function(){this.scroll&&this.scroll.refresh()},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}}},ukYY:function(t,n,e){"use strict";var i={setSinger:function(t,n){t.singer=n},setSongSheetData:function(t,n){t.songSheetData=n},setTopList:function(t,n){t.topList=n},setIsPlaying:function(t,n){t.isPlaying=n},setFullScreen:function(t,n){t.fullScreen=n},setPlayList:function(t,n){t.playList=n},setSequence:function(t,n){t.sequenceList=n},setMode:function(t,n){t.mode=n},setCurrentIndex:function(t,n){t.currentIndex=n}};n.a=i},x5wy:function(t,n,e){"use strict";e.d(n,"a",function(){return f});var i=e("//Fk"),r=e.n(i),s=e("woOf"),a=e.n(s),o=e("mtWM"),c=e.n(o),l=e("T452"),u=e("xrTZ"),f=(e.n(u),function(t){var n=a()({},l.a,{songmid:t,loginUin:0,platform:"yqq",needNewCode:0,format:"jsonp",pcachetime:+new Date});return c.a.get("/api/lyric",{params:n}).then(function(t){return r.a.resolve(u.Base64.decode(t.data.lyric))})})},xJD8:function(t,n,e){"use strict";var i=e("fo2f"),r=e("Zp+1"),s=e("aN8A");n.a={name:"app",components:{MHeader:i.a,Tab:r.a,player:s.a}}}},["NHnr"]);
//# sourceMappingURL=app.aaba05bae73937641267.js.map