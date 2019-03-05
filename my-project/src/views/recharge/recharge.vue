<template>
    <div class="rechargebox">
        <div class="cont1">
            <div class="txtleft">
                <h1>乔布斯</h1>
                <p>手机碎屏互助计划</p>
            </div>
            <div class="txtright">
                <h1>余额<span>{{balance}}</span>元</h1>
                <p>剩余{{leftMonth}}个月</p>
            </div>
        </div>
        <div class="cont2">
            <h1>选择充值金额</h1>
        </div>
        <div class="cont3">
            <div class="cont3box" :class='choose1' @click='chooseFun(1)'>
                <span v-if='choose1=="active"'></span>
                <h1><i>1</i>元</h1>
                <p>可用1个月</p>
            </div>
            <div class="cont3box" :class='choose2' @click='chooseFun(2)'>
                <span v-if='choose2=="active"'></span>
                <h1><i>6</i>元</h1>
                <p>可用6个月</p>
            </div>
            <div class="cont3box" :class='choose3' @click='chooseFun(3)'>
                <span v-if='choose3=="active"'></span>
                <h1><i>12</i>元</h1>
                <p>可用12个月</p>
            </div>
        </div>
        <div class="footer">
            <p @click='getdeposit()'>微信支付{{needPay}}元</p>
        </div>
    </div>
</template>
<script>
require('./recharge.less');
import { Toast } from "mint-ui";
import { getBalance,deposit} from '@/api/user';
export default {
    name:'recharge',
     created(){
        this.getBalanceFun();
        this.defaultFun();
       
        this.openid=this.getUrlKey('openid');
    },
    data(){
        return {
            balance:0,
            leftMonth:0,
            choose1:'',
            choose2:'',
            choose3:'',
            needPay:0,
            openid:''
        }
    },
    methods:{
        defaultFun(){
            this.choose2='active';
            this.needPay=6;
        },
        chooseFun(type){
            if(type==1){
                this.choose1='active';
                this.choose2='';
                this.choose3='';
                this.needPay=1;
            }else if(type==2){
                this.choose1='';
                this.choose2='active';
                this.choose3='';
                this.needPay=6;
            }else{
                this.choose1='';
                this.choose2='';
                this.choose3='active';
                this.needPay=12;
            }

        },
         getBalanceFun(){
             //获取余额
            let data = {
                    openid:this.openid,
                }
            getBalance(data).then(res => {
                let result=res.data;
                if(result.status==200){
                    this.hadMemNum=result.data.hadMemNum;
                }else{
                    Toast(result.msg);
                }
             
            
            })
        },
        getdeposit(){
            //充值接口
            let totalfee=this.needPay*100;
            let data = {
                    type:'JSAPI',
                    body:'花生互助',
                    openid:this.openid,
                    totalfee:totalfee
                }
                console.log(data);
                deposit(data).then(res => {
                let result=res.data;
                console.log(result);
                if(result.status==200){
                     // 通过接口获取微信支付需要的基础参数
                    this.onBridgeReady(result);
                }else{
                    Toast(result.msg);
                }
             
            
            })
        },
      // 网页端调起微信支付API
      isWeixinJSBridge: function () {
            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                }
            } else {
                this.onBridgeReady();
            }
        },
      // 网页端调起微信支付API
      onBridgeReady: function (data) {
            //   data:appid, //公众号名称，由商户传入     
            //        timeStamp, //时间戳，自1970年以来的秒数     
            //        nonceStr, //随机串     
            //        package,  
            //        sign //微信签名 
            //        prepayid 预下单单号
            //        partnerid:商户号
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId": data.data.appid, //公众号名称，由商户传入     
                    "timeStamp": data.data.timeStamp, //时间戳，自1970年以来的秒数     
                    "nonceStr": data.data.nonceStr, //随机串     
                    "package": data.data.package,
                    "signType": 'MD5', //微信签名方式    
                    "paySign": data.data.sign //微信签名 
                },
                function (res) {
                    // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        //location.href = data.data.return_url;
                        this.$router.push({
                            path: "/mypeanut"
                        });
                    } else if (res.err_msg == "get_brand_wcpay_request:fail") {
                        alert("支付失败，" + res.err_desc);
                        var err = res.err_desc;
                        if (err.indexOf("跨号支付") != -1) {
                            //展示二维码
                            
                        }

                    }
                }
            );
        },
      getUrlKey(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[
          1].replace(/\+/g, '%20')) || null
      },
        
    }
}
</script>

