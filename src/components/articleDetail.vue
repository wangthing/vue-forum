<template>
    <div id="articleDetail">
        <div class="top">
            <div class="author">
                <div class="avar"><img src='../../static/img/widget-widget-photo.png' alt=""></div>
                <div class="author-info">
                    <h5 >Closer</h5>
                    <h5 class="time">6月22日 12:01  阅读  2354</h5>
                </div>
                
            
            </div>
            <div class="follow">
                    <span >关注</span>
            </div>
        </div>
        <div id="content">
            <div  class="markdown-body" ref="md" v-html="htmlMd"></div>
        </div>

        
    </div>
</template>

<script>

import bus from '../assets/bus'

export default {
    name:'articleDetail',
    data () {
        return {
            htmlMd:"",
        }
    },
    mounted () {
        this.getArticleById()
    },
    methods: {
        getArticleById () {
            var that = this
            this.$http({
                method:"GET",
                url:`http://192.168.0.188:9001/article/`+ this.$route.query.id,
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then( (res) => {
                
                
                
                return new Promise(function (resolve,reject) {
                    that.htmlMd = res.data.data.content;
                    resolve()
                }).then(function (){
                    bus.$emit('getmd',that.$refs.md);
                })
            })
        }
    },
    components: {
        
    }

}
</script>

<style scoped>
    
    #articleDetail{
        width: 700px;
        margin: 0 auto;
        padding: 16px 20px;
        background-color: #fff;
        text-align: left;
    }
    .top{
        display: flex;
        width: 100%;
        margin-bottom: 6px;
        justify-content: space-between;
        align-items: center;
        margin: 12px 0 20px 0;
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




    
</style>