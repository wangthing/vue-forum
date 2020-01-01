<template>
  <div class="editor_box">
    <mavon-editor
      style="height:400px;z-index:1"
      v-model="content"
      ref="md"
      @imgAdd="$imgAdd"
      placeholder="请开始您的创作..."
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, file) {
      /*  // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", file);
      axios({
        url: "接口地址",
        method: "post",
        data: formdata,
        headers: {
          Authorization: "Token值"
        }
      }).then(url => {
        if (!url) {
          var imgUrl = "图片基地址" + url.data.data;
          this.refs.md.img2Url(pos, imgUrl);
        } else {
          this.message.error("上传失败");
        }
      }); */
    }
  }
};
</script>

<style>
.editor_box {
  width: 60vw;
  margin: 10px auto;
}
</style>