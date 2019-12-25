<template>
    <div id="header" :class="{slideout:slideOut}">
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
                                    <li v-for="(item,index) in navs" :key="index" :data-index="index" :class="item.active" @click="switchTopic">{{item.name}}</li>
                                   
                                </ul>
                            </li>
                            <li class="search-input">
                                <input type="text " placeholder="搜索">
                                <i class="fa fa-search" id="search-btn" aria-hidden="true"></i>
                            </li>
                            <li class="user">
                                <ul>
                                    <li class="notation">
                                        <i class="fa fa-commenting" aria-hidden="true"></i>
                                    </li>
                                    <li class="user-avar">
                                        <img src="../../static/img/widget-photo.png" alt="用户头像">
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>

export default {
    name:"header",
    data () {
        return {
            navs:[
                {name:'首页',active:'active'},
                {name:'问答',active:''},
                {name:'活动',active:''},
                {name:'交友',active:''},
                {name:'招聘',active:''},
                 {name:'交友',active:''},
                {name:'招聘',active:''},
            ],
            scrollHeight:0,
            slideOut:false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.throttle(200,this.handleScroll) , true);  

    } ,
    methods: {
        switchTopic:function (e) {
            let idx = e.target.dataset.index
            this.navs.forEach((element,index) => {
                index==idx?element.active="active": element.active="";
            });
        },
        handleScroll (e) {
            
            
            let scroll = top.pageYOffset 
           
           
            
            let flag =  scroll - this.scrollHeight ;
            this.scrollHeight = window.pageYOffset;
            console.log(flag);
            

            if(flag>0){
                this.slideOut = true
            }else if(flag<0){
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
    #header:hover{
        opacity: 1;
        transition: .8s;
        z-index: 1024;
    }
    #header.slideout{
        opacity: 0;
        transition: .8s;
        z-index: 1024;
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
    .nav-class-list ul{
        display:flex;
        justify-content: center;
        align-items: center;
        margin:  0 12px;
    }
    .nav-class-list ul li{
        margin:0 15px;
        line-height: 50px;
        cursor: pointer;
        font-weight: 500;
    }
    .nav-class-list ul li.active{
        font-weight: bold;
        color: #e64620;
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
       
        max-width: 120px;
    }
    .user ul li{
        margin: 0 12px;
    }
    .user .user-avar{
        border-radius: 12px;
        overflow: hidden;
    }
    
</style>