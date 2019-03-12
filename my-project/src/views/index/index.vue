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
                    <p>已为{{getOrderNum}}个用户划拨互助金</p>
                    <h1>{{getOrderNum}}</h1>
                </div>
            </div>
            <div class="tat">
                <div class="tat_left"><img src="../../../static/image/index/images/icon3.png" alt=""></div>
                <div class="tat_right">
                    <p>已拥有会员</p>
                    <h1>{{hadMemNum}}</h1>
                </div>
            </div>
            
        </div>
        <div class="cont2">
            <div class="tit">互助计划</div>
            <div class="bt">
                <router-link :to="{path:'/product', query:{openid:openid}}" class='links'></router-link>
                <div class="imgbox"><img src="../../../static/image/index/images/img3_03.png" alt=""></div>
                <div class="txt">
                    <h1>手机碎屏互助计划</h1>
                    买手机时加入，手机碎屏时获助，省去高额换屏维修费的苦恼</div>
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
import Cookies from 'js-cookie'
import { getMemberNum,getPaidOrderNum} from '@/api/index';
export default {
    name:'index',
    created(){
        this.getOpenid();
        this.getMemberNumFun();
        this.getPaidOrderNumFun();
        
    },
    data(){
        return {
            hadMemNum:0,
            getOrderNum:0,
            openid:''
        }
    },
    methods:{
         getMemberNumFun(){
            let data={
                    openid:this.openid
                }
            getMemberNum(data).then(res => {
                let result=res.data;
                if(result.status==200){
                    this.hadMemNum=result.data.members;
                }else{
                    Toast(result.msg);
                }
             
            
            })
        },
        getPaidOrderNumFun(){
            let data={
                    openid:this.openid
                }
            getPaidOrderNum(data).then(res => {
                let result=res.data;
                if(result.status==200){
                    this.getOrderNum=result.data.orders;
                }else{
                    Toast(result.msg);
                }
             
            
            })
        },
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
    },
}
</script>

