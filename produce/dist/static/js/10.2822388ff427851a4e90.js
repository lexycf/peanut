webpackJsonp([10],{hxi7:function(t,s){},uHNG:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Au9i"),e=i("FWz8");i("hxi7");var l={name:"upload",data:function(){return{imgNum:4,phone1:"",phone2:"",phone3:"",phone4:"",imgsarr:[],i:0}},methods:{getFile:function(t,s){var i=i||window.event,a=new FileReader,e=i.target.files[0];a.readAsDataURL(e);var l=this;a.onload=function(){console.log(this.result),l["phone"+t]=this.result;var i=this.result;""!=l["phone"+t]&&l.uploadPicFun(i,s)}},getFile2:function(){this.imgsarr.length>4&&Object(a.Toast)("最多可上传4张图片");var t=t||window.event,s=new FileReader,i=t.target.files[0];s.readAsDataURL(i);var e=this;s.onload=function(){var t=[];t=e.imgsarr,console.log(t),t.push(this.result),e.imgsarr=t,console.log(e.imgsarr),e.uploadPicFun(this.result,"其他材料")}},uploadPicFun:function(t,s){var i=this,l={file:t,openid:this.openid,picName:s};Object(e.b)(l).then(function(t){var s=t.data;200==s.status?i.recordList=s.data.orders:Object(a.Toast)(s.msg)}).catch(function(t){Object(a.Toast)("网络错误，请刷新重试")})},delPicFun:function(t){console.log(t),this.imgsarr.splice(t,1)}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"upload"},[i("div",{staticClass:"tit"},[t._v("请拍照上传资料：")]),t._v(" "),i("div",{staticClass:"loadBox"},[i("div",{staticClass:"t"},[t._v("1 手机照片")]),t._v(" "),i("div",{staticClass:"up"},[i("div",{staticClass:"upl"},[i("span"),i("p",[t._v("手机正面照片")]),t._v(" "),i("input",{ref:"files",staticClass:"inp",attrs:{type:"file",accept:"image/*",multiple:"multiple"},on:{change:function(s){t.getFile(1,"手机正面")}}}),t._v(" "),i("img",{staticClass:"imgs",attrs:{src:t.phone1,alt:"",id:"phone1"}})]),t._v(" "),i("div",{staticClass:"upl"},[i("span"),i("p",[t._v("手机背面照片")]),t._v(" "),i("input",{ref:"files",staticClass:"inp",attrs:{type:"file",accept:"image/*",multiple:"multiple"},on:{change:function(s){t.getFile(2,"手机反面")}}}),t._v(" "),i("img",{staticClass:"imgs",attrs:{src:t.phone2,alt:"",id:"phone2"}})])])]),t._v(" "),i("div",{staticClass:"clears"}),t._v(" "),i("div",{staticClass:"loadBox"},[i("div",{staticClass:"t"},[t._v("1 购机发票")]),t._v(" "),i("div",{staticClass:"up"},[i("div",{staticClass:"upl"},[i("span"),i("p",[t._v("发票正面照片")]),t._v(" "),i("input",{ref:"files",staticClass:"inp",attrs:{type:"file",accept:"image/*",multiple:"multiple"},on:{change:function(s){t.getFile(3,"发票正面")}}}),t._v(" "),i("img",{staticClass:"imgs",attrs:{src:t.phone3,alt:"",id:"phone3"}})]),t._v(" "),i("div",{staticClass:"upl"},[i("span"),i("p",[t._v("发票背面照片")]),t._v(" "),i("input",{ref:"files",staticClass:"inp",attrs:{type:"file",accept:"image/*",multiple:"multiple"},on:{change:function(s){t.getFile(4,"发票反面")}}}),t._v(" "),i("img",{staticClass:"imgs",attrs:{src:t.phone4,alt:"",id:"phone4"}})])])]),t._v(" "),i("div",{staticClass:"clears"}),t._v(" "),i("div",{staticClass:"loadBox"},[i("div",{staticClass:"t"},[t._v("1 其他证明材料")]),t._v(" "),i("div",{staticClass:"up"},[i("div",{staticClass:"imgsBox"},t._l(t.imgsarr,function(s,a){return i("div",{key:s.index,staticClass:"img-ul"},[i("img",{attrs:{src:s,alt:""},on:{click:function(s){t.delPicFun(a)}}})])})),t._v(" "),i("div",{staticClass:"upl"},[i("div",{staticClass:"jia"},[t._v("＋")]),i("input",{ref:"files",staticClass:"inp",attrs:{type:"file"},on:{change:function(s){t.getFile2()}}})])])]),t._v(" "),i("div",{staticClass:"clears"}),t._v(" "),i("div",{staticClass:"upBtn"},[t._v("上传资料")])])},staticRenderFns:[]},c=i("VU/8")(l,n,!1,null,null,null);s.default=c.exports}});
//# sourceMappingURL=10.2822388ff427851a4e90.js.map