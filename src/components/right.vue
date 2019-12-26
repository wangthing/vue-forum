<template>
    <div id="right">
        <div class="right-content">
            <div class="activity">
                <div v-for="(item,index) in activity" :key="index" >
                    <img :src="item.image" :alt="item.title">
                </div>
            </div>

            <!-- 热门文章 -->
            <div class="hot-articles">
                <div class="title"> <h3>热门文章 </h3></div>
                <div class="hot-item">
                    <div class="item" v-for="(item,index) in hotArticles" :key="index">
                        <p>{{item.title}}</p>
                        <h1 class="author"><img :src="item.avar" alt=""> <span>{{item.nickname}}</span> &nbsp&nbsp&nbsp <span>{{item.time}}</span></h1>
                    </div>
                </div>
                <a class="check-more">
                    查看更多
                </a>
            </div>

            <!-- 优秀作者 -->
            <div class="hot-authors">
                <div class="title"> <h3>热门回答 </h3></div>
                <div class="hot-item">
                    <div class="item" v-for="(item,index) in hotArticles" :key="index">
                        <p>{{item.title}}</p>
                        <h1 class="author"><img :src="item.avar" alt=""> <span>{{item.nickname}}</span> &nbsp&nbsp&nbsp <span>{{item.time}}</span></h1>
                    </div>
                </div>
                <a class="check-more">
                    查看更多
                </a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'right',
    data () {
        return {
            activity:[
                {image:'../../static/img/widget-activity01.png',title:'网易云'},
                {image:'../../static/img/widget-activity02.png',title:'网易云'},
            ],
            hotArticles:[
                {
                    title:'关于系统问答你都应该都应该都应该注意些什么吗？',
                    avar:'../../static/img/widget-widget-photo.png',
                    nickname:'Closer',
                    time:'6月22日 12:01'
                },
                {
                    title:'关于系统问答你都应该都应该都应该注意些什么吗？',
                    avar:'../../static/img/widget-widget-photo.png',
                    nickname:'Closer',
                    time:'6月22日 12:01'
                },
                {
                    title:'关于系统问答你都应该都应该都应该注意些什么吗？',
                    avar:'../../static/img/widget-widget-photo.png',
                    nickname:'Closer',
                    time:'6月22日 12:01'
                },
                {
                    title:'关于系统问答你都应该都应该都应该注意些什么吗？',
                    avar:'../../static/img/widget-widget-photo.png',
                    nickname:'Closer',
                    time:'6月22日 12:01'
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
    /* 右侧图片广告 */
    #right{
        width: 25%;
        margin-left: 12px;
    }
    .activity{
        width: 100%;
    }
    .activity>div{
        margin-bottom: 12px;
        width: 100%;
    }


    /* 热门文章 */
    .hot-articles{
        background-color: #fff;
        padding: 12px 0 0 0;
    }
    .hot-authors{
        margin-top: 12px;
        background-color: #fff;
        padding: 12px 0 0 0;
    }
    .title{
        height: 30px;
        color: red;
        font-weight: bold;
        line-height: 30px;
        padding-left: 20px;
        margin: 8px 0;
        text-align: left;
        border-left: 2px solid red;
    }

    .item{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        padding: 14px 10px;
        
    }
    .item+.item{
        border-top: 1px solid rgb(225, 225, 225);
    }
    .item p{
        text-align: left;
        margin: 10px 0;
        font-weight: bold;
    }
    .author{
        display: flex;
        text-align: left;
        font-size: 8px;
        
        justify-content: flex-start;
        align-items: center;
    }
    .author img{
        width: 18px;
        margin: 0 10px 0 0;
    }


    .check-more{
        display: block;
        height: 20px;
        line-height: 20px;
        padding: 5px 0;
        margin-top: 12px;
        border: 1px solid red;
        color: red;
        text-align: center;
    }
    .check-more:hover{
        background-color: red;
        color: white;
        cursor: pointer;
    }
</style>