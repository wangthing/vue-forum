<template>
  <div id="app">
    <Left></Left>
  
    <router-view/>
  </div>
</template>



<script>
import Left from './components/left'
export default {
  name: 'App',
  components:{
    Left
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
