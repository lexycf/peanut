<template>
    <div class="exchangesucbox">
            <div class="contbox">
                <img src="../../../static/image/paysuccess/dui.png" alt="">
                <p>兑换成功，请去“我的”查看余额</p>
            </div>
        <div class="contbox1"><router-link :to="{path:'/mypeanut', query:{openid:openid}}" class='links'>去查看</router-link></div>
    </div>
</template>
<script>
require('./exchangesuc.less');
export default {
    name:'exchangesuc',
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
            if(!openid){
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

