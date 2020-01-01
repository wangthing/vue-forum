<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <Login></Login>
    <Backtop></Backtop>
    <!-- <Modal ></Modal> -->
  </div>
</template>



<script>
import Header from './components/header'
import Main from './components/main'
import NewPost from './components/newPost'
import Footer from './components/footer'
import Login from './components/Login'
import Modal from './components/modal'
import Backtop from './components/backtop'

export default {
  name: 'App',

  components:{
    Header,
    Main,
    Footer,
    Login,
    NewPost,
    Backtop
    
  },
  mounted () {

  },
  created () {
    console.log(this.getCookie("token"));
    this.$store.commit("setToken",document.cookie?this.getCookie("token"):'');
    document.cookie?this.showHeader():""
  },
  computed: {
    getToken () {
      return  this.$store.state.token;
    }
  },
  methods: {
    showHeader () {

      this.$store.commit("setValue",[
        {
          name:'username',
          value:this.getCookie("username")
        }
      ])

    },
    getCookie (name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
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
    }
  },
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
  /* height: 100%; */
  background-color: rgb(245, 245, 245)

}
 .editor-toolbar{
        display: flex;
        justify-content: space-around;
        width: 50%;
    }
  /* .CodeMirror-cursors{
    height: 500px;
    background-color: red;
  } */
</style>
