<template>
  <div>
    <div class="hide"></div>
    
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
