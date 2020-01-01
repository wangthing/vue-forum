<template>
    <div id="questionDetail">
        <div class="tap_nav">
            <div>
                <span class="tap_item_active">首页</span>

                <span class="tap_item">Php</span>
                <span class="tap_item">Javascript</span>
                <span class="tap_item">Python</span>

                <div class="labelControl"><a href="#/allTags">标签管理</a></div>
            </div>
        </div>
        <div class="top">

            <div class="top-title">
                <h2>{{question.title}}</h2>
                <p class="info">
                    <span class="tags" v-for="(label,index) in question.labels" :key="index">{{label.labelname}}</span>
                    <span class="author">{{question.nickname}}</span>
                    <span class="time">2小时前提问 · 30分钟前更新</span>
                </p>
            </div>
            <div class="share">
                <h4>分享到：</h4>
                <ul class="share-go">
                    <li><img src="/static/img/widget-weibo.png" alt=""></li>
                    <li><img src="/static/img/widget-weixin.png" alt=""></li>
                    <li><img src="/static/img/widget-weibo.png" alt=""></li>
                    <li><img src="/static/img/widget-weixin.png" alt=""></li>
                </ul>
            </div>

        </div>
        <div class="main">
            <div class="main-left">
                <div id="content">
                    <div  class="markdown-body" ref="md" v-html="htmlMd"></div>
                </div>
                <div class="comment">
                    <h4>一共{{allComments.length}}条评论</h4>
                    <div class="write-comment">
                        <img src="/static/img/widget-photo.png" class="avar" alt="头像">
                        <div class="write">
                            <input type="text"  placeholder="你的评论..." v-model="yourComment">
                            <button class="submit" @click.prevent="releaseComment(yourComment,question.id)" >提交</button>
                        </div>
                    </div>
                    <div class="show-comments" v-for="(item,index) in allComments" :key="index">
                        <div class="comments-avar">
                            <img :src="item.avar?item.avar:'/static/img/widget-photo.png'" alt="">
                        </div>
                        <div class="comments-content">
                            <h1>{{item.nickname}} <span> &nbsp; 发布</span> </h1>
                            <p>{{item.content}}</p>
                            <span>发布于：{{item.createtime[0]+"年"+item.createtime[1]+"月"+item.createtime[2]+"日"+item.createtime[3]+"时"+item.createtime[4]+"分"}}</span>
                            <div class="child-comments" v-for="(child ,index) in getChild(item.id)" :key="index">
                                <h1>{{child.nickname}} <span> &nbsp; 发布</span> </h1>
                                <p>{{child.content}}</p>
                                <span>{{getTime(child.publishtime)}}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Right class="main-right"></Right>
        </div>
    </div>
</template>

<script>
import utils from '../../assets/utils.js'
import Right from '../right'
export default {
    name:"questionDetail",
    data () {
        return {
            htmlMd:'',
            question:'',
            allComments:[],
            yourComment:'',
            page:1,
            pagesize:4
        }
    },
    mounted () {
        this.$http({
            method:'get',
            url:"http://192.168.0.188:9004/problem/"+this.$route.query.id,
            headers:{
                 'Content-Type':"application/json;charset=utf-8"
            }
        })
        .then((res) => {
            this.question = res.data.data
            console.log(this.question);
            this.htmlMd = res.data.data.content
        }).catch((err) => {
            
        })

        this.getAllSplits()
    },
    methods: {
        getAllSplits () {
            

            this.$http({
                method:"GET",
                url:`http://192.168.0.188:9004/reply/${this.$route.query.id}`,
                headers:{
                    "Content-Type":"application/json;charset=utf-8"
                }
            })
            .then((res) => {
                this.allComments = res.data.data
            }).catch((err) => {
                
            })
        },
        getTime (time) {
            var date = new Date(time)
           return utils.publicMethod.getTimestamp(date,'yyyy.MM.dd')
        },
        getChild(id) {

        },
        releaseComment (content,id) {
            console.log(content,id);
            if(content == "") {
                
                return;
            }
            this.$http({
                method:"POST",
                url:"http://192.168.0.188:9004/reply",
                headers:{
                    'Content-Type':"application/json;charset=utf-8",
                    'Authorization':'Bearer '+this.$store.state.token
                },
                data:{
                    "content":content,
                    "problemid":id
                }
                
            })
            .then((res) => {
                console.log(res)
                if(res.data.code == 20000){
                    this.yourComment = ""
                    this.getAllSplits();
                }
            }).catch((err) => {
                
            })
        }
    },
    components: {
        Right
    },
    computed: {
        
    },

}
</script>

