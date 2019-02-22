<template>
    <div class="orderbox">
        <div class="head">
        <p>*为保护会员隐私，公示后将隐藏个人信息!</p>
    </div>
    <div class="conts" v-for="item in recordList" :key="item.idx">
        <router-link to="/orderdetail" class='links'></router-link>
        <div class="cont1">
            <p>{{item.applytime}}</p>
        </div>
        <div class="cont2">
            <div class="cont2_left"><img :src="item.omuserphotog" alt=""></div>
            <div class="cont2_right">
                <p>
                    互助会员：{{item.username}}<br>
                    互助计划：{{item.product}}<br>
                    所获互助金：{{item.fund}}元
                </p>
            </div>
        </div>
        <div class="cont3">
            <div class="cont3_top">
                <span>事件情况</span>
                <i>详情&nbsp;</i>
            </div>
            <div class="cont3_bottom">
                <p>{{item.applycomment}}</p>
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
                if(result.status==200){
                    this.recordList=result.data.orders;
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
       
    },
    
}
</script>
