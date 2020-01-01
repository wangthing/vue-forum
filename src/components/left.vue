<template>
    <div id="app">
        <ul id="item">
           <h1 @click="test">{{username?username:"还没有"}}</h1>
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
    },
    mounted () {

    },
    methods:{
        test () {
            this.$store.dispatch("setValue",[{name:"username",value:"what's your name"}]).then(() => {
                console.log("修改成功！");
                alert("修改成功！")
            },() => {
                console.log("失败");
                alert("修改失败")
            })
        }
    },
    computed: {
        username () {
            return this.$store.state.username
        }
    },
}
</script>
<style scoped>
    
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