<template>
    <div class="mypeanutbox">
        <div class="cont1">
            <div class="cont1_top">
                <div class="top_left"><h1>账户余额<i>{{balance}}</i>元</h1></div>
                <div class="top_right">申请互助金</div>
            </div>
            <div class="cont1_bottom">
                <div class="smallbox">
                    <p>补充资料</p>
                </div>
                <div class="smallbox">
                    <p>红包兑换</p>
                </div>
                <div class="smallbox">
                    <p>邀请好友</p>
                </div>
                <div class="smallbox">
                    <p>计划充值</p>
                </div>  
            </div>
        </div>
        <div class="cont2">
            <div class="cont2_top">
                <h1> 本月完成任务充满互助能量</h1>
            </div>
            <div class="cont2_mid">
                <div class="midbox"><p v-bind:style="{ width: percent+ '%' }">{{percent}}%</p></div>
            </div>
            <div class="cont2_bottom">
                <p>可抵互助金，能量为0时互助计划终止</p>
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
import { getBalance} from '@/api/user';
export default {
    name:'mypeanut',
    created(){
        this.getBalanceFun();
        this.defaultFun();
    },
    data(){
        return {
            balance:0,
            percent:10
           
        }
    },
    methods:{
        defaultFun(){
            
        },
        
         getBalanceFun(){
            getBalance().then(res => {
                let result=res.data;
                if(result.status==0){
                    this.balance=result.data.balance;
                }else{
                    Toast(result.message);
                }
             
            
            }).catch(err => {
                Toast('网络错误，请刷新重试');
            })
        },
    }
}
</script>

