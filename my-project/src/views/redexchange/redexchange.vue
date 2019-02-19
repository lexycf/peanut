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
       
        this.openid=this.getUrlKey('openid');
    },
    methods:{
        exchangeFun(){
            if(this.redCode==''){
                Toast('红包兑换码不能为空');
                return false;
            }
            let data={
                couponid:this.redCode,
                openid:this.openid
            }
            
             getBalance().then(res => {
                let result=res.data;
                if(result.status==0){
                    
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

