<template>
    <div id="catalog" :class="{'sticky':ifsticky}" v-show="titles[0]">
        <ul class="H1">
            <h1>目录</h1>
            <li v-for="(item, index) in titles" :key="index"><h1 @click="show" :data-id="item.id">{{++index+". "+item.text}}</h1>
                <ul >
                    <!-- <h2 v-for="(child, index) in item.children" :key="index" @click="show" :data-id="child.id" >{{++index  +". "+child.text}}</h2> -->
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import bus from '../assets/bus'
export default {
    name:'catalog',
    data () {

        return {
            titles:[],
            scrollHeight:0,
            sticky:false,
            
            
        }
    },
    props:{
        
    },
    mounted () {
        
        // window.addEventListener('scroll', this.throttle(200,this.handleScroll) , true);  
        
      

       
        document.addEventListener("scroll",this.throttle(200,this.handScroll),false)
        

        

         bus.$on('getmd',res => {
             
                this.initCatalog(res.children)
         })
       
    },
    computed: {
        ifsticky () {
            return this.sticky
        },
        getCatalogTop () {
          return document.getElementById("catalog")&&document.getElementById("catalog").offsetTop
        }
    },
    methods: {
        initCatalog (titles) {
            
            var arr  = Array.prototype.slice.call(titles)
            console.log( arr);
            function Find(item) {
                var res;               
                res={id:item.innerHTML.split('id=')[1].split("\"")[1],text:item.innerText}
                return res;
            }

            let H1 = [] ;
              arr.filter(item => {
                return item.nodeName == "H1" 
            }).forEach( item => {
                H1.push(item)
            });
            

            let H2 =[];
            arr.filter(item => {
                return item.nodeName == "H2" || "H3"
            }).forEach( item => {
                H2.push(Find(item))
            });


            let H3 = [];
             arr.filter(item => {
                return item.nodeName == "H3" 
            }).forEach( item => {
                H3.push(Find(item))
            });
            

            let H4 = [];
            arr.filter(item => {
                return item.nodeName == "H4" 
            }).forEach( item => {
                H4.push(Find(item))
            });
            
            
            this.titles = H2;
            
        },
        show (e) {
            // 跳转到特定的Id标题
            console.log(this.titles);
            this.$store.commit('setValue',[{
                name:"stopHeader",
                value:true
            }]);
            let location = document.getElementById(e.target.dataset.id)
            location.scrollIntoView({block:"start",behavior:'smooth'});
            
        },
        getCookie (name) {
            // 获取到cookie的 name 
            let cookieValue = null;

            if (document.cookie && document.cookie !== '') {
                let cookies = document.cookie&&document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    let cookie = cookies[i].trim();
                    // 判断这个cookie的参数名是不是我们想要的
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
        throttle2 (delay,callback) {
            let pre = Date.now;
            console.log("object");
            return function () {
                let now = Date.now()

                if(now - pre>delay){
                    let context = this;
                    let args = arguments;
                    pre = Date.now()
                    callback.apply(context,arguments);
                } 
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
        handScroll (e ) {
             
            // console.log("object");
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop// 滚动条距离顶部的距离
            let flag =  this.getCatalogTop- scrollTop;
            // console.log(this.catalogTop,scrollTop);
            // this.scrollHeight = window.pageYOffset;
            
            if(flag>20){
            
                this.sticky = false 

            }else if (flag<0) { //上滑

                this.sticky = true
            }
        }
    },

}
</script>

<style scoped>
    
    #catalog{
        width: 100%;
        position:unset;
        background-color: white;
        /* margin-left: -260px; */
        margin-top: 20px;
        padding: 4px 12px;
    }
    #catalog.sticky{
        position: fixed;
        width: inherit;
        top: 200px; 
        width: 250px;
        /* right: 50px; */
        /* height: 580px; */
    }
    .H1>li{
        text-align: left;
        position: relative;
        
        padding:   6px  14px;
        margin: 4px 6px;
        cursor: pointer;
        color: black;
    }
    .H1>li h1{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 12px;
    }
    .H1>li::before{
        background-color: currentColor;
        content: "";
        border-radius: 50%;
        width: 6px;
        height: 6px;
        position: absolute;
        top: 50%;
        left: 4px;
        margin-top: -3px;
    }
</style>