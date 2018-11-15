<template>
    <div class="joinbox">
        <div class="cont1">
            <div class="inputbox">
                <span><img src="../../../static/image/join/name.png" alt=""></span>
                <input type="text" placeholder="请输入姓名" v-model="name">
            </div>
            <div class="inputbox">
                <span><img src="../../../static/image/join/idcard.png" alt=""></span>
                <input type="tel" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="inputbox">
                <span><img src="../../../static/image/join/phone.png" alt=""></span>
                <input type="text" placeholder="请输入手机型号" v-model="phoneType">
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
                <div class="smallbox" :class='choose1' @click='chooseFun(1)'>
                    <span v-if='choose1=="active"'></span>
                    <h1><i>1</i>元</h1>
                    <p>可用1个月</p>
                </div>
                <div class="smallbox" :class='choose2' @click='chooseFun(2)'>
                    <span v-if='choose2=="active"'></span>
                    <h1><i>6</i>元</h1>
                    <p>可用6个月</p>
                </div>
                <div class="smallbox" :class='choose3' @click='chooseFun(3)'>
                    <span v-if='choose3=="active"'></span>
                    <h1><i>12</i>元</h1>
                    <p>可用12个月</p>
                </div>
            </div>
        </div>
        <div class="cont3">
            <div class="cont3_btn" @click='checkInfoFun'>
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
import { Toast } from "mint-ui";
import { joinAjax} from '@/api/order';
export default {
    name:'join',
    data(){
        return {
            choose1:'',
            choose2:'',
            choose3:'',
            needPay:0,
            name:'',
            phone:'',
            phoneType:''
        }
    },
     created(){
        this.defaultFun();
    },
    methods:{
        defaultFun(){
            this.choose2='active';
            this.needPay=6;
        },
        chooseFun(type){
            if(type==1){
                this.choose1='active';
                this.choose2='';
                this.choose3='';
                this.needPay=1;
            }else if(type==2){
                this.choose1='';
                this.choose2='active';
                this.choose3='';
                this.needPay=6;
            }else{
                this.choose1='';
                this.choose2='';
                this.choose3='active';
                this.needPay=12;
            }

        },
        checkInfoFun(){
            let reg = /^1[3-9][0-9]\d{8}$/;
            if(this.name==''){
                Toast('请输入姓名');
                return false;
            }else if(this.phone==''){
                Toast('请输入手机号');
                return false;
            }else if(!reg.test(this.phone)){
                Toast('手机号码格式不正确');
                return false;
            }else{
                this.joinAjax();
            }
        },
        joinAjaxFun(){
            let data={
                username:this.name,
                tele:this.phone,
                phonetype:this.phoneType
            }
             joinAjax(data).then(res => {
                let result=res.data;
                if(result.status==0){
                    
                }else{
                    Toast(result.message);
                }
             
            
            }).catch(err => {
                Toast('网络错误，请刷新重试');
            })
        }
    }
}
</script>

