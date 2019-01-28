<template>
    <div class="invitebox">
        <div class="cont">
            <div class="cont1">
                <h1>邀请好友&nbsp;畅享互助</h1>
            </div>
            <div class="cont2">
                <p>每邀请一个加入增加10%能量<br/>最低一年只花1元钱享受互助</p>
            </div>
            <div class="cont3">
                <p>你可以邀请</p>
            </div>
            <div class="cont4">
                <div class="conts">
                    <img src="../../../static/image/invite/icon1.png" alt="">
                    <span>家人</span>
                </div>
                <div class="conts">
                    <img src="../../../static/image/invite/icon2.png" alt="">
                    <span>好友</span>
                </div>
                <div class="conts">
                    <img src="../../../static/image/invite/icon3.png" alt="">
                    <span>同事</span>
                </div>
            </div>
        </div>
        <div class="footer">
            <p @click='showHide()'>立刻邀请</p>
        </div>
        <div class="hideBox" :class='hideStyle'>
            <div class="fingerbox">
                <img src="./img/finger.png" alt="">
            </div>
            <div class="invitebox">
                <div class="close" @click='closeHide'><img src="./img/close.png" alt=""></div>
                <h1>点击右上角<img src="./img/dian.png" alt="">分享给该好友</h1>
                <p>分享后聊两句，邀请成功几率更大哦~</p>
            </div>
        </div>
    </div>
</template>
<script>
require('./invite.less');
export default {
    name:'invite',
    data(){
        return {
            hideStyle:'hide'
        }
    },
    methods:{
         closeHide(){
             this.hideStyle='hide';
            
        },
        showHide(){
            this.hideStyle='show'
        }
       
    },
}
</script>

