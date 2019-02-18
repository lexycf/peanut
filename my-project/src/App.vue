<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>
<script src='http://res.wx.qq.com/open/js/jweixin-1.4.0.js'></script>
<script> 
require('../static/commonfile/css/lib.less');
require('./utils/weixinport.js');
//require('../plug/layerBox/layerBox.less');
export default {
  name: 'App'
}
</script>


