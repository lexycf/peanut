webpackJsonp([17],{NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("7+uW");t("lbHh");t("hTWP"),t("feXM");var o={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},u=t("VU/8")({name:"App"},o,!1,null,null,null).exports,r=t("/ocq");i.default.use(r.a);var l=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"JXTs"))},hidden:!0},{path:"/orderRecord",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"cHB+"))},hidden:!0},{path:"/orderdetail",component:function(){return t.e(7).then(t.bind(null,"8jq1"))},hidden:!0},{path:"/product",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"If12"))},hidden:!0},{path:"/paysuccess",component:function(){return t.e(6).then(t.bind(null,"uLmQ"))},hidden:!0},{path:"/exchangesuc",component:function(){return t.e(9).then(t.bind(null,"gsmH"))},hidden:!0},{path:"/recharge",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"rgIz"))},hidden:!0},{path:"/redexchange",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"Mm+f"))},hidden:!0},{path:"/join",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"vXA6"))},hidden:!0},{path:"/plandetail",component:function(){return t.e(5).then(t.bind(null,"E9Cu"))},hidden:!0},{path:"/mypeanut",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"aa1O"))},hidden:!0},{path:"/invite",component:function(){return t.e(3).then(t.bind(null,"Vlzd"))},hidden:!0},{path:"/upload",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"uHNG"))},hidden:!0},{path:"/upload2",component:function(){return t.e(15).then(t.bind(null,"X2y3"))},hidden:!0},{path:"/upload3",component:function(){return t.e(14).then(t.bind(null,"jUNC"))},hidden:!0}],a=new r.a({scrollBehavior:function(){return{y:0}},routes:l}),c=(t("Au9i"),t("d8/S"),t("wvfG")),d=t.n(c);d.a.config.autoSetContainer=!0,i.default.use(d.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:a,components:{App:u},template:"<App/>"})},"d8/S":function(n,e){},feXM:function(n,e){var t={weixinShare:function(){var n=t.config;wx.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),wx.ready(function(){var e={title:n.title,desc:n.desc,link:n.link,imgUrl:n.imgUrl,type:n.type,dataUrl:"",success:function(e){n.success()}};wx.onMenuShareTimeline(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e),wx.onMenuShareAppMessage(e)}),wx.error(function(n){alert("当前网络不佳，请稍后重试！")})}};window.pub=function(n){t.config={appId:"",timestamp:"",nonceStr:"",signature:"",title:"",desc:"",link:"",imgUrl:"",type:"link",trigger:null,success:function(){},cancel:null,fail:null},$.extend(t.config,n),t.weixinShare()}},hTWP:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.8e3dfd75898f40e7edb1.js.map