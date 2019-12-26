<template>
    <div id="backtop"  @click="backTop" v-if="scrollTop>1000?true:false">
        <span class="up" title="回到顶部">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
    </div>
</template>


<script>
export default {
    name:'backtop',
    data () {
        return{
            btnFlag:true,
            scrollTop:0
        }
    },
    mounted() {
        window.addEventListener('scroll',this.throttle(50,this.scrollToTop,false))
    },
    methods: {
        backTop () {
            const that = this
           
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 10)
               
                that.scrollTop = document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop <= 0) {
                   
                    clearInterval(timer)
                }
            }, 20)

        },

        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {


            
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 0) {
                that.btnFlag = true
            } else {
                that.btnFlag = false
            }
        },
        // 节流函数
        throttle (delay,callback) {
            let pre = Date.now()
            return function () {
                let context = this
                let args = arguments;
                var now = Date.now()
                
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
    #backtop{
        
        background-color: white;
        position: fixed;
        right: 20px;
        bottom: 150px
    }
    .up{
        display: block;
        width: 40px;
        height: 40px;
        color: rgb(215, 215, 215);
        font-size: 24px;
        text-align: center;
        line-height: 40px;
    }
    .up:hover{
        cursor: pointer;
        border: 1px solid rgb(215, 215, 215);
        transition: 0.3s;
    }
</style>