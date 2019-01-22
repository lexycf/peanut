<template>
    <div class='upload'>
        <div class="tit">请拍照上传资料：</div>
        <div class="loadBox">
            <div class="t">1&nbsp;手机照片</div>
            <div class="up">
                <div class="upl">
                    <span></span><p>手机正面照片</p>
                    <input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile($event)" >
                    <img src="" alt="" id='phone1' class='imgs'>
                </div>
                <div class="upl">
                    <span></span><p>手机背面照片</p><input  ref="files" type="file" class='inp'>
                    <img src="" alt="" id='phone2' class='imgs'>
                </div>
            </div>
        </div>
        <div class="clears"></div>
        <div class="loadBox">
            <div class="t">1&nbsp;购机发票</div>
            <div class="up">
                <div class="upl"><span></span><p>手机正面照片</p><input  ref="files" type="file" class='inp'></div>
                <div class="upl"><span></span><p>手机背面照片</p><input ref="files"  type="file" class='inp'></div>
            </div>
        </div>
        <div class="clears"></div>
        <div class="loadBox">
            <div class="t">1&nbsp;其他证明材料</div>
            <div class="up">
                <div class="upl"><span></span><p>照片1</p><input  ref="files" type="file" class='inp'></div>
                <div class="upl"><div class="jia">＋</div><input  ref="files" type="file" class='inp'></div>
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
        }
    },
    methods:{
         uploadFun(){
            
        },
       
    },
}
</script>

