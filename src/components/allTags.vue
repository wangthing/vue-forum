<template>
    <div id="allTags">
        <div class="tips">
            <h1>标签</h1>
        <p>标签是最有效的内容组织形式，正确的使用标签能更快的发现和解决你的问题。</p>

        </div>
        <div  class="main">
            <ul class="lists">
                <li class="item" v-for="(item,index) in allTagsList" :key="index">
                    <h5 class="title">{{item.labelname}}</h5>
                    <div class="guanzhu">
                        <span @click="cancelOrsubscriped(item.state,item.id)" :class="item.state?'isSubcribed':'goSubcribe'" :data-id="item.id">{{item.state?'已关注':'去关注'}}</span>
                        <span>
                            <i class="num">{{item.fans?item.fans:1254}}</i> 人关注
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"allTags",
    data() {
        return {
             allTagsList:[]
        }
    },
    methods: {
        getAllTags () {
            this.$http({
                method:"POST",
                url:"http://192.168.0.188:9004/problem/label"
            })
            .then((res) => {
                this.allTagsList = res.data.data
                console.log(this.allTagsList);
            }).catch((err) => {
                
            })
        },
        cancelOrsubscriped (state,id) {
            this.allTagsList.forEach( (item) => {
                if(item.id == id) {
                    item.state = !item.state;
                }
            })
        }
    },
    mounted() {
        
    },
    created () {
        this.getAllTags()
    }
}
</script>

<style scoped>
    #allTags{
        width: 65%;
        min-width: 960px;
        margin: 50px auto;
        text-align: left;
    }
    .tips h1,p{
        margin: 6px 0;
    }
    .tips p{
        font-size: 14px;
    }
    .item h5{
        padding: 12px 15px 8px;
        font-size: 16px;
        font-weight: bold;
    }
    .item .guanzhu{
        margin-top: 10px;
        padding: 15px;
        line-height: 20px;
        font-size: 14px;
        background-color: #ededed;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .lists{
        display: flex;
        flex-wrap: wrap;
    }
    .item{
        width: 24%;
        background-color: white;
        margin: 16px auto 4px;
        margin-left: 0;
        /* margin-right: 8px; */
        /* padding: 4px 12px; */
    }
    .guanzhu span {
        padding: 4px 8px;
        border-radius: 4px;
    }
    span.isSubcribed{
        cursor: pointer;
        background-color: rgb(58,188,8);
        color: white;
    }
    .goSubcribe{
        cursor: pointer;

        background-color: white;
        color: rgb(58,188,8);
        border: 1px solid rgb(58,188,8);
    }
</style>