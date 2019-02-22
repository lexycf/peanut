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
            let data = {
                    openid:this.openid,
                }
                deposit(data).then(res => {
                let result=res.data;
                if(result.status==0){
                    this.hadMemNum=result.data.hadMemNum;
                }else{
                    Toast(result.message);
                }
             
            
            })
        },
        getUrlKey (name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
        },
        
    }
}
</script>

