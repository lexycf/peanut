<template>
    <div class="headerBox">
        <div class="rightBox"><span class="tunbiBtn"><router-link to="/product" class='links'>一键囤币</router-link></span><i  @click='showMenu=!showMenu' ><img src="../../../static/img/menuIcon.png" alt=""></i></div>
        <div class="logo"><img src="../../../static/img/logo2.png" alt=""></div>
        <menuDtail v-if='showMenu'></menuDtail>
    </div>
</template>
<script>
require('./header.less');
import menuDtail from "./menuDtail";
export default {
    name:'headerBox',
    components:{
        menuDtail
    },
    data(){
        return {
            showMenu:false,

        }
    },
    methods:{
        
    }
}
</script>

