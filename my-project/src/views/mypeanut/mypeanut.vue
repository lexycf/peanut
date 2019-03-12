<template>
    <div class="mypeanutbox">
        <div class="headerBox"><router-link to="/redexchange" class='record'>互助记录>></router-link><div class="heads"><img src="./img/icon1.png" alt="">&nbsp;微信昵称</div></div>
        <div class="cont1">
            <div class="cont1_top">
                <div class="top_left"><h1>账户余额<i>{{balance}}</i>元</h1></div>
                <div class="top_right"><router-link :to="{path:'/upload', query:{openid:openid}}" class='links'></router-link>申请互助金</div>
            </div>
            <div class="cont1_bottom">
                <!-- <div class="smallbox">
                    <p><router-link to="/orderdetail" class='links'></router-link>补充资料</p>
                </div> -->
                <div class="smallbox">
                    <p><router-link :to="{path:'/redexchange', query:{openid:openid}}" class='links'></router-link>红包兑换</p>
                </div>
                <div class="smallbox">
                    <p><router-link :to="{path:'/invite', query:{openid:openid}}" class='links'></router-link>邀请好友</p>
                </div>
                <div class="smallbox">
                    <p><router-link :to="{path:'/recharge', query:{openid:openid}}" class='links'></router-link>计划充值</p>
                </div>  
            </div>
        </div>
        <div class="cont2">
            <div class="cont2_top">
                <h1> 互助能量</h1>
            </div>
            <div class="cont2_mid">
                <div class="midbox"><p v-bind:style="{ width: percent+ '%' }">{{percent}}%</p></div>
            </div>
            <div class="cont2_bottom">
                <p>充满能量条即可免10元管理费/年</p>
            </div>
        </div>
        <div class="cont3">
            <div class="cont3box">
                <div class="leftbox"><p>分享给他人</p></div>
                <div class="rightbox">+10%能量<span>分享</span></div>
            </div>
             <div class="cont3box">
                <div class="leftbox"><p>分享给朋友圈</p></div>
                <div class="rightbox">+10%能量<span>晒晒</span></div>
            </div>
             <div class="cont3box">
                <div class="leftbox"><p>邀请家人好友</p></div>
                <div class="rightbox">+10%能量<span>邀请</span></div>
            </div>
        </div>
    </div>
</template>
<script>
require('./mypeanut.less');
import { Toast } from "mint-ui";
import Cookies from 'js-cookie';
import { getBalance} from '@/api/user';
export default {
    name:'mypeanut',
    created(){
        this.getOpenid();
        this.defaultFun();
        
    },
    data(){
        return {
            balance:0,
            percent:10,
            openid:''
           
        }
    },
    methods:{
        defaultFun(){
            this.getBalanceFun();
            this.openid=this.getUrlKey('openid');
        },
        getOpenid(){
            let openid=Cookies.get('openid');
            if(!openid){
                this.openid = this.getUrlKey('openid');
            }else{
                this.openid=openid;
            }
            console.log(this.openid);
            Cookies.set('openid', this.openid);
        },
         getBalanceFun(){
            let data = {
                    openid:this.openid
                }
            getBalance(data).then(res => {
                let result=res.data;
                if(result.status==200){
                    this.balance=result.data.mount;
                }else{
                    Toast(result.msg);
                }
             
            
            }).catch(err => {
                Toast('网络错误，请刷新重试');
            })
        },
        getUrlKey (name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
        },
    }
}
</script>

