<template>
    <div id="main">
        <div class="main-container">
            <div class="left-nav" @scroll="scrollGet($event)" v-bind:style="{height:50*tags.length+'px'}">
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
            tags:[
                {name:'热门',href:'#'},
                {name:'牛人专区',href:'#'},
                {name:'机器学习',href:'#'},
                {name:'后端开发',href:'#'},
                {name:'web前端',href:'#'},
                {name:'AndroidQ',href:'#'},
                {name:'人工智能',href:'#'},
                {name:'',href:'#'},
            ],
            tagsIndex:0,
            
            slideImages:[
                {image:'../../static/img/page-banner.png',title:"每年"},
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

    },
    methods: {
        switchTags (e) {

            this.tagsIndex = e.target.dataset.index

        },
        scrollGet (e) {
            console.log(e.srcElement.scrollTop, e.target.scrollTop)
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
        max-width: 1300px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .main-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    /* 左侧导航栏标签 */
    .left-nav-list li.active a{
        background-color: #e64620;
        
        color: white;
        cursor:default;
    }
    .left-nav-list li.active a:hover{
        font-size: inherit;
        color: white;
        box-shadow: 10px 10px 5px #888888;
    }
    .left-nav{
        width: 160px;
        position: fixed;
        top: 150px;
        z-index: 1024;
    }
    .left-nav-list li{
        list-style: none;
        text-align: center;
        color: rgb(215, 215, 215);
        border-radius: 6px;
        height: 50px;
        overflow: hidden;
        width: 100%;
        line-height: 50px;
    }
    .left-nav-list li a{
        display: inline-block;
        height: 100%;
        width: 100%;
    }
    .left-nav-list li a:hover{
        color: blueviolet;
    }
    /* 左侧导航栏标签 */


    .middle-content{
        max-width: 58%;
        margin-left: 200px;
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
    
