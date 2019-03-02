<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script> 
require('../static/commonfile/css/lib.less');
require('./utils/weixinport.js');
//require('../plug/layerBox/layerBox.less');
import Cookies from 'js-cookie'
export default {
  name: 'App'
}
</script>


