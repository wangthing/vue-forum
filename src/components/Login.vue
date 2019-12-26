<template>
  <div id="login" v-if="isLogin">
    <div class="hide"></div>
    <div class="login-container">
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
            v-model="account"
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
        <button type="button" class="btn btn-primary btn-lg btn-block">登录</button>
      </form>
      <div class="foot_inf">
        <div class="foot_register">
          <span>没有账号？</span>
          <router-link to="/register" class="register">注册</router-link>
        </div>
        <div>第三方登录</div>
        <div class="img_svg">
          <div class="svg_box" v-for="(item,i) in svgUrl" v-bind:key="i">
            <img :src="item" class="svg_style" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"login",
  data() {
    return {
      isLogin: true,
      account: "",
      password: "",
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
      this.isLogin = false;
    }
  }
};
</script>
<style scoped>

body{
  font-size: 12px !important;
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
 
  position: absolute;
  right: 10px;
  font-size: 18px;
  font-weight: bold;
  top: 2px;
  cursor: pointer;
  display: inline-block;
  font-family: "Ionicons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  transition: .3s;
}
.close:hover{
  transform: rotate(90deg);
  transform-origin: 50% 50%;
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
.form-group{
  margin: 8px 0;
}
input{
      padding: 10px;
    width: 100%;
    border: 1px solid #e9e9e9;
    border-radius: 2px;
    outline: none;
    box-sizing: border-box;
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

.panfish {
  position: absolute;
  top: 0;
  left: 50%;
  width: 8.6rem;
  transform: translate(-50%, -75%);
  z-index: 1;
}
</style>
