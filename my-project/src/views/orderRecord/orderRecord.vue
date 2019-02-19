<template>
    <div class="orderbox">
        <div class="head">
        <p>*为保护会员隐私，公示后将隐藏个人信息!</p>
    </div>
    <div class="conts">
        <div class="cont1">
            <p>2019-01-01</p>
        </div>
        <div class="cont2">
            <div class="cont2_left"><img src="../../../static/image/orderRecord/images/gs_03.jpg" alt=""></div>
            <div class="cont2_right">
                <p>
                    互助会员：乔布斯<br>
                    互助计划：手机碎屏互助计划<br>
                    所获互助金：500.00元
                </p>
            </div>
        </div>
        <div class="cont3">
             <router-link to="/orderdetail" class='links'></router-link>
            <div class="cont3_top">
                <span>事件情况</span>
                <i>详情&nbsp;</i>
            </div>
            <div class="cont3_bottom">
                <p>上班时不小心掉在了地上。屏幕完全摔碎了，苹果工作紧张每天开会都要用。</p>
            </div>
        </div>
    </div>
    
   
    </div>
</template>
<script>
require('./orderRecord.less');
import { Toast } from "mint-ui";
import { getPublish} from '@/api/orderRecord';
export default {
    name:'orderRecord',
    created(){
        this.getPublishFun();
        this.openid=this.getUrlKey('openid');
    },
    data(){
        return {
            recordList:[],
            openid:''
        }
    },
    methods:{
         getPublishFun(){
            let data = {
                    openid:this.openid
                }
            getPublish(data).then(res => {
                let result=res.data;
                if(result.status==0){
                    this.recordList=result.data;
                }else{
                    Toast(result.message);
                }
            
            }).catch(err => {
                Toast('网络错误，请刷新重试');
            })
        },
        getUrlKey (name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
        },
       
    },
    
}
</script>
