webpackJsonp([12],{"8jq1":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("lbHh"),a=s.n(i),r=s("FWz8");s("S4W9");var n={name:"orderdetail",created:function(){this.getOpenid(),this.getorderidFun(),this.getOrderDetailFun()},data:function(){return{orderid:"",openid:"",orderData:{usernum:0,userphoto:"http://thirdwx.qlogo.cn/mmopen/vi_32/wROgUhVrAtVE0gzcasnkx3NbBVRaZbVk9ZVF55qPiavOcj8B0iaHZmylyicNxr4rzZhkRyIqavRPv0ZnMWE0O5XwA/132",phonetype:"mi",applycomment:"坏了",orderid:"O-201902221512309943",fund:200,array:["http://www.huashenghuzhu.com/sphz/files/O-201902221512309943/cd.jpg","http://www.huashenghuzhu.com/sphz/files/O-201902221512309943/zx.jpg"],starttime:154818182e4,applytime:"2019-02-22 14:00:00",approvetime:null,approvecomment:null,username:"aa"}}},methods:{getOrderDetailFun:function(){var t=this,e={openid:this.openid,orderid:this.orderid};Object(r.b)(e).then(function(e){var s=e.data;200==s.status?t.getOrderNum=s.data.orders:Toast(s.msg)})},getorderidFun:function(){this.orderid=this.getUrlKey("orderid")},getOpenid:function(){var t=a.a.get("openid");this.openid=t&&null==t?t:this.getUrlKey("openid"),console.log(this.openid),a.a.set("openid",this.openid)},getUrlKey:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orderdetailbox"},[t._m(0),t._v(" "),s("div",{staticClass:"timebox"},[s("p",[t._v(t._s(t.orderData.applytime))])]),t._v(" "),s("div",{staticClass:"cont1"},[s("div",{staticClass:"imagebox"},[s("img",{attrs:{src:t.orderData.userphoto,alt:""}})]),t._v(" "),s("div",{staticClass:"cont1_text"},[t._v("互助会员："+t._s(t.orderData.username))])]),t._v(" "),s("div",{staticClass:"cont2"},[s("ul",[s("li",[t._m(1),t._v(" "),s("div",{staticClass:"rightbox"},[s("p",[t._v(t._s(t.orderData.name))])])]),t._v(" "),s("li",[t._m(2),t._v(" "),s("div",{staticClass:"rightbox"},[s("p",[t._v(t._s(t.orderData.starttime))])])]),t._v(" "),s("li",[t._m(3),t._v(" "),s("div",{staticClass:"rightbox"},[s("p",[t._v(t._s(t.orderData.phonetype))])])]),t._v(" "),s("li",[t._m(4),t._v(" "),s("div",{staticClass:"rightbox"},[s("p",[t._v(t._s(t.orderData.effTime))])])]),t._v(" "),s("li",[t._m(5),t._v(" "),s("div",{staticClass:"rightbox"},[s("p",[t._v(t._s(t.orderData.usernum))])])]),t._v(" "),s("li",[t._m(6),t._v(" "),s("div",{staticClass:"rightbox"},[s("p",[t._v(t._s(t.orderData.fund))])])]),t._v(" "),s("li",[t._m(7),t._v(" "),s("div",{staticClass:"rightbox"},[s("p",[t._v(t._s(t.orderData.applytime))])])]),t._v(" "),s("li",[t._m(8),t._v(" "),s("div",{staticClass:"rightbox"},[s("p",[t._v(t._s(t.orderData.approvetime))])])])])]),t._v(" "),t.orderData.approvecomment?s("div",{staticClass:"cont3"},[t._m(9),t._v(" "),s("div",{staticClass:"cont3_bottom"},[s("p",[t._v(t._s(t.orderData.approvecomment))])])]):t._e(),t._v(" "),t._m(10),t._v(" "),s("div",{staticClass:"cont3"},[t._m(11),t._v(" "),s("div",{staticClass:"cont3_bottom"},[s("p",[t._v("• 本次划拨互助金额为"+t._s(t.orderData.fund)+"元"),s("br"),t._v("• 为保护受助人隐私，公示10日后不再显示照片及身份信息")])])]),t._v(" "),t.orderData.array?s("div",{staticClass:"cont4"},[t._m(12),t._v(" "),t._l(t.orderData.array,function(t){return s("div",{key:t.idx,staticClass:"cont4_bottom"},[s("div",{staticClass:"imgbox"},[s("img",{attrs:{src:t,alt:""}})])])}),t._v(" "),s("div",{staticClass:"clears"})],2):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head"},[e("p",[this._v("*为保护会员隐私，公示后将隐藏个人信息!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftbox"},[e("p",[this._v("互助计划")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftbox"},[e("p",[this._v("加入日期")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftbox"},[e("p",[this._v("手机型号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftbox"},[e("p",[this._v("生效日期")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftbox"},[e("p",[this._v("参与人数")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftbox"},[e("p",[this._v("获捐互助金")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftbox"},[e("p",[this._v("公示日期")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftbox"},[e("p",[this._v("拨款日期")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cont3_top"},[e("h1",[this._v("事件情况")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cont3"},[e("div",{staticClass:"cont3_top"},[e("h1",[this._v("调查过程")])]),this._v(" "),e("div",{staticClass:"cont3_bottom"},[e("p",[this._v("经调查情况属实，通过对互助会员邮件的手机样品，照片进行核对后，发现事情无误。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cont3_top"},[e("h1",[this._v("互助详情")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cont4_top"},[e("h1",[this._v("相关材料")])])}]},c=s("VU/8")(n,o,!1,null,null,null);e.default=c.exports},S4W9:function(t,e){}});
//# sourceMappingURL=12.ca26ef959c56ea58df70.js.map