<template>
    <div id="complain">
        
        <div class="container">
            <div class="newComplain">
                <textarea placeholder="来个匿名吐槽，发泄一下你心中的怒火吧！(1000字)" v-model="youSpit" maxlength="1000"></textarea>
                <a class="goComplain" @click.prevent="releaseSpit">发吐槽</a>
             </div>
            <div class="lists">
                    <div class="article-item" v-for="(item,index) in getAllArricles" :data-id="item._id" :key="index">
                        <div class="content">
                        
                            <div class="top">
                                <div class="author">
                                    <div class="avar"><img :src="'/static/img/widget-photo.png'" alt=""></div>
                                    <div class="author-info">
                                        <h5 >{{item.nickname}}<span class="time">{{gettime(item.publishtime)}}   阅读{{Math.floor(Math.random()*2502)}}</span></h5>
                                    </div>
                                
                                
                                </div>
                                <!-- <div class="follow">
                                    <span >详情</span>
                                </div> -->
                            </div>
                            <div class="bottom">
                                <span :href="'#/detail?id='+item._id" target="_blank"  :data-id="item.id">{{item.content}}</span>
                                <div class="">
                                    <span>
                                        <i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{{" "+item.thumbup?item.thumbup:Math.floor(Math.random()*102)}}
                                    </span>
                                    <span @click="showComment(item)" >
                                        <i class="fa fa-comments"  aria-hidden="true"></i> &nbsp;{{" "+ item.comment?item.comment:Math.floor(Math.random()*102)}}
                                    </span>
                                    
                                </div>
                            </div>
                            <!-- 点开评论 -->
                            <div class="comment"  v-if="item.commentInfo.showComment" >
                                <h4>一共{{allComments.length}}条评论</h4>
                                <div class="write-comment">
                                    <img src="/static/img/widget-photo.png" class="avar" alt="头像">
                                    <div class="write">
                                        <input type="text"  placeholder="你的评论..." v-model="item.commentInfo.yourComment">
                                        <button class="submit" @click.prevent="releaseComment(item)" >提交</button>
                                    </div>
                                </div>
                                <div class="show-comments" v-for="(allcoms,index) in item.commentInfo.allComments" :key="index">
                                    <div class="comments-avar">
                                        <img :src="allcoms.avar?allcoms.avar:'/static/img/widget-photo.png'" alt="">
                                    </div>
                                    <div class="comments-content">
                                        <h1>{{allcoms[0].nickname}} <span> &nbsp; 发布</span> </h1>
                                        <p>{{allcoms[0].content}}</p>
                                        <span>发布于：{{allcoms[0].publishtime&&gettime(allcoms[0].publishtime)}}</span>
                                        <!-- <div class="child-comments" v-for="(child ,index) in '2356'" :key="index">
                                            <h1>{{child.nickname}} <span> &nbsp; 发布</span> </h1>
                                            <p>{{child.content}}</p>
                                            <span>{{getTime(child.publishtime)}}</span>
                                        </div> -->
                                    </div>
                                </div>
                                
                            </div>
                            <!--  -->
                        </div>
                        
                    </div>
                    <div class="show-more" v-if="(page<total)">
                        <div @click="showmore">加载更多</div>
                    </div>
            </div>
            
        </div>
        <Right></Right>
    </div>
</template>


