<template>
    <div class="exchangesucbox">
            <div class="contbox">
                <img src="../../../static/image/paysuccess/dui.png" alt="">
                <p>兑换成功，请去“我的”查看余额</p>
            </div>
        <div class="contbox1"><router-link to="/mypeanut" class='links'>去查看</router-link></div>
    </div>
</template>
<script>
require('./exchangesuc.less');
export default {
    name:'exchangesuc'
}
</script>

