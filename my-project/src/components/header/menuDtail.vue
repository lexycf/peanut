<template>
    <div class='menuDetailBox'>
        <div class='menuDetail'>
            <ul>
                <li><router-link to="/appInstall"  class='alink'>下载APP</router-link></li>
                <li><router-link to="/product"  class='alink'>一键囤币</router-link></li>
                <li><router-link to="/aboutUs" class='alink'>关于我们</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
require('./menuDtail.less');
export default {
    name:'menuDetail'
}
</script>

