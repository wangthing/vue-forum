// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入样式重置
import '../static/css/reset.css'
// 引入Echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
/* wjp */

import '../static/font-awesome-4.7.0/css/font-awesome.css'

/* wjp */

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
