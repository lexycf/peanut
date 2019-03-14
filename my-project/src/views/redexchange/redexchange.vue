<template>
    <div class="redexchangebox">
        <div class="cont">
            <h1>输入红包兑换码兑换</h1>
            <input type="text" v-model="redCode">
        </div>
        <div class="footer" @click='exchangeFun()'>
            <p>兑换</p>
        </div>
    </div>
</template>
<script>
require('./redexchange.less');
import Cookies from 'js-cookie';
import { Toast } from "mint-ui";
import { useCoupon} from '@/api/order';
export default {
    name:'redexchange',
    data(){
        return {
            redCode:'',
            openid:''
            
        }
    },
    created(){
        this.getopenid();
    },
    methods:{
        getopenid(){
            let openid=Cookies.get('openid');
            if(!openid || openid!=null){
                this.openid = this.getUrlKey('openid');
            }else{
                this.openid=openid;
            }
            console.log(this.openid);
        },
        exchangeFun(){
            if(this.redCode==''){
                Toast('红包兑换码不能为空');
                return false;
            }
            let data={
                couponid:this.redCode,
                openid:this.openid
            }
            
            useCoupon(data).then(res => {
                let result=res.data;
                if(result.status==200){
                    this.$router.push({
                        path: "/exchangesuc"
                    });
                }else{
                    Toast(result.msg);
                }
             
            
            })
        },
        getUrlKey (name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
        },
    }

}
</script>

