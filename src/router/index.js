import Vue from 'vue'
import Router from 'vue-router'
import bar from '@/components/bar'
import pie from '@/components/pie'
import left from '@/components/left'
import detail from '@/components/detail'
import newPost from '@/components/newPost'
import main from '@/components/main'
import usercenter from '@/components/personalCenter/usercenter'


// 个人中心
import myactive from '@/components/personalCenter/myactive'
import myanswer from '@/components/personalCenter/myanswer'
import myattention from '@/components/personalCenter/myattention'
import mycollect from '@/components/personalCenter/mycollect'
import myquestion from '@/components/personalCenter/myquestion'
import mysetting from '@/components/personalCenter/mysetting'
// 吐槽
import complain from '@/components/complain'
Vue.use(Router)
// 问答
import question from '@/components/question/Ask_TopBar'
// 所有的标签
import allTags from '@/components/allTags'

// 活动
import allActivity from '@/components/activity/activityDisplay'
// 问题详情
import questionDetail from '@/components/question/questionDetail'
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
      path:'/test',
      name:"test",
      component: left
    },
    {
      path:'/questionDetail',
      name:"questionDetail",
      component: questionDetail
    },
    {
      path:'/activity',
      name:"allActivity",
      component: allActivity
    },
    {
      path:'/newPost',
      name:"newPost",
      component: newPost
    },
    
    {
      path:'/complain',
      name:"complain",
      component: complain
    },
    {
      path:'/question',
      name:"question",
      component: question
    },
    {
      path:'/allTags',
      name:"allTags",
      component: allTags
    },
    {
      path:'/usercenter/:id/',
      name:"usercenter",
      component: usercenter,
      children: [
       {
        path: 'myactive',
        name:'myactive',
        component:myactive
       },
       {
        path: 'myanswer',
        name:'myanswer',
        component:myanswer
       },
       {
        path: 'myattention',
        name:'myattention',
        component:myattention
       },
       {
        path: 'mycollect',
        name:'mycollect',
        component:mycollect
       
       },
       {
        path: 'myquestion',
        name:'myquestion',
        component:myquestion
       }
       ,
       {
        path: 'mysetting',
        name:'mysetting',
        component:mysetting
       }
      ]
    }
  ]
})
