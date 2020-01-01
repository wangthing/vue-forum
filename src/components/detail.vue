<template>
    <div id="detail">
       
         <div class="container">
             
             <ArticleDetail></ArticleDetail>
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



// import VueMarkdown from 'vue-markdown'
export default {
    name:'detail',
    data () {
        return {

        }
    },
   
    mounted () {
         
    },
    methods: {
        
    },
    components: {
        Header,
        Right,
        ArticleDetail,
        Backtop,
        

    }
}
</script>

<style scoped>
    .container{
        max-width: 960px;
        margin: 40px auto;
        display: flex;
        justify-content: space-between;
    }

    
</style>