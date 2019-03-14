<template>
  <div class="orderdetailbox">
    <div class="head">
      <p>*为保护会员隐私，公示后将隐藏个人信息!</p>
    </div>
    <div class="timebox">
      <p>{{orderData.applytime}}</p>
    </div>
    <div class="cont1">
      <div class="imagebox"><img :src="orderData.userphoto" alt=""></div>
      <div class="cont1_text">互助会员：{{orderData.username}}</div>
      <!-- <div class="rightbox">有疑问&nbsp;</div> -->
    </div>
    <div class="cont2">
      <ul>
        <li>
          <div class="leftbox">
            <p>互助计划</p>
          </div>
          <div class="rightbox">
            <p>{{orderData.name}}</p>
          </div>
        </li>
        <li>
          <div class="leftbox">
            <p>加入日期</p>
          </div>
          <div class="rightbox">
            <p>{{orderData.starttime}}</p>
          </div>
        </li>
        <li>
          <div class="leftbox">
            <p>手机型号</p>
          </div>
          <div class="rightbox">
            <p>{{orderData.phonetype}}</p>
          </div>
        </li>
        <li>
          <div class="leftbox">
            <p>生效日期</p>
          </div>
          <div class="rightbox">
            <p>{{orderData.effTime}}</p>
          </div>
        </li>
        <li>
          <div class="leftbox">
            <p>参与人数</p>
          </div>
          <div class="rightbox">
            <p>{{orderData.usernum}}</p>
          </div>
        </li>
        <li>
          <div class="leftbox">
            <p>获捐互助金</p>
          </div>
          <div class="rightbox">
            <p>{{orderData.fund}}</p>
          </div>
        </li>
        <li>
          <div class="leftbox">
            <p>公示日期</p>
          </div>
          <div class="rightbox">
            <p>{{orderData.applytime}}</p>
          </div>
        </li>
        <li>
          <div class="leftbox">
            <p>拨款日期</p>
          </div>
          <div class="rightbox">
            <p>{{orderData.approvetime}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="cont3" v-if='orderData.approvecomment'>
      <div class="cont3_top">
        <h1>事件情况</h1>
      </div>
      <div class="cont3_bottom">
        <p>{{orderData.approvecomment}}</p>
      </div>
    </div>
    <div class="cont3">
      <div class="cont3_top">
        <h1>调查过程</h1>
      </div>
      <div class="cont3_bottom">
        <p>经调查情况属实，通过对互助会员邮件的手机样品，照片进行核对后，发现事情无误。</p>
      </div>
    </div>
    <div class="cont3">
      <div class="cont3_top">
        <h1>互助详情</h1>
      </div>
      <div class="cont3_bottom">
        <p>• 本次划拨互助金额为{{orderData.fund}}元<br />• 为保护受助人隐私，公示10日后不再显示照片及身份信息</p>
      </div>
    </div>
    <div class="cont4" v-if='orderData.array'>
      <div class="cont4_top">
        <h1>相关材料</h1>
      </div>
      <div class="cont4_bottom" v-for='item in orderData.array' :key="item.idx" >
        <div class="imgbox"><img :src="item" alt=""></div>
      </div>
      <div class="clears"></div>
    </div>
  </div>
</template>
<script>
  require('./orderdetail.less');
  import Cookies from 'js-cookie'
  import {getOrderDetail} from '@/api/order';
  export default {  
    name: 'orderdetail',
    created() {
      this.getOpenid();
      this.getorderidFun();
      this.getOrderDetailFun();
    },
    data() {
      return {
        orderid: '',
        openid: '',
        //orderData: {},
        orderData: {
            "usernum": 0,
            "userphoto": "http://thirdwx.qlogo.cn/mmopen/vi_32/wROgUhVrAtVE0gzcasnkx3NbBVRaZbVk9ZVF55qPiavOcj8B0iaHZmylyicNxr4rzZhkRyIqavRPv0ZnMWE0O5XwA/132",
            "phonetype": "mi",
            "applycomment": "坏了",
            "orderid": "O-201902221512309943",
            "fund": 200,//赔付金额
            "array": ["http://www.huashenghuzhu.com/sphz/files/O-201902221512309943/cd.jpg",
              "http://www.huashenghuzhu.com/sphz/files/O-201902221512309943/zx.jpg"
            ],
            "starttime": 1548181820000,//加入时间
            "applytime": "2019-02-22 14:00:00",//申请时间
            "approvetime": null,//审核时间
            "approvecomment": null,//审核注释内容
            "username": "aa"
          },
      }
    },
    methods: {

      getOrderDetailFun() {
        let data = {
          openid: this.openid,
          orderid: this.orderid
        }
        getOrderDetail(data).then(res => {
          let result = res.data;
          if (result.status == 200) {
            this.getOrderNum = result.data.orders;
          } else {
            Toast(result.msg);
          }


        })
      },
      getorderidFun() {
        this.orderid = this.getUrlKey('orderid');
      },
      getOpenid() {
        let openid = Cookies.get('openid');
        if(!openid || openid!=null){
          this.openid = this.getUrlKey('openid');
        } else {
          this.openid = openid;
        }
        console.log(this.openid);
        Cookies.set('openid', this.openid);
      },
      getUrlKey(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[
          1].replace(/\+/g, '%20')) || null
      },
    },
  }

</script>
