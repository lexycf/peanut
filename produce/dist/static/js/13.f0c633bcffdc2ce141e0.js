webpackJsonp([13],{"6If2":function(t,e){},"cHB+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Au9i"),i=s("lbHh"),a=s.n(i),r=s("vLgD");s("6If2");var o={name:"orderRecord",created:function(){this.getOpenid(),this.getPublishFun()},data:function(){return{recordList:[],openid:"",recordList2:[{username:"aaa"},{product:"bbb"},{fund:"ccc"}]}},methods:{getPublishFun:function(){var t=this;(function(t){return Object(r.a)({url:"/rest/getPublish",method:"get",params:t})})({openid:this.openid}).then(function(e){var s=e.data;200==s.status?t.recordList=s.data.orders:Object(n.Toast)(s.msg)}).catch(function(t){Object(n.Toast)("网络错误，请刷新重试")})},getOpenid:function(){var t=a.a.get("openid");this.openid=t&&null==t?t:this.getUrlKey("openid"),console.log(this.openid),a.a.set("openid",this.openid)},getUrlKey:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orderbox"},[t._m(0),t._v(" "),t.recordList.length>0?s("div",{staticClass:"hadData"},t._l(t.recordList,function(e){return s("div",{key:e.idx,staticClass:"conts"},[s("router-link",{staticClass:"links",attrs:{to:{path:"/orderdetail",query:{openid:t.openid,orderid:e.orderid}}}}),t._v(" "),s("div",{staticClass:"cont1"},[s("p",[t._v(t._s(e.applytime))])]),t._v(" "),s("div",{staticClass:"cont2"},[s("div",{staticClass:"cont2_left"},[s("img",{attrs:{src:e.omuserphotog,alt:""}})]),t._v(" "),s("div",{staticClass:"cont2_right"},[s("p",[t._v("\n                    互助会员："+t._s(e.username)),s("br"),t._v("\n                    互助计划："+t._s(e.product)),s("br"),t._v("\n                    所获互助金："+t._s(e.fund)+"元\n                ")])])]),t._v(" "),s("div",{staticClass:"cont3"},[t._m(1,!0),t._v(" "),s("div",{staticClass:"cont3_bottom"},[s("p",[t._v(t._s(e.applycomment))])])])],1)})):s("div",{staticClass:"empty"},[t._v("\n    暂无公示\n")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head"},[e("p",[this._v("*为保护会员隐私，公示后将隐藏个人信息!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cont3_top"},[e("span",[this._v("事件情况")]),this._v(" "),e("i",[this._v("详情 ")])])}]},d=s("VU/8")(o,c,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=13.f0c633bcffdc2ce141e0.js.map