<style scoped>

/* 顶部标签 */
    .tap_nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #000;
    font-size: 16px;
    padding: 0 150px;
    /* width: 65vw; */
    margin:12px auto;
    }
    .tap_nav>div{
    margin: 0 auto;
    position: relative;
    width: 75%;
    max-width: 1060px;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    }
    .tap_item {
    padding-left: 35px;
    padding-right: 35px;
    line-height: 36px;
    height: 100%;
    color: #fff;

    cursor: pointer;
    }
    .tap_item_active {
    height: 100%;
    padding-left: 35px;
    padding-right: 35px;
    line-height: 36px;
    color: #fff;
    background-color: #e64620;
    cursor: pointer;
    }
    .labelControl{
    margin: 4px;
    cursor: pointer;
    float: right;
    position: absolute;
    right: 20px;

    }
    .labelControl a{
    display: inline-block;
    height: 100%;
    color: white;
    vertical-align: middle;
    }
    .labelControl a::after{
    display: inline-block;
        content: "";
        height: 100%;
        vertical-align: middle;
    }




    .top{
        min-height: 80px;
        background-color: white;
        padding: 16px 18px;
        width: 75%;
        max-width: 1060px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between; 
    }
    .top-title{
        text-align: left;
    }
    .top-title p{
        margin-top: 8px;
        font-size: 13px;
    }
    .tags{
            padding: 1px 7px;
    background: #e1ecf4;
    color: #0077cc;
    margin-right: 6px;
    }
    .time{
        font-family: "微软雅黑";
        color: #333;
    }
    .share-go li{
        display: inline-block;
    }
    .share-go img{
        width: 20px;
        height: 20px;
    }

    .main{
        display: flex;
        justify-content: space-between;
        width: 75%;
        max-width: 1060px;
        margin: 30px auto;
    }
    .main-left{
        width: 70%;
        min-width: 750px;
        padding: 16px 18px;
        background-color: white;
        height: fit-content;
        
    }
    .main-right {
        width: 27%;
        max-width: 300px;
    }
    .markdown-body{
        text-align: left;
    }

    .comment{
        margin: 12px 0;
        text-align: left;
       
    }
    .comment h4{
         border-bottom: 1px solid rgb(225, 225, 225);
         padding-bottom: 6px;
         font-size: 16px;
    }
    .write-comment{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        margin: 8px 0;
    }
    .write-comment .avar{
        border-radius: 50%;
        margin: 0 12px;
        width: 30px;
    }
    .write{
        flex:1;
        position: relative;
    }
    .write input{
        padding: 4px 12px;
        display: inline-block;
        width: 100%;
        font-size: 18px;
        border-radius: 4px;
        border: 1px solid rgb(235, 235, 235);
    }
    .write input:focus{
        border: 1px solid #0077cc;
    }
    .write button{
        position: absolute;
        right: 0;
        top:0;
        bottom: 0;
        width: 60px;
        color: white;
        margin-left: auto;
        padding: .5rem 1.3rem;
        font-size: 1.25rem;
        color: #fff;
        background-color: #027fff;
        border: none;
        border-radius: 2px;
        text-align: center;
        font-size: 14px;
        padding: 0 8px;
        outline: none;
    }



    /* 第一集pinglun */
    .show-comments{
        position: relative;
        
    }
    .comments-content{
        padding: 6px 40px;
    }
    .comments-avar {
        width: 30px;
        top: 8px;
        position: absolute;
    }
    .comments-content span{
        color: rgb(194, 130, 130);
        font-size: 14px;
    }
    .comments-content p{
        margin-top: .25rem;
        font-size: .83rem;
        line-height: 1.833rem;
        word-wrap: break-word;
        white-space: pre-wrap;
        word-break: break-all;
        color: #505050;
    }
    .comments-content h1{
        font-size: 12px;
        color: rgb(177, 140, 140);
    }
   
</style>