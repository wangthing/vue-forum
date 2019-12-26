<template>
  <div>
    <div class="hide"></div>
    <div class="register-container">
      <h3 class="title">用户注册</h3>
      <router-link to="/">
        <i class="close">x</i>
      </router-link>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" name="username" placeholder="请输入用户名" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="请输入密码(不少于6位)" />
        </div>
        <div class="form-group">
          <input type="number" class="form-control" name="password" placeholder="请输入手机号" />
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block">注册</button>
      </form>
      <router-link to="/login" class="back">已有账号登录</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hide {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1024;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0.5;
}
.close {
  position: absolute;
  right: 10px;
  top: 2px;
  display: inline-block;
  cursor: pointer;
  font-family: "Ionicons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
}
.register-container {
  position: relative;
  z-index: 2048;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  font-size: 15px;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.back {
  color: #007fff;
  cursor: pointer;
}
.form-control{
  padding: 0;
}
</style>
