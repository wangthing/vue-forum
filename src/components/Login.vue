<template>
  <div id="login" v-if="getLoginState">
    <h1 class="warning" v-if="this.warning !=='' ">{{warning}}</h1>
    <div class="hide"></div>
    <div class="login-container" v-show="getLoginOrRegister">
      <div class="panfish">
        <img :src="imgUrl" class="nomal" />
      </div>
      <h3 class="title">用户登录</h3>
      <span class="close" @click="cancleLogin">
       <i class="fa fa-times" aria-hidden="true"></i>
      </span>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            name="account"
            v-model="loginname"
            @focus="changeImg2"
            @blur="changeImg1"
            placeholder="请输入账号"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            name="password"
            v-model="password"
            @focus="changeImg3"
            @blur="changeImg1"
            placeholder="请输入密码"
          />
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block login" @click.prevent="goLogin" >{{LoginTips}}</button>
      </form>
      <div class="foot_inf">
        <div class="foot_register">
          <span>没有账号？</span>
          <a to="/register" class="register" @click="switchRegister">注册</a>
        </div>
        <div>第三方登录</div>
        <div class="img_svg">
          <div class="svg_box" v-for="(item,i) in svgUrl" v-bind:key="i">
            <img :src="item" class="svg_style" />
          </div>
        </div>
        <div class="agreeBox">
          注册登录即表示同意
          <a href="#">用户协议</a>
          、
          <a href="#">隐私政策</a>
        </div>
      </div>
    </div>

    <div class="register-container" v-show="!getLoginOrRegister">
       <span class="close" @click="cancleLogin">
        <i class="fa fa-times" aria-hidden="true"></i>
      </span> 
      <h3 class="title">用户注册</h3>
      
      <form>
        <div class="form-group">
          <input type="text" class="form-control" name="loginname" v-model="registerform.loginname" placeholder="请输入用户名" />
        </div>
        
        <div class="form-group">
          <input type="phone" class="form-control phonenumber" name="mobil" v-model="registerform.mobile"   placeholder="请输入手机号" />
        </div>
        <div class="form-group verification"> 
          <input type="text" class="form-control" maxlength="6" name="code" v-model="registerform.code"   placeholder="请输入验证码" />
          <button class="verification_code" @click.prevent="getCode">{{getCount>60?"获取验证码":getCount+"s"}}</button>
        </div>

        <div class="form-group">
          <input type="password" class="form-control" name="password" v-model="registerform.password" placeholder="请输入密码(不少于6位)" />
        </div>
        <button  class="btn btn-primary btn-lg btn-block" @click.prevent="goRegister">注册</button>
      </form>
      <a  class="back" @click="switchLogin">已有账号登录</a>
      <div>第三方登录</div>
      <div class="img_svg">
        <div class="svg_box" v-for="(item,i) in svgUrl" v-bind:key="i">
          <img :src="item" class="svg_style" />
        </div>
      </div>

      <div class="agreeBox">
        注册登录即表示同意
        <a href="#">用户协议</a>
        、
        <a href="#">隐私政策</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"login",
  data() {
    return {
      showLogin: this.getLoginState,
      LoginTips:"登录",
        warning:'',
      LoginOrRegister:true,
      loginname: "1234",
      password: "123456",
      registerform:{
        loginname:"123",
        password:"123456",
        mobile:13879805674,
        code:"",
        
      },
      imgUrl: "https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png",
      img: [
        "https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png",
        "https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png",
        "https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png"
      ],
      svgUrl: [
        "https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg",
        "https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg",
        "https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg"
      ]
    };
  },
  mounted() {
      
  },
  created () {
    this.LoginTips = "登录"
    this.LoginOrRegister = this.getLoginOrRegister
  },
  methods: {
    changeImg1() {
      this.imgUrl = this.img[0];
     
    },
    changeImg2() {
      this.imgUrl = this.img[1];
    },
    changeImg3() {
      this.imgUrl = this.img[2];
    },
    cancleLogin () {
        this.$store.commit('cancelSign')
       
    },
    switchRegister () {
      
      this.$store.commit("setValue",[
        {
            name:"showLogin",
            value:true
        },
        {
            name:"loginOrRegister",
            value:false
        }
      ]);
    },
    switchLogin () {
      this.LoginTips = "登录"
      this.$store.commit("setValue",[
        {
            name:"showLogin",
            value:true
        },
        {
            name:"loginOrRegister",
            value:true
        }
      ]);
    },
    goRegister () {
      this.$http({
        method:"POST",
        url:`http://192.168.43.41:9006/user/register/${this.registerform.code}`,
        data:{
          mobile:this.registerform.mobile,
          loginname:this.registerform.loginname,
          password:this.registerform.password
        },
        headers:{
          'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      .then((res) => {
        let code = res.data.code;
        let message = res.data.message
        if(code == 20000) {
            this.loginname = this.registerform.loginname
            this.password = this.registerform.password
            this.goLogin()
        }else{
          this.showWarning(message)
        }

      })
      return false;
    },
    getCode () {
      
      if((''+this.registerform.mobile ).length!= 11) {
        this.showWarning("手机号码格式不正确！")
        return;
      }
      if(this.getCount<60) return;
      this.$http({
        method:"get",
        url:"http://192.168.43.41:9006/user/sendsms/"+this.registerform.mobile,
      })
      .then((res) => {
        let message = res.data.message
        if(res.data.code == 20000){
           this.$store.commit("setValue",[{
              name:"count",
              value:60
            }])
            this.$store.commit('countDown')
             this.showWarning("注册成功！")
          }else{
            
            this.showWarning(message);
          }
        
      
      })
      
    },
    goLogin () {
      this.LoginTips = "登录中。。。"
      this.$http({
        method: "POST",
        url: 'http://192.168.43.41:9006/user/login',
        data:{
          loginname:this.loginname,
          password:this.password
        },
        headers:{
          'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      .then((res) => {
        this.LoginTips = "登录中......"
        
        var userInfo = res.data.data;
        

        if(res.data.code == 20000) {
          this.$store.commit("setToken",userInfo.token)
          document.cookie = "token="+this.$store.state.token+";Max-Age=360000"
          document.cookie = "username="+userInfo.name+";Max-Age=360000"
          setTimeout(() => {
            top.location.reload()
            this.showWarning("登陆成功");
          }, 500);
          this.LoginTips = "登录"
          this.$store.commit("setValue",[
            {
              name:"showLogin",
              value:false
            },
            {
              name:'token',
              value:userInfo.token
            }
          ])
          
        }else{
          this.showWarning(res.data.message)
          this.LoginTips = "登录"
        }
        
      })
    },
    showWarning (msg) {
      this.warning = msg;
      setTimeout(() => {
        this.warning = ""
      }, 3000);
    }
   

  },
 
  computed: {
    getLoginState () {
      return this.$store.state.showLogin
    },
    getLoginOrRegister () {
      return this.$store.state.loginOrRegister
    },
    getCount () {
      return this.$store.state.count
    }
  },
};
</script>
<style scoped>

body{
  font-size: 12px !important;
}
.warning{
  margin:0 auto;
  position:absolute;
  top:100px;
  left:50%;
  height:40px;
  padding:6px 32px;
  line-height:40px;

  background-color: aqua;
  transform:translateX(-50%);
  display:inline-block;
  /* width:100%; */
  color:rgba(209, 38, 38,.5);
}

#login{
  
   
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10024;
}

