<template>
    <div id="accident">
        <!-- <div class="zm">
            正面
            <input type="file" name="image"  id='zm' @change='getFile()'>
            <img src="" alt="" id='img1'>
        </div>
        <div class="fm">
            反面
            <input type="file" name="image" id='fm' @change='change_input(2)'>
            <img src="" alt="" id='img2'>
        </div> -->

        <input type="file" @change="getFile(1)">
        <img :src="src1" alt="" id='img1'>
        <input type="file" @change="getFile(2)">
        <img :src="src2" alt="" id='img2'>
        
    </div>
</template>

<script>
      
    
    export default {
      name: 'accident',
      // 定义数据
      data () {
        return {
            src1:'',
            src2:'',
            imgNum:4,    //上传的照片数量，可根据实际情况自定义        
        }
       },//定义事件
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
                    if(type==1){
                        _this.src1=this.result;
                    }else if(type==2){
                        _this.src2=this.result;
                    }
                    
                    
                }
            },
        
          
       },
      //页面加载后执行
      mounted(){
        
      },
    }
    </script>