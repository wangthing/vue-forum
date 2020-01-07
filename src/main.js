// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)
import router from './router'
// 引入样式重置
import '../static/css/reset.css'
import '../static/css/iconfont.css'
import 'github-markdown-css';

// 引入Echarts
// import echarts from 'echarts'

/* wjp */
import store from './store/store'

import '../static/font-awesome-4.7.0/css/font-awesome.css'
import axios from 'axios'
axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = '/api'  // api 即上面 vue.config.js 中配置的地址
Vue.prototype.$http = axios
// 配置请求的基准URL地址
// axios.defaults.baseURL = 'http://192.168.0.188'
/* wjp */

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  mounted() {
    
  },
  template: '<App/>'
})
