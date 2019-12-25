<template>
    <div id="article">
        <div class="article-item" v-for="(item,index) in articles" :key="index">
            <div class="content">
                <div class="top">
                    <div class="author">
                        <div class="avar"><img :src="item.avar" alt=""></div>
                        <div class="author-info">
                            <h5 >{{item.nickname}}</h5>
                            <h5 class="time">{{item.releasetime}}   阅读{{item.visit}}</h5>
                        </div>
                       
                    
                    </div>
                    <div class="follow">
                         <span >关注</span>
                    </div>
                </div>
                <div class="bottom">
                    <p>{{item.description}}</p>
                    <div class="">
                        <span>
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>{{" "+item.thumbup}}
                        </span><span>
                            <i class="fa fa-comments" aria-hidden="true"></i>{{" "+item.comments}}
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"article",
    data () {
        return{
            articles:[
                {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    visit:2452,
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                 {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    visit:2452,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                 {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    visit:2452,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    visit:2452,
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                 {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    visit:2452,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                 {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    visit:2452,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    visit:2452,
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                 {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    visit:2452,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                 {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    visit:2452,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    visit:2452,
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                 {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    visit:2452,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                },
                 {
                    title:'Drive.ai融资5000万吴恩达加入董事会',
                    releasetime:'6月22日 12:01',
                    nickname:'Closer',
                    thumbup:532,
                    comments:124,
                    visit:2452,
                    avar:'../../static/img/widget-widget-photo.png',
                    description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,
                    作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……`
                }
            ]
        }
    },
    mounted () {

    },
    methods: {
        
    },

}
</script>

<style scoped>
    .content{
         padding: 20px 20px;
         background-color: white;
         margin-top: 12px;
    }
/* 头部文章信息 */
    .article_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
       
    }
    .top{
        display: flex;
        width: 100%;
        margin-bottom: 6px;
        justify-content: space-between;
        align-items: center;
    }
    .author{
        max-width: 340px;
        display: flex;
    }
    .author-info{
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        flex-flow: column;
        flex-wrap: wrap;
    }
    
    .author-info h5.time{
        color: #909090;
        font-size: 12px;
    }
    .avar{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 12px;
    }
    .follow span{
        display: inline-block;
        width: 50px;
        height: 25px;
        background-color: white;
        border: 1px solid #e64620;
        line-height: 25px;
        text-align: center;
        font-size: 13px;
        color: #e64620;
        transition: .3s;
        

    }
    .follow span:hover{
        background-color: #e64620;
        color: white;
        border: 1px solid rgb(175, 154, 154);
        cursor: pointer;
    }



    .bottom{
        text-align: left;
        margin: 12px 0;
          font-weight: bold;
    }
    .bottom>div{
        display: flex;
        justify-content: flex-start;
        margin: 6px 0;
    }
    .bottom>div>span{
        padding: 4px 12px;
        font-size: 12px;
        cursor: pointer;
        background-color: white;
        color: gray;
        
        border: 1px solid rgb(235, 235, 235);
       
    }
    .bottom>div>span:last-child{
       
        border-left: none;
    }
    .bottom>div>span:hover{
        background-color: rgb(225, 225, 225)
    }
    .bottom p:hover{
        text-decoration: underline;
        color: black;
        cursor: pointer;
      
    }
</style>