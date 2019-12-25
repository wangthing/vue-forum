import Vue from 'vue'
import Router from 'vue-router'
import bar from '@/components/bar'
import pie from '@/components/pie'
import left from '@/components/left'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bar',
      component: bar
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    },
    {
      path:'/pie',
      name:"pie",
      component: pie
    },
    {
      path:'/left',
      name:"left",
      component: left
    }
  ]
})
