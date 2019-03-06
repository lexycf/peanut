// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueClipboard from 'vue-clipboard2';
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
   },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (!window.initUrl) {
    window.initUrl = location.href.split('#')[0]
  }
  next()
})