<script>
import utils from '../assets/utils.js'
import Right from './right'
export default {
    name:"complain",
    data () {
        return {
            articles:[
                // {
                //     title:'Drive.ai融资5000万吴恩达加入董事会',
                //     releasetime:'6月22日 12:01',
                //     visit:2452,
                //     nickname:'Closer',
                //     id:25,
                //     thumbup:532,
                //     comments:124,
                //     avar:'../../static/img/widget-widget-photo.png',
                //     description:`滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin`
                // },
                
          
            ],
            total:1,
            page:1,
            size:10,
            youSpit:'',
            allComments:[],
            yourComment:'',
        }
    },
    computed: {
            
            getAllArricles () {
               this.articles.forEach( (item) => {
                   this.$set(item,'commentInfo',{
                        showComment :false,
                        yourComment :'',
                        allComments:[]
                    })
                    
                })
                return this.articles;
            }
            
    },
    methods: {
        getAllSpit (type) {
            
            if(this.page>this.total) return;
            if(type) {
                    this.page++
            }
            this.$http({
                method:"get",
                url:`http://192.168.0.188:9005/spit/search/${this.page}/${this.size}`,

            })
            .then((res) => {
                 let data = res.data.data
                 this.total = data.total
                 
                if(type) {
                    this.articles = this.articles.concat(data.rows);
                }else{
                    this.page=1
                    this.articles=data.rows
                }
               
                
               
                
            }).catch((err) => {
                
            })
        },
        showmore ()  {
            this.getAllSpit("showmore");
        },
        gettime (time) {
            var date = new Date(time)
            return utils.publicMethod.getTimestamp(date,'yyyy.MM.dd').split(".").join('-')
        },
        releaseSpit () {
            if(this.youSpit == "") return;
            this.$http({
                method:"POST",
                url:"http://192.168.0.188:9005/spit",
                headers:{
                    "Content-Type":"application/json;charset=utf-8",
                    'Authorization':'Bearer '+this.$store.state.token
                },
                data:{
                    "content":this.youSpit,
                    "parentid":"0"
                }
            })
            .then((res) => {
                console.log(res)
                if(res.data.code == 20000) {
                    this.youSpit = ""
                    this.getAllSpit()
                }
            }).catch((err) => {
                
            })
        },
        showComment (item) {
            console.log(item);
            if(!item.commentInfo.showComment){
                this.getAllSpitComments(item)
            }
            item.commentInfo.showComment = ! item.commentInfo.showComment
        },
        releaseComment (item) {
            console.log(content,id);
            let content =item.commentInfo.yourComment
            let id = item._id
            
            if(content == "") {
                
                return;
            }
            this.$http({
                method:"POST",
                url:"http://192.168.0.188:9005/spit",
                headers:{
                    'Content-Type':"application/json;charset=utf-8",
                    'Authorization':'Bearer '+this.$store.state.token
                },
                data:{
                    "content":content,
                    "parentid":id
                }
                
            })
            .then((res) => {
                console.log(res)
                if(res.data.code == 20000){
                    item.commentInfo.yourComment = ""
                    this.getAllSpitComments(item);
                }
                utils.publicMethod.showTips("发布成功！")
            }).catch((err) => {
                
            })
        },
        getAllSpitComments (item) {
            this.$http({
                method:"GET",
                url:"http://192.168.0.188:9005/spit/comment/"+item._id,
                 headers:{
                    'Content-Type':"application/json;charset=utf-8",
                    
                },
            })
            .then((res) => {
                console.log(res);
                if(res.data.code == 20000){
                    item.commentInfo.allComments = res.data.data
                }else{
                    alert("错误")
                }
                
            }).catch((err) => {
                
            })
        }
    },
    mounted() {
        this.getAllSpit()
    },
    created () {
        
    },
    components:{
        Right
    }
}
</script>

<style scoped>
    #complain{
         margin-top: 80px;
        display: flex;
       
        max-width:960px;
        margin: 0 auto; 
        justify-content: flex-start
    }

    /* 发布吐槽 */

    .newComplain{
        width:90%;
        margin: 20px auto;
        padding: 12px 12px;
        background-color: white;
        min-height: 90px;
        font-size: 14px;
        height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        
    }
    .newComplain textarea{
            position: relative;
            height: 50%;
            width:100%;
            outline: none;
            border-radius: 2px;
            color: #17181a;
            text-indent:15px;
            font-size: 1.25rem;
            margin: 8px 10px;
    }
    .newComplain a{
        margin-left: auto;
        cursor: pointer;
        display: inline-block;
        width:60px;
    }
    .goComplain{
        background-color: rgb(230,70,32);
        display: inline-block;
        height: 28px;
        line-height: 28px;
        width: 72px;
        padding: 2px 12px;
        color: white;
        margin-top: 15px;

    }

    .article-item{
        padding: 10px 20px;
        background-color: white;
        margin-bottom: 16px;
    }
    .container{
        width:80%;
        margin-right: 0;
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .lists{
        width:90%;
        background-color: inherit; 
        /* margin-right: 12px; */

    }
    
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
        width: 40px;
        height: 40px;
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
    .bottom a{
           font-size: 15px;
    line-height: 1.6;
    white-space: pre-wrap;
    color: #17181a;
    overflow: hidden;

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

     /* chakan1查看更多 */
    .show-more{
        display: flex;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(225, 225, 225);
    }
    .show-more>div{
        display: inline-block;
        margin: 0.5rem 0;
        font-size: 1.083rem;
        color: #406599;
        cursor: pointer;
    }
    .show-more>div:hover{
        text-decoration: underline;
        color:royalblue;
    }



    /* 展开评论 */
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
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        margin: 8px auto;
    }
    .write-comment .avar{
        border-radius: 50%;
        margin: 0 12px;
        width: 40px;
        height: auto;
    }
    .write{
        flex:0.95;
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