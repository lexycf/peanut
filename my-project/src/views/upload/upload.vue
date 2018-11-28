<template>
    <div class='upload'>
        <div class="tit">请拍照上传资料：</div>
        <div class="loadBox">
            <div class="t">1&nbsp;手机照片</div>
            <div class="up">
                <div class="upl"><span></span><p>手机正面照片</p><input  ref="files" type="file" class='inp'  accept="image/*" multiple="multiple" @change="getFile($event)" ></div>
                <div class="upl"><span></span><p>手机背面照片</p><input  ref="files" type="file" class='inp'></div>
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
export default {
    name:'upload',
    methods:{
         uploadFun(){
          
            console.log()
        },
       
    },
}
</script>

