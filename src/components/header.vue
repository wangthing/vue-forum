<template>
    <div id="header" :class="{slideouts:'test'}">
        <div class="main-container">
                <header>
                <div class="container">
                    <div class="navbar-inner">
                        <a href="#">
                            <img src="../../static/img/asset-logo-black.png" alt="">
                        </a>
                        <ul class="nav-list">
                            <li class="nav-class-list">
                                <ul>
                                    <li v-for="(item,index) in navs" :key="index" :data-index="index" :class="{active:selectIndex==index}" @click="switchTopic(index)"><router-link :to="item.route" >{{item.name}}</router-link></li>
                                   
                                </ul>
                            </li>
                            <li class="search-input">
                                <input type="text " placeholder="搜索">
                                <i class="fa fa-search" id="search-btn" aria-hidden="true"></i>
                            </li>
                            <li class="user" v-show="!!getUserState">
                                <ul>
                                    <li class="new_post">
                                        <button ><a href="#/newPost" target="blank">写文章</a></button>
                                    </li>
                                    <li class="notation">
                                        <i class="fa fa-commenting" aria-hidden="true"></i>
                                    </li>
                                    <li class="user-avar" >
                                        <a href="#/usercenter/12/" ><img src="../../static/img/widget-photo.png" alt="用户头像"></a>
                                    </li>
                                    <!-- <li>{{getUserState}}</li> -->
                                </ul>
                            </li>
                            <li class="user" v-show="!getUserState">
                                <span><a href="#" @click="singin">登录·</a></span>
                                <span><a href="#" @click="singup">注册</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
import bus from '../assets/bus'
export default {
    
    name:"header",
    data () {
        return {
            navs:[
                {name:'首页',active:'active',route:"/"},
                {name:'问答',active:'',route:"/question"},
                {name:'活动',active:'',route:"/activity"},
                {name:'吐槽',active:'',route:"/complain"},
                
            ],
            scrollHeight:0,
            slideOut:false,
            isLogin:this.getUserState,
            stopScroll:false,
            timer:null,
            selectIndex:1
        }
    },
    created() {
        
    },
    mounted () {
        window.addEventListener('scroll', this.throttle(200,this.handleScroll) , true);  
            // 监控点击目录事件
            bus.$on("arriveTop",() => {
                setTimeout(() => {
                    this.slideOut = true;
                }, 100);
            });


    } ,
    destroyed () {
        window.removeEventListener('scroll', this.throttle(200,this.handleScroll) , true);  
    } ,
    methods: {
        switchTopic:function (index) {
            // let idx = e.target.dataset.index
            this.selectIndex = index
        },
        handleScroll (e) {
            
            let scroll = document.body.scrollTop || document.documentElement.scrollTop   
            
            let flag =  scroll - this.scrollHeight ;
            this.scrollHeight = window.pageYOffset;

            if(flag>50){
                        
                this.slideOut = true

            }else if (flag<-50) { //上滑
                 
                     this.slideOut = false

            }
        },
        
        throttle (delay,callback) {
            let pre = Date.now();
            return function () {
                let context = this;
                let args = arguments;
                var now = Date.now();
                
                if(now - pre > delay){
                    callback.apply(context,args);
                    pre = Date.now()
                }
            }
        },
        singin () {
            console.log(this.isLogin);
            this.$store.commit("setValue",[
                {
                    name:"showLogin",
                    value:true
                },
                {
                    name:"loginOrRegister",
                    value:true
                }
            ]);
        },
        singup () {
            this.$store.commit("setValue",[
               {
                    name:"showLogin",
                    value:true
                },
                {
                    name:"loginOrRegister",
                    value:false
                }
            ]);
        }
    },
    computed: {
        getStopHeader () {
            return this.$store.state.stopHeader
        },
        getUserState () {
            return this.$store.state.username
        }
    },
}
</script>

<style scoped>

    header{
        position: fixed;
        width: 100%;
        height: 50px;
        top: 0;
        left: 0;
        background-color: rgb(245, 245, 245);
        padding: 20px 0;
        z-index: 1024;
        border-bottom: 1px solid rgb(205, 205, 205)
       
    }
    #header{
         transition: .4s;
    }
    /* #header:hover{
        opacity: 1;
        transition: .8s;
        
    } */
    #header.slideout{
        animation: slideout .8s linear forwards; 
    }
   
    @keyframes slideout{
        98%{
            opacity: 0;
        }
        100%{
            opacity: 0;
            visibility: hidden;
            
        }
    }
    .main-container{
        position: relative;
        height: 90px;
    }
    .container{
        max-width: 1200px;
        margin: 0 auto;
    }

    .navbar-inner{
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }
    /* logo图片 */
  
    .navbar-inner>a img{
        max-width: 140px;
        vertical-align: middle;
        height: auto;
    }
    
    /* 中间的分类  首页  交友 */
    .nav-class-list ul a{
        color: black;
    }
    .nav-class-list ul{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin:  0 12px;
        
    }
    .nav-class-list ul li{
        margin:0 15px;
        line-height: 50px;
        cursor: pointer;
        font-weight: 500;
    }
    .nav-class-list ul li.active a{
        font-weight: bold;
        color: #e64620 !important;
    }
    /* 搜索框 */
    .search-input{
         position: relative;
    }
    .search-input input::placeholder{
        font-size: 16px;
       
    }
    .search-input input{
        border-radius: 20px;
        border: 1px solid rgb(245, 245, 245);
        height: 40px;
        font-size: 16px;
        width: 280px;
        padding: 4px 10px;
    }
    #search-btn{
        position: absolute;
        right: 12px;
        cursor: pointer;
        top: 10px;
    }
    /* 搜索框 -----end*/
    .nav-list{
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: baseline;
        flex: 1;
    }
    .nav-list li{
        list-style: none;
        color: black;
    }


    /* 用户中心 */
    .user{
        margin: 0 25px;
        max-width: 300px;
        margin-left: auto;
    }
    .user ul{
        display: flex;
        justify-content: flex-end;
        align-items: center;
       
        min-width: 220px;
    }
    .user ul li{
        margin: 0 12px;
    }
    .user .user-avar{
        border-radius: 12px;
        overflow: hidden;
    }
     .new_post{
        background-color: rgb(7,119,231);
        color: white;
        width: 60px;
        height: 30px;
        padding: 2px 4px;
        border-radius: 4px;
    }
    .new_post a{
        color:white;
    }
    .new_post button{
         background-color: rgb(7,119,231);
         border: none;
        outline: none;
        transition: background-color .3s,color .3s;
        cursor: pointer;
        color: white;
        font-size: 16px;
        
        line-height: 1;
        height: 100%;
    }
</style>