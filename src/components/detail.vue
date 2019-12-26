<template>
    <div id="detail">
       
         <div class="container">
             <Catalog></Catalog>
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
import Catalog from './catalog'


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
        Catalog,

    }
}
</script>

<style scoped>
    .container{
        max-width: 1100px;
        margin: 40px auto;
        display: flex;
        justify-content: space-between;
    }

    
</style>