.hide{

  width: 100%;
  height: 100%;
  z-index: 10024;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0.5;
}
.close {
  display: inline-block;
  width: 25px;
  height: 25px;
  color: rgb(245, 205, 245);
  text-align: center;
  position: absolute;
  right: 4px;
  font-size: 18px;
  font-weight: bold;
  top: 4px;
  cursor: pointer;
  display: inline-block;
  font-family: "Ionicons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  /* transform-origin: center center; */
  transition: .3s;
}
.close:hover{
  transform: rotate(90deg);
  
  color: rgb(205, 205, 225)
}
.login-container {
  position: absolute;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  font-size: 15px;
}
.register-container {
  position: absolute;
  z-index: 2048;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  font-size: 15px;
  text-align: left;
}
.form-group{
  margin: 4px 0 10px 0;
}
input{
      padding: 7px;
    width: 100%;
    border: 1px solid #e9e9e9;
    border-radius: 2px;
    outline: none;
    box-sizing: border-box;
}
input:focus{
  border-color:#007fff
}
.verification{
  position: relative;
}
.verification_code{
  position: absolute;
  top: 0;
  right: 0;
  line-height: 1;
  height: 100%;
  color: #007fff;
  padding: 0 6px;
  background-color: transparent;
    max-width: 100px;
}
button{
  width: 100%;
    height: 2.8rem;
    color: #fff;
    background-color: #007fff;
    border-radius: 2px;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: #007fff;
    color: #fff;
    border-radius: 2px;
    border: none;
    padding: .5rem 1.3rem;
    outline: none;
    transition: background-color .3s,color .3s;
    cursor: pointer;
    margin-bottom: 6px;

}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.foot_inf {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #767676;
}
.foot_register,
.img_svg {
  display: flex;
  margin: 6px 0;
  flex-direction: row;
}
.img_svg{
  width: 100%;
  justify-content: center;
}
.register {
  color: #007fff;
  cursor: pointer;
  
}
.svg_style {
  width: 30px;
  height: 30px;
}
.svg_box {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
}

.back{
  line-height: 30px;
  display: inline-block;
  color: #007fff;
  cursor: pointer;
  text-align: center;
}
.panfish {
  position: absolute;
  top: 0;
  left: 50%;
  width: 8.6rem;
  transform: translate(-50%, -75%);
  z-index: 1;
}
.agreeBox{
  font-size: 14px;
  margin:0 10px 0 0;
}
</style>
