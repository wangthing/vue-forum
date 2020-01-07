<template>
    <div id="detail">
       
         <div class="container">
             <skeleton v-show="isLoading"></skeleton>
             <ArticleDetail v-show="!isLoading"></ArticleDetail>
             <Right>
              
             </Right>
             
            
         </div>
        <Backtop></Backtop>
        <Footer></Footer>
    </div>
</template>

<script>
import ArticleDetail from './articleDetail'
import Right from './right'
import Header from './header'
import Backtop from './backtop'
import Footer from './footer'
import skeleton from './common/skeleton'


// import VueMarkdown from 'vue-markdown'
export default {
    name:'detail',
    data () {
        return {
            isLoading:true
        }
    },
   
    mounted () {
         this.showLoading()
    },
    methods: {
         showLoading () {
            this.isLoading = true
            setTimeout(() => {
                    this.isLoading = false
            }, 1500);
        },
    },
    components: {
        Header,
        Right,
        ArticleDetail,
        Backtop,
        skeleton
        

    }
}
</script>

<style scoped>
#detail{
    
    margin: 0 auto;
}
    .container{
        max-width: 1060px;
        margin: 40px auto;
        display: flex;
        justify-content: space-between;
    }

    
</style>