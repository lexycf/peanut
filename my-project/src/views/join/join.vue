<template>
    <div class="joinbox">
        <div class="cont1">
            <div class="inputbox">
                <span><img src="../../../static/image/join/name.png" alt=""></span>
                <input type="text" placeholder="请输入姓名">
            </div>
            <div class="inputbox">
                <span><img src="../../../static/image/join/idcard.png" alt=""></span>
                <input type="text" placeholder="请输入身份证">
            </div>
            <div class="inputbox">
                <span><img src="../../../static/image/join/phone.png" alt=""></span>
                <input type="text" placeholder="请输入手机型号">
            </div>
            <div class="txtbox">
                <p>需要是半年内购买的手机，否则屏碎将无法获得互助金</p>
            </div>
        </div>
        <div class="cont2">
            <div class="bt">
                <img src="../../../static/image/join/chong.png" alt=""><span>充&nbsp;值</span><i>建议充值5元以上，以免余额不足失去受助资格</i>
            </div>
            <div class="cont2box">
                <div class="smallbox">
                    <h1><i>1</i>元</h1>
                    <p>可用1个月</p>
                </div>
                <div class="smallbox">
                    <span><img src="../../../static/image/recharge/dui.png" alt=""></span>
                    <h1><i>6</i>元</h1>
                    <p>可用6个月</p>
                </div>
                <div class="smallbox">
                    <h1><i>12</i>元</h1>
                    <p>可用12个月</p>
                </div>
            </div>
        </div>
        <div class="cont3">
            <div class="cont3_btn">
                <p>确认加入互助</p>
            </div>
            <div class="footer">
                <div class="ft_box">
                    <span class="hadsel"></span>
                </div>
                <div class="ft_txt">
                    我已阅读<i>《手机无故障要求》《会员公约》</i>及<i>《计划条款》</i>，并承诺加入时手机无任何故障。
                </div>
            </div>
        </div>
    </div>
</template>
<script>
require('./join.less');
export default {
    name:'join'
}
</script>

