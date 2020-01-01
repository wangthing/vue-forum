import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
      state: {
        showLogin:false,
        loginOrRegister:true,
        stopHeader:false,
        token:"",
        username:"",
        count:61,
        allLabels:"",
        userinfo:''

      },
      mutations: {
        
          goSignIn () {
              this.state.showLogin = true
              this.state.loginOrRegister = true
          },
          goSignUp () {
            this.state.showLogin = true
            this.state.loginOrRegister = false
          },
          cancelSign () {
            this.state.showLogin = false
          },
          setValue (state,payload) {
            //  改变state的值
            /* 
            payload: [ {name,value} ]
            */
              payload.forEach( item => {
                    state[item.name] = item.value
                    console.log( `设置${item.name}:::`,item.value );
              })
             
          },
          countDown(state) {
            let timer = setInterval(() => {
                state.count--;
                if(state.count<0){
                  clearInterval(timer)
                  state.count = 61;
                }
            }, 1000);
          },
          setToken (state,token) {
            state.token = token;
          }
      },
      actions: {
        // setItem ()
        setToken (context) {
            setTimeout(() => {
              context.commit('setToken')
            }, 3000);
        },
        setValue (context,payload) {
          return new Promise(function (resolve,reject) {
             setTimeout( () => {
                  context.commit("setValue",payload)
                  reject()
                  resolve()
                  console.log("定时器到了");
                  
             },2000)
          })
        },
        setValue2 (context,payload) {
          
        }

      }

})

export default store