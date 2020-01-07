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
                       
                        <p>  <a :href="'#/questionDetail?id='+item.id" target="_blank"  :data-id="item.id"> {{item.title.length>3?item.title:"箭头跟随鼠标移动动画的原理"}}</a>
                       
                        </p>
                        <h1 class="author"><img :src="item.avar?item.avar:'/static/img/widget-photo.png'" alt=""> <span>{{item.nickname}}</span> &nbsp;&nbsp;&nbsp; <span>{{item.updatetime&&(item.updatetime[0]+"年"+item.updatetime[1]+"月"+item.updatetime[2]+"日")}}</span></h1>
                    </div>
                </div>
                <a class="check-more">
                    查看更多
                </a>
            </div>

            <!-- 优秀作者 -->
            <!-- <div class="hot-authors">
                <div class="title"> <h3>热门回答 </h3></div>
                <div class="hot-item">
                    <div class="item" v-for="(item,index) in hotArticles" :key="index">
                        <p>{{item.title.length>3?item.title:"箭头跟随鼠标移动动画的原理"}}</p>
                        <h1 class="author"><img :src="item.avar?item.avar:'/static/img/widget-photo.png'" alt=""> <span>{{item.nickname}}</span> &nbsp;&nbsp;&nbsp; <span>{{item.updatetime&&(item.updatetime[0]+"年"+item.updatetime[1]+"月"+item.updatetime[2]+"日")}}</span></h1>
                    </div>
                </div>
                <a class="check-more">
                    查看更多
                </a>
            </div> -->
              

        </div>
        <div >
            
        </div>
    </div>
</template>

<script>
import Catalog from './catalog'
export default {
    name:'right',
    data () {
        return {
            activity:[
                {image:'../../static/img/widget-activity01.png',title:'网易云'},
                {image:'../../static/img/widget-acti.png',title:'网易云'},
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
        this.getHot()
    },
    methods: {
        getHot () {
            this.$http({
                method:"get",
                url:"http://192.168.43.41:9004/problem/hot",
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then((res) => {
                console.log(res);
                if(res.data.code == 20000){
                    this.hotArticles = res.data.data
                }else{

                }
            }).catch((err) => {
                
            })
        }
    },
    components:{
        Catalog
    }

}
</script>

<style scoped>
    /* 右侧图片广告 */
    #right{
        max-width: 400px;
        margin-left: 12px;
    }
    #right a {
        color: black;
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
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
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
        display: inline-block;
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