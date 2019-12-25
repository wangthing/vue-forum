<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <!-- <router-view/> -->
  </div>
</template>



<script>
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
export default {
  name: 'App',
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(245, 245, 245)

}
</style>
