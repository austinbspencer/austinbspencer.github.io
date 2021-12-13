(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e2a35cf"],{2161:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{staticClass:"mt-5"},[null===t.spotifyId?e("div",[e("login")],1):null!==t.topArtists?e("div",[e("v-row",[e("v-col",{staticClass:"text-left"},[e("h1",[t._v("top artists")])]),e("v-col",{staticClass:"text-right"},[e("v-row",[e("v-col",[e("v-btn",{staticClass:"text-none",attrs:{color:t.checkColor(t.longTerm),text:""},on:{click:function(s){return t.setNewTracks("long_term")}}},[t._v("all time")])],1),e("v-col",[e("v-btn",{staticClass:"text-none",attrs:{color:t.checkColor(t.mediumTerm),text:""},on:{click:function(s){return t.setNewTracks("medium_term")}}},[t._v("last 6 months")])],1),e("v-col",[e("v-btn",{staticClass:"text-none",attrs:{color:t.checkColor(t.shortTerm),text:""},on:{click:function(s){return t.setNewTracks("short_term")}}},[t._v("last 4 weeks")])],1)],1)],1)],1),e("v-row",{staticClass:"mt-5"},t._l(t.currentArtists,(function(t,s){return e("v-col",{key:s,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("artist-item",{attrs:{artist:t}})],1)})),1)],1):t._e()])},n=[],o=e("2705"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-row",{staticClass:"mb-5 mt-5",attrs:{justify:"center"}},[e("v-img",{staticClass:"avatar",attrs:{"lazy-src":"user.png","max-height":"200","max-width":"200",src:t.getImg()},on:{click:function(s){return t.goToInternalLink(t.artist.id)}}})],1),e("v-row",{staticClass:"text-center"},[e("v-col",[e("h4",{staticClass:"link",on:{click:function(s){return t.goToExternalLink(t.artist.external_urls.spotify)}}},[t._v(" "+t._s(t.artist.name)+" ")])])],1)],1)},a=[],c={name:"ArtistItem",props:["artist"],data:function(){return{}},mounted:function(){},methods:{getImg:function(){return this.artist.images[2].url},goToExternalLink:function(t){window.open(t,"_blank")},goToInternalLink:function(t){this.$router.push({name:"Single Artist",params:{id:t}})}}},l=c,u=(e("9152"),e("2877")),m=e("6544"),h=e.n(m),d=e("62ad"),g=e("adda"),f=e("0fd9"),p=Object(u["a"])(l,i,a,!1,null,"f656bd02",null),v=p.exports;h()(p,{VCol:d["a"],VImg:g["a"],VRow:f["a"]});var T={components:{ArtistItem:v,Login:o["a"]},name:"Artists",data:function(){return{longTerm:!1,mediumTerm:!0,shortTerm:!1}},mounted:function(){null!==this.spotifyId&&(this.$store.dispatch("getTopItems",{type:"artists",limit:50}),this.$store.dispatch("getTopItems",{type:"artists",range:"long_term",limit:50}),this.$store.dispatch("getTopItems",{type:"artists",range:"short_term",limit:50}))},computed:{spotifyId:function(){return this.$store.getters.spotifyId},topArtists:function(){return this.$store.getters.topArtists},topArtistsLong:function(){return this.$store.getters.topArtistsLong},topArtistsShort:function(){return this.$store.getters.topArtistsShort},currentArtists:function(){return this.longTerm?this.topArtistsLong.items:this.mediumTerm?this.topArtists.items:this.shortTerm?this.topArtistsShort.items:void 0}},methods:{setNewTracks:function(t){"long_term"===t?(this.longTerm=!0,this.mediumTerm=!1,this.shortTerm=!1):"medium_term"===t?(this.longTerm=!1,this.mediumTerm=!0,this.shortTerm=!1):(this.longTerm=!1,this.mediumTerm=!1,this.shortTerm=!0)},checkColor:function(t){return t?"spotifyGreen":"secondary"}}},_=T,w=e("8336"),k=e("a523"),y=Object(u["a"])(_,r,n,!1,null,"9df27c6e",null);s["default"]=y.exports;h()(y,{VBtn:w["a"],VCol:d["a"],VContainer:k["a"],VRow:f["a"]})},2705:function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",[null===t.spotifyId?e("v-row",{staticClass:"text-center login",attrs:{justify:"center",align:"center"}},[null!==t.url?e("v-col",{staticClass:"center",attrs:{md:"4"}},[e("div",[e("h1",{staticClass:"mb-5"},[t._v("go-spotify")])]),e("v-btn",{directives:[{name:"show",rawName:"v-show",value:null===t.spotifyId,expression:"spotifyId === null"}],staticClass:"ma-2 white--text text-none",attrs:{loading:t.loadingLogin,disabled:t.loadingLogin,"x-large":"",rounded:"",color:"spotifyGreen"},on:{click:t.goToLoginPage}},[t._v(" Login "),e("v-icon",{attrs:{dark:""}},[t._v(" mdi-spotify ")])],1)],1):t._e()],1):t._e()],1)},n=[],o={data:function(){return{loadingPlaylists:!1,loadingLogin:!1,errorMessage:null}},methods:{goToLoginPage:function(){this.loadingLogin=!0,location.href=this.url}},computed:{url:function(){return this.$store.getters.oathUrl},spotifyId:function(){return this.$store.getters.spotifyId}},mounted:function(){this.$store.dispatch("spotifyOathLogin")}},i=o,a=e("2877"),c=e("6544"),l=e.n(c),u=e("8336"),m=e("62ad"),h=e("a523"),d=e("132d"),g=e("0fd9"),f=Object(a["a"])(i,r,n,!1,null,"45e7dee0",null);s["a"]=f.exports;l()(f,{VBtn:u["a"],VCol:m["a"],VContainer:h["a"],VIcon:d["a"],VRow:g["a"]})},9152:function(t,s,e){"use strict";e("cc86")},cc86:function(t,s,e){}}]);
//# sourceMappingURL=chunk-6e2a35cf.ab669722.js.map