<template>
    <div class="paysuccessbox">
        <div class="contbox">
            <img src="../../../static/image/paysuccess/dui.png" alt="">
            <p>成功</p>
        </div>
    </div>
</template>
<script>
require('./paysuccess.less');
import Cookies from 'js-cookie';
import { Toast } from "mint-ui";
export default {
    name:'paysuccess',
    created(){
        this.getOpenid();
    },
    data(){
        return {
            openid:''
        }
    },
    methods:{
        getOpenid(){
            let openid=Cookies.get('openid');
            if(!openid || openid!=null){
                this.openid = this.getUrlKey('openid');
            }else{
                this.openid=openid;
            }
            console.log(this.openid);
            Cookies.set('openid', this.openid);
        },
        getUrlKey (name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
        },
    }
}
</script>

