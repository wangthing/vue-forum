<template>
    <div id="newPost">
        <div class="title">
            <input  type="text" placeholder="请输入标题" v-model="title">
            <div class="sub" @click="addTags">
                <span class="submit" >提交</span>
                <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div :class="'tags' " v-show="showTags" >
                <h1>发布文章</h1>
                <h5>选择分类</h5>
                <ul class="columns">
                    <li v-for="(item,index) in columns" :key="index" :class="{active:selectedIndex==index}" :data-id="item.id" @click="changeActive(index,item.id)">{{item.name}}</li>
                </ul>
                <h1>发布问题</h1>
                <h5>标签</h5>
                <input type="text" class="tags-item" v-model="chooseLable" placeholder="请添加一个标签">
                
                <div @click="submits" class="upload">确认发布</div>
            </div>
        </div>
        <div class="edit">
            <mavon-editor 
            v-model="content" 
            ref="md" 
            @change="change" 
            style="min-height: 600px"
        />

        
        </div>

    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import utils from '../assets/utils.js' 
export default {
    name:"newPost",
    data () {
        return {
            content:'', // 输入的markdown
            html:'',    // 及时转的html
            title:'',
            columns:[],
            column:[],
            showTags:false,
            columnActive:0,
            chooseColumn:-1,
            chooseLable:"",
            selectedIndex:-1,
        }
    },
    mounted () {
        document.getElementById("footer").style.display = "none"
        document.getElementById("header").style.display = "none"
        this.getAllLabels()
        this.getAllColumns()
    },
    created () {
        
    },
    methods: {
        submits () {
            
            if(this.chooseColumn == -1&&labelId=="") {
                utils.publicMethod.showTips("请选择一个分类")
                return;
            }
            let labelId = this.chooseLable;
            let columnId = this.chooseColumn;
            let allLabels = this.$store.state.allLabels
            console.log(this.$store.state.token);
            // return;
            if(columnId!=-1 && labelId==""){
                console.log(this.$store.state.token);
                // 发布专栏
                 this.$http({
                    method:"post",
                    url:"http://192.168.43.41:9001/article",
                    headers:{
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization':'Bearer '+this.$store.state.token
                    },
                    data:{
                        "columnid": this.chooseColumn,  // 专栏id
                        "title": this.title,
                        "content": this.html,
                        "image": ""
                    }
                })
                .then((res) => {
                    
                    if(res.data.code == 20000) {
                        utils.publicMethod.showTips("发布成功！")
                        setTimeout(() => {
                            this.$destroy()
                            this.$router.push('/')
                           
                            
                        }, 1200);
                    }
                }).catch((err) => {
                    
                })
            }else if(labelId!="" && columnId==-1){
                
                // 发布问答
                this.$http({
                    method:"post",
                    url:"http://192.168.43.41:9004/problem",
                    headers:{
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization':'Bearer '+this.$store.state.token
                    },
                    data:{
                        "labels": [
                            {
                                id:1
                            },
                            {
                                id:2
                            }
                        ],  // 专栏id
                        "title": this.title,
                        "content": this.html,
                        
                    }
                })
                .then((res) => {
                    
                    if(res.data.code == 20000) {
                        
                        utils.publicMethod.showTips("发布成功！")
                        setTimeout(() => {
                            this.$destroy()
                            this.$router.push('/')
                            
                        }, 1200);
                    }
                }).catch((err) => {
                    utils.publicMethod.showTips(err)
                })
            }

           
        },
        getAllLabels () {
            this.$http({
                method:"POST",
                url:"http://192.168.43.41:9004/problem/label",
                headers:{
                'Content-Type':"application/json;charset=utf-8"
                }
            })
            .then((res) =>{
                let labels = res.data.data
                this.hot_tagList = labels;
                this.$store.commit("setValue",[
                {
                    name:'allLabels',
                    value:labels
                }
                ])
            })
        },
        change(value, render){
            // render 为 markdown 解析后的结果[html]
            this.html = render;
        },
        getAllColumns () {
            this.$http({
                method:"GET",
                url:"http://192.168.43.41:9001/column",

            })
            .then( (res) => {
                let data = res.data.data
                this.columns = data
            })
        },
        addTags () {
            this.showTags = !this.showTags;
        },
        changeActive (index,id) {
           console.log(index);
           if(index == this.selectedIndex) {
               this.chooseColumn = -1;
               this.selectedIndex = -1;
               return;
           }
           this.chooseColumn =  id;
           this.selectedIndex = index;
           
        }
    },
    components:{
        mavonEditor,
    }
}
</script>

<style scoped>
   
    #newPost{
        
        padding: 25px;
    }

    .title{
        
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /* padding: 22px 12px */
        margin: 12px 0;
        position: relative;
    }
    .title input{
        
        width: 100%;
        height: 40px;
        padding: 22px 20px;

    }
    .title input::placeholder{
        font-size: 24px;
    }
    
    .edit{
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .sub{
        position: absolute;
        right: 60px;
        color: #007fff;
        cursor: pointer;
    }
    .submit{
        color: #007fff;
        cursor: pointer;
        width: 80px;
        /* border-radius: 12px;
        background-color: rgb(7,119,231);
        color: white; */
        outline: none;
        height: 100%;
        line-height: 50px;
       
    }
    .submit i:hover{
        transform: rotate(90deg);
        
        transform-origin: center center;
            
    }
    .tags{
        position: absolute;
        padding: 12px 12px;
        text-align: left;
        color: hsla(218,9%,51%,.8);
        top: 47px;
        z-index: 11150;
        right: 20px;
        width: 320px;
        /* height: 200px; */
        background-color: white;
        border: 1px  solid rgb(234, 245, 215);
    }
    .tags h1, .tags h5{
        margin-bottom: 8px;
    }
    .tags::before{
        content: "";
        position: absolute;
        margin-left: -.5rem;
        top: -.6rem;
        left: 78%;
        width: 1rem;
        height: 1rem;
        background-color: #fff;
        border: 1px solid #ddd;
        border-right: none;
        border-bottom: none;
        transform: rotate(45deg);
    }
    .columns{
        display: flex;
        flex-wrap: wrap;
    }
    .columns li{
        font-size: 12px;
        margin: 0 6px 6px 0;
        cursor: pointer;
        border: 1px solid rgb(245, 245, 220);
        padding: 4px 4px;
    }
    .columns li:hover{
        background-color: rgba(0,127,255,.05);
        color: #007fff;
    }
    .columns li.active{
        background-color: rgba(0,127,255,.05);
        color: #007fff;
    }
    input.tags-item{
        border-bottom: 1px solid rgb(235, 235, 235);
        height: 18px;
        padding: 0;
            font-size: .9em;
            border: none;
            border-bottom: 1px solid #f1f1f1;
            border-radius: 0;
            outline: none;
    }
    input.tags-item::placeholder{
        font-size: 12px;
    }

    .upload{
        width: 80px;
        height: 30px;
        border: 1px solid #007fff;
        color: #007fff;
        font-size: 14px;
        padding: 5px 8px;
        margin: 18px auto;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
    }
   
    
</style>