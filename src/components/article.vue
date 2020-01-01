<template>
    <div id="article">
        <div class="article-item" v-for="(item,index) in articles" :key="index">
            <div class="content">
               
                <div class="top">
                    <div class="author">
                        <!-- <div class="avar"><img :src="item.avar" alt=""></div> -->
                        <div class="author-info">
                            <h5 >{{item.nickname?item.nickname:"林_小猫"}}<span class="time">{{item.createtime}}   阅读{{item.visit}}</span></h5>
                        </div>
                       
                    
                    </div>
                    <div class="follow">
                         <a :href="'#/detail?id='+item.id" target="_blank">详情</a> 
                    </div>
                </div>
                <div class="bottom">
                    <a :href="'#/detail?id='+item.id" target="_blank"  :data-id="item.id">{{item.title}}</a>
                    <div class="">
                        <span>
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>{{" "+item.thumbup}}
                        </span><span>
                            <i class="fa fa-comments" aria-hidden="true"></i>{{" "+item.comment}}
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
            articles:[]
            // articles:[
            //     {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         visit:2452,
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //      {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         visit:2452,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //      {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         visit:2452,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //     {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         visit:2452,
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //      {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         visit:2452,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //      {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         visit:2452,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //     {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         visit:2452,
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //      {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         visit:2452,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //      {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         visit:2452,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //     {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         visit:2452,
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //      {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         visit:2452,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     },
            //      {
            //         title:'Drive.ai融资5000万吴恩达加入董事会',
            //         releasetime:'6月22日 12:01',
            //         nickname:'Closer',
            //         id:25,
            //         thumbup:532,
            //         comments:124,
            //         visit:2452,
            //         avar:'../../static/img/widget-widget-photo.png',
            //         description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
            //     }
            // ]
        }
    },
    mounted () {
       
        this.getAllArticles()
    },
    methods: {

        getAllArticles () {
            this.$http({
                method:"GET",
                url:"http://192.168.0.188:9001/article/search/1/10"
            })
            .then((res) => {
                console.log(res.data.data.rows);
                this.articles = res.data.data.rows
                console.log(this.articles);
            }).catch((err) => {
                console.log(err);
            })
        }
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
    
    .author-info span.time{
        color: #909090;
        margin-left: 20px;
        font-size: 12px;
    }
    .avar{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 12px;
    }
    .follow a{
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
    .follow a:hover{
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
    .bottom a{
        color: rgb(77, 67, 67);
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
    .bottom a:hover{
        text-decoration: underline;
        color: black;
        cursor: pointer; 
    }
</style>