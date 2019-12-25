<template>
    <div id="app">
        <ul id="item">
            <li v-for="item in menu" :key="item.index"><router-link :to="item.href">{{item.type}}</router-link></li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"left",
    data () {
        return{
            menu:[
               { type:"柱状图",href:'bar'},
               {type:"饼状图",href:'pie'}
            ]
        }
    }
}
</script>
<style scoped>
    #app{
        margin: 0;
        height: 100vh;
        width: 100px;
        position: fixed;
        top: 0;
        left: 0;
        color: white;
        background-color: rgb(215, 215, 215);
    }
    #app::after{
        content: ".";
        height: 0;
        width: 0;
        display: block;
        clear: both;
        color: rgb(red, green, blue);
    }
    #item{
        padding-top: 50px;
    }
    #item li{
        display: block;
        margin-top: 20px;
    }
    @media screen and (max-width: 1200px) {
        #app{
            margin: 0;
            height: 60px;
            width: 100vw;
            /* position: fixed;
            top: 0;
            left: 0; */
            background-color: fuchsia;
        }
        #item{
             padding:0;
        }
        #item li{
            display: inline-block;
            margin-left: 20px;
        }
    }
</style>