import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wx from 'weixin-js-sdk';
import { initwx } from "./utils"
Vue.prototype.$wx = wx;

initwx(wx)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
