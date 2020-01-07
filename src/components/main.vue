<template>
    <div id="main">
        <div class="main-container">
            <div class="left-nav" @scroll="scrollGet($event)" >
                <ul class="left-nav-list">
                    <li v-for="(item,index) in tags" :key="index"  :class="tagsIndex==index?'active':''">
                        <a :href="item.href" :data-index="index"  @click="switchTags">{{item.name}}</a>
                    </li>
                </ul>
            </div>

            <!-- 中间内容  -->
            <div class="middle-content">
                <div class="carousel">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in slideImages" :key="index">
                             <a href="#" target="_blank"><img :src="item.image" /></a>
                         </swiper-slide>
                         <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
                    </swiper>
                </div>
                <Article></Article>
            </div>

            <!-- 右侧 广告活动-->
            <Right></Right>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Article from "./article"
import Right from "./right"
export default {
    name:'main',
    data () {
        return{
            tags:[],
            /* 
            [
                {name:'热门',href:'#'},
                {name:'牛人专区',href:'#'},
                {name:'机器学习',href:'#'},
                {name:'后端开发',href:'#'},
                {name:'web前端',href:'#'},
                {name:'AndroidQ',href:'#'},
                {name:'人工智能',href:'#'},
                {name:'',href:'#'},
            ]
            */


            tagsIndex:0,
            
            slideImages:[
                {image:'../../static/img/img001.png',title:"每年"},
                {image:'../../static/img/widget-activity02.png',title:"每年"},
                {image:'../../static/img/widget-activity2.png',title:"每年"}
               
            ],
            swiperOption: {
                autoplay: {//自动播放
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {//分页
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet(index, className) {//自定义分页的按钮
                      return `<span class="${className} swiper-pagination-bullet-custom"></span>`
                    }
                }
            }

        }
    },
    mounted () {
        document.getElementById("catalog")&&(document.getElementById("catalog").style.display = "none")
        document.getElementById("footer").style.display = "block"
        document.getElementById("header").style.display = "block"
    },
    created () {
        this.getAllNavs()
     
    },
    methods: {
        switchTags (e) {

            this.tagsIndex = e.target.dataset.index

        },
        scrollGet (e) {
            
        },
        getAllNavs () {
            this.$http({
                method:"GET",
                url:"http://192.168.43.41:9001/column"
            })
            .then((result) => {
                console.log(result); 
                var list = result.data.data;
                this.tags = list
            }).catch((err) => {
                
            })
        }
        
    },
    components:{
        swiper,
        swiperSlide,
        Article,
        Right
    }
}
</script>

<style scoped>
    #main{
        max-width: 1000px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .main-container{
        min-width: 960px;
       
        display: flex;
        justify-content: space-between;
    }
    /* 左侧导航栏标签 */
    .left-nav-list li.active a{
        background-color: #007fff;
        color: white;
        cursor:default;
    }
    .left-nav-list li.active a:hover{
        background-color: #007fff;
        font-size: inherit;
        color: white;
        box-shadow: 10px 10px 5px #888888;
    }
    .left-nav{
        background-color: white;
        width: 125px;
        margin-left: -150px;
        position: fixed;
        top: 150px;
        
        z-index: 1024;
        cursor: pointer;
    }
    .left-nav-list li{
        list-style: none;
        text-align: center;
        color: rgb(215, 215, 215);
        border-radius: 6px;
        height: 35px;
        overflow: hidden;
        margin: 16px auto;
        width: 80%;
        font-size: 14px;
        line-height: 35px;
    }
    .left-nav-list li a{
        display: inline-block;
        color: #909090;
        height: 100%;
        width: 100%;
    }
    .left-nav-list li a:hover{
        color: blueviolet;
        background-color: rgba(235, 213, 213, 0.6);
    }
    /* 左侧导航栏标签 */


    .middle-content{
        max-width: 700px;
        /* margin-left: 200px; */
    }
    

    /* 中间内容 */
    .carousel{
        background-color: antiquewhite;
        height: 400px;
    }
    .carousel>div{
        height: 100%;
    }
    .carousel img{
        height: 100%;
    }
        /* 轮播to */
        .swiper-pagination-bullet-custom {
            width: 9px;
            height: 9px;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
            color: #000;
            opacity: 1;
            border-radius: 0;
            background: #fff;
        }
        .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
            color: #fff;
            background: #a11703;
        }
    /* 中间内容 */

    
</style>>
    
