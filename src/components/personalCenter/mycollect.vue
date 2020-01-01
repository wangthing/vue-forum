<template>
  <div>
    <div class="collect_box" v-for="item in myCollectList" :key="item.id">
      <div class="collect_thumbup">
        <!-- <i class="iconfont">&#xe63a;</i>
        <div class="thumbup_num">{{item.thumbup}}</div> -->
        <i class="iconfont">&#xe618;</i>
      </div>
      <div class="content"><a :href="'#/detail?id='+item.id" target="_blank">{{item.title}}</a></div>
      <div class="author_inf">
        <img class="author_img" src="../../../static/img/widget-photo.png" />
        <div class="authorName">{{item.author?item.author:'小锁君少'}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myCollectList: [
        {
          id: 0,
          content:
            "面试说通过了要回去等offer，现在都两周了，还说在ceo审批，两天联系hr一次，都说还在等审批什么情况？工资什么的都谈好了，也要了工资证明。面试说通过了，要回去等offer，现在都两周了还说在ceo审批，两天联系hr一次，都说还在等审批，什么情况？？工资什么的都谈好了，也要了工资证明。也工资证明。",
          thumbup: 7, // 点赞数
          author: "本杰明"
        },
        {
          id: 1,
          content:
            "面试说通过了要回去等offer，现在都两周了，还说在ceo审批，两天联系hr一次，都说还在等审批什么情况？工资什么的都谈好了，也要了工资证明。面试说通过了，要回去等offer，现在都两周了还说在ceo审批，两天联系hr一次，都说还在等审批，什么情况？？工资什么的都谈好了，也要了工资证明。也工资证明。",
          thumbup: 8, // 点赞数
          author: "本杰明"
        }
      ]
    };
  },
  mounted () {
      this.getMyActivity()
  },
  methods: {
    getMyActivity () {

      this.$http({
        method:"POST",
        url:"http://192.168.0.188:9006/user/aritle",
        headers:{
          "Content-Type": "application/json;charset=urf-8",
          'Authorization':'Bearer '+this.$store.state.token
        },
        data:{
          "star":"21"
        } 
      
      })
      .then((res) => {
        let data = res.data
        console.log(data);
        if(data.code == 20000){
          this.myCollectList = data.data
        }
      }).catch((err) => {
        
      })
    }
  },
};
</script>
<style>
.udbar a:hover{
  text-decoration: underline;
}
.collect_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 16px 0;
  font-size: 13px;
  border-bottom: 1px solid #e8e8e8;
}
.collect_thumbup {
  width: 50px;
  border: 1px solid;
  color: #999;
  border-radius: 5px;
  margin-right: 20px;
  height: 40px;
}
.thumbup_num {
  width: 100%;
  border-bottom: 1px solid #999;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 70%;
  margin-right: 20px;

  text-align: left;
  /* 超出三行省略 */
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  

}
.author_inf {
  display: flex;
  flex-direction: column;
}
.author_img {
  border-radius: 30%;
}
.authorName {
  line-height: 30px;
  color: #28a3ef;
}
</style>