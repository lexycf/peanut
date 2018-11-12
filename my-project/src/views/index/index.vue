<template>
    <div class="indexBox">
        <div class="banner">
            <div class="txtbox">
               <div class="txtbox1">
                   <img src="../../../static/image/index/images/icon1.png" alt="">花生互助
               </div>
               <h1>花小钱抵御生活突发风险</h1>
               <p>互助不是保险，是会员相互帮助的社群</p>
            </div>
            <div class="imgbox">
                <img src="../../../static/image/index/images/banner.jpg" alt="">
            </div>
        </div>
        <div class="cont1">
            <div class="tat">
                <div class="tat_left"><img src="../../../static/image/index/images/icon2.png" alt=""></div>
                <div class="tat_right">
                    <p>已为XXXXX个用户划拨互助金</p>
                    <h1>520,000.00</h1>
                </div>
            </div>
            <div class="tat">
                <div class="tat_left"><img src="../../../static/image/index/images/icon3.png" alt=""></div>
                <div class="tat_right">
                    <p>已拥有会员</p>
                    <h1>8000,000.00</h1>
                </div>
            </div>
            
        </div>
        <div class="cont2">
            <div class="tit">互助计划</div>
            <div class="bt">
                <div class="imgbox"><img src="../../../static/image/index/images/img3_03.png" alt=""></div>
                <div class="txt">买手机时加入，手机碎屏时获助，省去高额换屏维修费的苦恼</div>
            </div>
        </div>
        <div class="cont3">
            <div class="tit">服务保障</div>
            <div class="cont3_box">
                <div class="cont3_box1">
                    <div class="box_a">
                        <div class="tsBox">
                            <div class="imgaebox"><img src="../../../static/image/index/images/icon4.png" alt=""></div>
                            <div class="box_txt">
                                <h1>平台可靠</h1>
                                <p>互联网一线公司投资运作</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="box_a">
                        <div class="tsBox">
                            <div class="imgaebox"><img src="../../../static/image/index/images/icon5.png" alt=""></div>
                            <div class="box_txt">
                                <h1>事件审核</h1>
                                <p>每一例帮助金都经过严格调查并公示用户</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cont3_box1">
                    <div class="box_a">
                        <div class="tsBox">
                            <div class="imgaebox"><img src="../../../static/image/index/images/icon6.png" alt=""></div>
                            <div class="box_txt">
                                <h1>资金安全</h1>
                                <p>专款专用，资金存管安全放心</p>
                            </div>
                        </div>
                    </div>
                    <div class="box_a">
                        <div class="tsBox">
                            <div class="imgaebox"><img src="../../../static/image/index/images/icon7.png" alt=""></div>
                            <div class="box_txt">
                                <h1>流程透明</h1>
                                <p>互助流程全程公示用户，全员监督</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>花生互助 您的生活互助之选</p>
        </div>
    </div>
</template>
<script>
require('./index.less');
import { Toast } from "mint-ui";
import { getUserInfoByInviteCode} from '@/api/index';
export default {
    name:'index',
    created(){
        this.inviteInfo();
    },
    methods:{
         inviteInfo(){
           Toast('111');
          
            getUserInfoByInviteCode().then(res => {
                let result=res.data;
                if(result.code==0){
                    this.invitePhone=result.data.mobile_phone;
                    this.btcPrice=result.data.btc_cny_price;
                }else{
                    Toast(result.message);
                }
                this.regisStatus=true;
            
            }).catch(err => {
                Toast('网络错误，请刷新重试');
                this.regisStatus=true;
            })
        },
    },
}
</script>

