import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/common.css'
import 'styles/reset.css'
import 'styles/border.css'
import './common/iconfont/iconfont.css'
import common from './common/js/common.js'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './vuex/store'
import 'babel-polyfill'


Vue.use(ElementUi)
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
Vue.prototype.common = common;
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
