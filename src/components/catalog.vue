<template>
    <div id="catalog" >
        <ul class="H1">
            <li v-for="(item, index) in titles" :key="index"><h1 @click="show" :data-id="item">{{++index+". "+item}}</h1></li>
        </ul>
    </div>
</template>

<script>
import bus from '../assets/bus'
export default {
    name:'catalog',
    data () {
        return {
            titles:{}
        }
    },
    props:{
        
    },
    mounted () {
        
         bus.$on('getMdContent',res => {

            this.titles = res.children
            setTimeout( ()=>{
                this.initCatalog()
            },200 )
         })
        
    },
    methods: {
        initCatalog () {
            
           var arr  = Array.prototype.slice.call(this.titles)
            arr = arr.filter(item => {
              
                return item.nodeName == "H2"
            }).map( item => {
                return item.id
            });
            this.titles = arr;
        },
        show (e) {
            document.getElementById(e.target.dataset.id).scrollIntoViewIfNeeded()
        }
    },

}
</script>

<style lang="">
    #catalog{
        width: 240px;
        position: fixed;
        top: 130px;
        /* height: 580px; */
        background-color: white;
        margin-left: -240px;
        padding: 4px 12px;
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