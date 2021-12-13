(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb95467"],{2705:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[null===t.spotifyId?e("v-row",{staticClass:"text-center login",attrs:{justify:"center",align:"center"}},[null!==t.url?e("v-col",{staticClass:"center",attrs:{md:"4"}},[e("div",[e("h1",{staticClass:"mb-5"},[t._v("go-spotify")])]),e("v-btn",{directives:[{name:"show",rawName:"v-show",value:null===t.spotifyId,expression:"spotifyId === null"}],staticClass:"ma-2 white--text text-none",attrs:{loading:t.loadingLogin,disabled:t.loadingLogin,"x-large":"",rounded:"",color:"spotifyGreen"},on:{click:t.goToLoginPage}},[t._v(" Login "),e("v-icon",{attrs:{dark:""}},[t._v(" mdi-spotify ")])],1)],1):t._e()],1):t._e()],1)},n=[],s={data:function(){return{loadingPlaylists:!1,loadingLogin:!1,errorMessage:null}},methods:{goToLoginPage:function(){this.loadingLogin=!0,location.href=this.url}},computed:{url:function(){return this.$store.getters.oathUrl},spotifyId:function(){return this.$store.getters.spotifyId}},mounted:function(){this.$store.dispatch("spotifyOathLogin")}},o=s,i=e("2877"),c=e("6544"),l=e.n(c),u=e("8336"),d=e("62ad"),m=e("a523"),f=e("132d"),g=e("0fd9"),k=Object(i["a"])(o,r,n,!1,null,"45e7dee0",null);a["a"]=k.exports;l()(k,{VBtn:u["a"],VCol:d["a"],VContainer:m["a"],VIcon:f["a"],VRow:g["a"]})},"517c":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card",{staticClass:"mx-auto card-link",attrs:{color:"rgb(0, 0, 0, 0.1)",tile:""},on:{click:function(a){return t.goToTrack(t.track.id)}}},[t.small?e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"2"}},[e("v-img",{staticClass:"image-link",attrs:{"max-height":"75","max-width":"75",src:t.getImage()}})],1),e("v-col",{attrs:{cols:"8"}},[e("div",[e("h4",{staticClass:"link mb-2",on:{click:function(a){return t.goToTrack(t.track.id)}}},[t._v(" "+t._s(t.track.name)+" ")])]),e("div",[e("h5",{staticClass:"subtitle secondary--text"},[t._v(" "+t._s(t.formatArtists(t.track.artists))+" • "+t._s(t.track.album.name)+" ")])])]),e("v-col",{staticClass:"text-right",attrs:{cols:"2"}},[t._v(" "+t._s(t.formatDuration(t.track.duration_ms))+" ")])],1):e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"auto",sm:"2",md:"1",lg:"1"}},[e("v-img",{staticClass:"image-link",attrs:{"max-height":"75","max-width":"75",src:t.getImage()}})],1),e("v-col",{attrs:{cols:"12",sm:"8",md:"9"}},[e("div",[e("h4",{staticClass:"link mb-2",on:{click:function(a){return t.goToTrack(t.track.id)}}},[t._v(" "+t._s(t.track.name)+" ")])]),e("div",[e("h5",{staticClass:"subtitle secondary--text"},[t._v(" "+t._s(t.formatArtists(t.track.artists))+" • "+t._s(t.track.album.name)+" ")])])]),e("v-col",{staticClass:"text-right",attrs:{cols:"1"}},[t._v(" "+t._s(t.formatDuration(t.track.duration_ms))+" ")])],1)],1)],1)},n=[],s=(e("b680"),e("99af"),e("b0c0"),{name:"TrackItem",props:["track","small"],data:function(){return{}},mounted:function(){},methods:{getImage:function(){return this.track.album.images[2].url},formatDuration:function(t){var a=Math.floor(t/6e4),e=(t%6e4/1e3).toFixed(0);return"".concat(a,":").concat(e<10?"0":"").concat(e)},formatArtists:function(t){for(var a="",e=0;e<t.length;e++)a+=t[e].name,a+=e===t.length-1?"":", ";return a},goToTrack:function(t){this.$router.push({name:"Single Track",params:{id:t}})}}}),o=s,i=(e("e7b1"),e("2877")),c=e("6544"),l=e.n(c),u=e("b0af"),d=e("62ad"),m=e("adda"),f=e("0fd9"),g=Object(i["a"])(o,r,n,!1,null,"3c8ac209",null);a["a"]=g.exports;l()(g,{VCard:u["a"],VCol:d["a"],VImg:m["a"],VRow:f["a"]})},9030:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"mt-5"},[null===t.spotifyId?e("div",[e("login")],1):e("div",[e("h3",[t._v("recommendations based on "+t._s(t.playlist.name))]),e("br"),e("br"),null!==t.recommendedTracks?e("div",{staticClass:"mt-5"},t._l(t.recommendedTracks,(function(t){return e("div",{key:t.id},[e("track-item",{attrs:{track:t}})],1)})),0):t._e()])])},n=[],s=e("2705"),o=e("517c"),i=e("ed08"),c={components:{Login:s["a"],TrackItem:o["a"]},name:"Recommendations",props:["id"],data:function(){return{}},mounted:function(){var t=Object(i["a"])(this.playlist.tracks.items);console.log(t),t.length>0&&this.$store.dispatch("getRecommendedTracks",{ids:t})},computed:{spotifyId:function(){return this.$store.getters.spotifyId},playlist:function(){return this.$store.getters.currentPlaylistTracks},recommendedTracks:function(){return this.$store.getters.recommendedTracks}},methods:{}},l=c,u=e("2877"),d=e("6544"),m=e.n(d),f=e("a523"),g=Object(u["a"])(l,r,n,!1,null,"c22f4486",null);a["default"]=g.exports;m()(g,{VContainer:f["a"]})},e7b1:function(t,a,e){"use strict";e("fe6d")},ed08:function(t,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"a",(function(){return n}));e("4e827"),e("fb6a"),e("d81d");var r=function(t){var a=t;switch(t){case 0:a="C";break;case 1:a="D♭";break;case 2:a="D";break;case 3:a="E♭";break;case 4:a="E";break;case 5:a="F";break;case 6:a="G♭";break;case 7:a="G";break;case 8:a="A♭";break;case 9:a="A";break;case 10:a="B♭";break;case 11:a="B";break;default:return null}return a},n=function(t){var a=t.sort((function(){return.5-Math.random()}));return s(a.slice(0,5))},s=function(t){return t.map((function(t){var a=t.track;return a.id}))}},fe6d:function(t,a,e){}}]);
//# sourceMappingURL=chunk-5cb95467.a8950c94.js.map