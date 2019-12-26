import Vue from 'vue'
import Router from 'vue-router'
import bar from '@/components/bar'
import pie from '@/components/pie'
import left from '@/components/left'
import detail from '@/components/detail'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name:'detail',
      component:detail
      
    },
    {
      path:'/',
      name:"index",
      component: main
    },
    {
      path:'/left',
      name:"left",
      component: left
    }
  ]
})
