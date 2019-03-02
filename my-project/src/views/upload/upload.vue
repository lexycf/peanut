<template>
    <div class='upload'>
        <div class="tit">请拍照上传资料：</div>
        <div class="loadBox">
            <div class="t">1&nbsp;手机照片</div>
            <div class="up">
                <div class="upl">
                    <span></span><p>手机正面照片</p>
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile(1,'手机正面')" >
                    <img :src="phone1" alt="" id='phone1' class='imgs'>
                </div>
                <div class="upl">
                    <span></span><p>手机背面照片</p>
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile(2,'手机反面')" >
                    <img :src="phone2" alt="" id='phone2' class='imgs'>
                </div>
            </div>
        </div>
        <div class="clears"></div>
        <div class="loadBox">
            <div class="t">1&nbsp;购机发票</div>
            <div class="up">
                <div class="upl">
                    <span></span><p>发票正面照片</p>
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile(3,'发票正面')" >
                    <img :src="phone3" alt="" id='phone3' class='imgs'>
                </div>
                <div class="upl">
                    <span></span><p>发票背面照片</p>
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile(4,'发票反面')" >
                    <img :src="phone4" alt="" id='phone4' class='imgs'>
                </div>
            </div>
        </div>
        <div class="clears"></div>
        <div class="loadBox">
            <div class="t">1&nbsp;其他证明材料</div>
            <div class="up">
                <div class="imgsBox">
                    <div class="img-ul" v-for="(item,key) in imgsarr" :key="item.index"><img :src="item" alt="" @click='delPicFun(key)'></div>
                </div>
                <div class="upl"><div class="jia">＋</div><input  ref="files" type="file" class='inp' @change="getFile2()"></div>
            </div>
        </div>
        <div class="clears"></div>
        <div class="upBtn">上传资料</div>
    </div>
</template>
<script>
require('./upload.less');
import { Toast } from "mint-ui";
import { uploadPic} from '@/api/order';
export default {
    name:'upload',
    data () {
        return {
            imgNum:4,    //上传的照片数量，可根据实际情况自定义  
            phone1:'' ,
            phone2:'',
            phone3:'',
            phone4:'',
            imgsarr:[],
            i:0   
        }
    },
    methods:{
         getFile(type,picName) {
            let event = event || window.event;
            let reader = new FileReader();
            let files = event.target.files[0];
            reader.readAsDataURL(files);//发起异步请求
            let _this=this;
            reader.onload = function(){
                //读取完成后，将结果赋值给img的src
                console.log(this.result);
                _this['phone'+type]=this.result;
                let imgsrc=this.result;
                if(_this['phone'+type]!=''){
                    _this.uploadPicFun(imgsrc,picName);
                }
                
                
            }
        },
        getFile2() {
            if(this.imgsarr.length>4){
                Toast('最多可上传4张图片');
            }
            let event = event || window.event;
            let reader = new FileReader();
            let files = event.target.files[0];
            reader.readAsDataURL(files);//发起异步请求
            let _this=this;
            reader.onload = function(){
                //读取完成后，将结果赋值给img的src
                //console.log(this.result);
                let imgsarr=[];
                imgsarr=_this.imgsarr;
                console.log(imgsarr)
                imgsarr.push(this.result);
                _this.imgsarr=imgsarr;
                console.log(_this.imgsarr);
                _this.uploadPicFun(this.result,'其他材料');
                
                
            }
        },
        uploadPicFun(file,picName){
            let data = {
                    file:file,
                    openid:this.openid,
                    picName:picName
                }
                uploadPic(data).then(res => {
                let result=res.data;
                if(result.status==200){
                    this.recordList=result.data.orders;
                }else{
                    Toast(result.msg);
                }
            
            }).catch(err => {
                Toast('网络错误，请刷新重试');
            })
        },
        delPicFun(idx){
            console.log(idx);
            this.imgsarr.splice(idx,1);
        }
       
    },
}
</script>

