<template>
    <div class="plandetailbox">
        <div class="head">
            <img src="../../../static/image/plandetail/images/p1_03.png" alt=""><i>产品名称</i>
        </div>
        <div class="banner">
            <div class="txtbox">
                <h1>手机碎屏互助计划</h1>
                <p>最低每年<span>1</span> 元钱保护手机屏1次</p>
            </div>
            <div class="imgbox">
                <img src="../../../static/image/product/images/p_1_03.jpg" alt="">
            </div>
        </div>
        <div class="cont1">
            <p>每年有大量的手机消费者使用不当屏幕摔碎所困扰,更换屏幕成本高，动则500元以上，快来参与碎屏互助，可以帮助他人，保障自己的手机。</p>
        </div>
        <div class="cont2">
            <h1>互助规则</h1>
            <p>每年有大量的手机消费者使用不当屏幕摔碎所困扰,更换屏幕成本高，动则500元以上，快来参与碎屏互助，可以帮助他人，保障自己的手机。</p>
        </div>
        <div class="cont3">
            <div class="cont3_top">
                <span>1</span>机型及互助金
            </div>
            <div class="cont3_bottom">
                <ul>
                    <li>
                        <span>机型档位</span>
                        <span>碎屏救助金</span>
                    </li>
                     <li>
                        <span>2000元以下</span>
                        <span>300</span>
                    </li>
                     <li>
                        <span>4000元以下</span>
                        <span>500</span>
                    </li>
                     <li>
                        <span>4000元以上</span>
                        <span>500</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cont3">
            <div class="cont3_top">
                <span>2</span>碎屏互助加入费用
            </div>
            <div class="cont3_bottom">
                <ul>
                    <li>
                        <span>次数</span>
                        <span>加入碎屏互助费用</span>
                    </li>
                     <li>
                        <span>第一次碎屏</span>
                        <span>1</span>
                    </li>
                     <li>
                        <span>第二次碎屏</span>
                        <span>59</span>
                    </li>
                     <li>
                        <span>三次及以上碎屏</span>
                        <span>99</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="joinBox">
            <div class="joinBtn" ><router-link to="/join" class='links'></router-link>立刻加入</div>
            <div class="joinleft"> <span>1</span>元</div>
        </div>
    </div>
</template>
<script>
require('./plandetail.less');
export default {
    name:'plandetail'
}
</script>

