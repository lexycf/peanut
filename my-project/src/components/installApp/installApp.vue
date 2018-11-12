<template>
    <div class="inastallAPP">
        <div class="logo"><img src="../../../static/img/logo.png" alt=""></div>
        <div class="explain">
            <h1>CoinOpen</h1>
            <p>让天下没有难做的投资</p>
        </div>
        <div class="installBtn">
            <div class="btn">
                <a :href='installLink' class='linkAll' @click='fuzhi'></a>
                <b>下载APP</b>
                <p>管理您的资产</p>
            </div>
            
        </div>
        <div class='toSysBrowser' :class='toSysBrowserStyle' @click='toSysBrowserHideFun()'><img src="../../../static/img/appInstall/toSysBrowser.png" alt=""></div>
    </div>
</template>
<script>
require('./installApp.less');
import { Toast } from "mint-ui";
export default {
    name:'installApp',
    data(){
        return {
            isAndroid:false,
            isiOS:false,
            isWeixin:false,
            userSide:'',
            toSysBrowserStyle:'hide',
            installLink:'javascript:;'
        }
    },
    created(){
        this.judgeUserSideFun();
    },
    methods:{
        judgeUserSideFun(){
            let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            let isiOS =!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            let isWeixin = function () { //判断是否是微信
                let ua = navigator.userAgent.toLowerCase();
                return ua.match(/MicroMessenger/i) == "micromessenger";
            };
            this.isAndroid=isAndroid;
            this.isiOS=isiOS;
            this.isWeixin=isWeixin();
            if(this.isiOS){
                this.installLink='itms-services:///?action=download-manifest&;url=https://static.coinopen.org/download/cp.plist';
            }
            if(this.isAndroid){
                if(!this.isWeixin){
                    this.installLink='https://static.coinopen.org/download/coinopenRelease.apk';
                }
            }
            
        },
        fuzhi(){
            if(!this.isAndroid && !this.isiOS){
                Toast('请在手机端打开');
            }
            if(this.isAndroid){
                if(this.isWeixin){
                    this.toSysBrowserStyle='show';
                }
            }

            
        }
    }
}
</script>

