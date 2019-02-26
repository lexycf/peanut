<template>
    <div class='upload'>
        <div class="tit">请拍照上传资料：</div>
        <div class="loadBox">
            <div class="t">1&nbsp;手机照片</div>
            <div class="up">
                <div class="upl">
                    <span></span><p>手机正面照片</p>
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile(1)" >
                    <img :src="phone1" alt="" id='phone1' class='imgs'>
                </div>
                <div class="upl">
                    <span></span><p>手机背面照片</p>
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile(2)" >
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
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile(3)" >
                    <img :src="phone3" alt="" id='phone3' class='imgs'>
                </div>
                <div class="upl">
                    <span></span><p>发票背面照片</p>
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile(4)" >
                    <img :src="phone4" alt="" id='phone4' class='imgs'>
                </div>
            </div>
        </div>
        <div class="clears"></div>
        <div class="loadBox">
            <div class="t">1&nbsp;其他证明材料</div>
            <div class="up">
                <div class="imgsBox">
                    <div class="img-ul" v-for="item in imgsarr" :key="item.idx"><img :src="item" alt=""></div>
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
function getFileUrl(obj) { 
    let url; 
    url = window.URL.createObjectURL(obj.files.item(0)); 
    return url; 
}
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
         getFile(type) {
                let event = event || window.event;
                let reader = new FileReader();
                let files = event.target.files[0];
                reader.readAsDataURL(files);//发起异步请求
                let _this=this;
                reader.onload = function(){
                    //读取完成后，将结果赋值给img的src
                    console.log(this.result);
                    _this['phone'+type]=this.result;
                   
                    
                }
            },
            getFile2() {
                if(this.imgsarr.length>4){
                    
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
                   
                    
                }
            },
       
    },
}
</script>

