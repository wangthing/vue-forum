<template>
  <div>
    <div class="mysetting_box">
      <h1 class="setting_title_1">个人资料</h1>
    </div>
    <div class="mysetting_box">
      <div class="setting_title">头像</div>
      <!-- 上传文件区 -->
      <div class="input_box">
        <div class="headerImage"></div>
        <div class="upload_box">
          <div class="tip">支持jpg、png格式图片</div>
          <input type="file" ref="upload_input" id="img_upload" />
          <button class="upload_img" @click="uploadImg">点击上传</button>
        </div>
      </div>
    </div>
    <div class="mysetting_box" v-for="(item,index) in tableData" :key="index">
      <div class="setting_title">{{item.title}}</div>
      <div class="input_content">
        <input
          type="text"
          ref="input"
          spellcheck="false"
          :placeholder="item.placehold"
          class="input"
        />
      </div>

      <div v-if="!item.alter_action" class="alter_button" @click="changeAction(item,index)">
        <i class="iconfont">&#xe60f;</i>
        <span>修改</span>
      </div>
      <div v-else class="alter_action">
        <div class="save" @click="save">保存</div>
        <div class="cancel" @click="cancel(item,index)">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 0,
          title: "用户名",
          placehold: "填写你的用户名",
          alter_action: false // input是否获取焦点
        },
        {
          id: 1,
          title: "职位",
          placehold: "填写你的职位",
          alter_action: false // input是否获取焦点
        },
        {
          id: 2,
          title: "公司",
          placehold: "填写你的公司",
          alter_action: false // input是否获取焦点
        },
        {
          id: 3,
          title: "个人介绍",
          placehold: "填写职业技能、擅长的事情、喜欢的事情等",
          alter_action: false // input是否获取焦点
        },
        {
          id: 4,
          title: "个人主页",
          placehold: "填写你的个人主页",
          alter_action: false // input是否获取焦点
        }
      ]
    };
  },
  methods: {
    // 获取焦点
    changeAction(item, index) {
      item.alter_action = true;
      this.$nextTick(function() {
        this.$refs.input[index].focus();
      });
    },
    // 失去焦点
    cancel(item, index) {
      item.alter_action = false;
      this.$nextTick(function() {
        this.$refs.input[index].blur();
      });
    },
    // 保存修改
    save() {},
    // 上传文件
    uploadImg() {
      this.$refs.upload_input.click();
    }
  }
};
</script>
<style>
.mysetting_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 16px 0;
  font-size: 13px;
  border-bottom: 1px solid #e8e8e8;
}
.setting_title_1 {
  font-size: 25px;
  font-weight: 800;
}
.setting_title {
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  color: #333;
  margin-right: 10%;
  width: 10%;
}
.headerImage {
  width: 80px;
  height: 80px;
  background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg);
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 30px;
}
.input_box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.tip {
  color: #909090;
  font-size: 15px;
  margin-bottom: 10px;
}
.input {
  display: inline-block;
  border: none;
  outline: none;
  color: #909090;
  font-size: 15px;
  cursor: text;
  padding: 1px 5px;
  width: 300px;
}
/*修改提示文字的颜色*/

input::-webkit-input-placeholder {
  /* WebKit browsers */
  font-family: inherit;
  font-size: 15px;
  color: #c7c7c7;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: inherit;
  font-size: 15px;
  color: #c7c7c7;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: inherit;
  font-size: 15px;
  color: #c7c7c7;
}

input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-family: inherit;
  font-size: 15px;
  color: #c7c7c7;
}
.alter_button {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #007fff;
  cursor: pointer;
}
.alter_action {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.save {
  color: #007fff;
  margin-right: 10px;
  cursor: pointer;
}
.cancel {
  cursor: pointer;
}
.upload_box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
#img_upload {
  display: none;
}
.upload_img {
  background-color: #007fff;
  color: #fff;
  border-radius: 2px;
  border: none;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
.upload_img:hover {
  background-color: #076dd3;
}
</style>