<template>
  <div id="question">
    <div class="tap_nav">
      <div>
        <span class="tap_item_active">首页</span>

        <span class="tap_item">Php</span>
        <span class="tap_item">Javascript</span>
        <span class="tap_item">Python</span>

         <div class="labelControl"><a href="#/allTags">标签管理</a></div>
      </div>
    </div>
    <div class="bottom_box">
      <div class="left_box">
        <div class="header_res_bar">
          <div
            :class="activeTypeIndex == index ? 'res_bar_title_active':'res_bar_title'"
            v-for="(item,index) in responseTypeList"
            :key="item.id"
            @click="changeSelectItem(index)"
          >{{item.typeName}}</div>
          
        </div>
        <!-- 回答内容区 -->
        <div class="left_content">
          <div class="left_content_box" v-for="item in view_responseList" :key="item.id">
            <!-- 有用和回答数区 -->
            <div class="userful_res_num">
              <div class="userful_num">
                <div class="userful_num_style" @click="thumup" >{{item.thumbup?item.thumbup:Math.floor(Math.random()*102)}}</div>
                <div><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></div>
              </div>
              <div class="res_num">
                <div class="res_num_style">{{item.reply?item.reply:Math.floor(Math.random()*102)}}</div>
                <div><i class="fa fa-commenting" aria-hidden="true"></i></div>
              </div>
            </div>
            <!-- 问题主要信息区 -->
            <div class="question">
              <div class="res_user">
                <div class="res_username">{{item.replyname?item.replyname:"前端小狗"}}</div>
                <div>{{item.replytime?item.replytime:"三分钟前"}}</div>
              </div>
              <div class="res_question"><router-link :to="'/questionDetail?id='+item.id">{{item.title}}</router-link></div>
              <div class="res_relatedTech">
                <div
                  class="tech_item"
                  v-for="inneritem in item.labels"
                  :key="inneritem.id"
                >{{inneritem.labelname}}</div>
              </div>
            </div>
            <!-- 浏览量，日期等发表问题者信息区 -->
            <div class="req_user_inf">
              <div class="req_user_dateil">
                浏览量 {{item.visits+12}} 、 发布于： {{item.createtime&&(item.createtime[0]+"年"+item.createtime[1]+"月"+item.createtime[2]+"日"+item.createtime[3]+"时")}} 
                <p></p>
                来自
                <span
                  class="req_username" :id="item.userid"
                >{{item.nickname}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right_box">
        <!-- 发布问题区 -->
        <div class="submitQuestion">
          <div class="subtitle">今天，有什么好东西要和大家分享么？</div>
          <div class="subQuestionButton">发布问题</div>
        </div>
        <!-- 热门标签区 -->
        <div class="hottag">
          <div class="hotTapTitle">热门标签</div>
          <div class="hotTagContent">
            <div class="hotTagbox" v-for="item in hot_tagList" :key="item.id"><span>{{item.labelname}}</span></div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    this.view_responseList = this.new_responseList;
  },
  data() {
    return {
      activeTypeIndex: 0, // 激活样式的bar
      hot_tagList: [
        {
          id: 0,
          name: "Php"
        },
        {
          id: 1,
          name: "Java"
        },
        {
          id: 2,
          name: "JavaScript"
        }
      ],
      responseTypeList: [
        {
          id: 0,
          typeName: "最新回答"
        },
        {
          id: 1,
          typeName: "最热回答"
        },
        {
          id: 2,
          typeName: "等待回答"
        }
      ],
      // 渲染回答
      view_responseList: null,
      // 最新回答
      new_responseList: [
        {
          id: 0,
          question: "springMVC的controller接收json数据失败",
          res_user: "牛奶糖",
          req_user: "毕鹏",
          visit_num: 15, // 浏览量
          req_datetime: "2017-07-05 15:09", // 提出问题的日期时间
          userful_num: 12, // 有用数
          res_num: 9, // 回答数
          lateTimeRes: "3分钟前回答", // 多少时间之前回复的
          relatedTechnologyList: [
            {
              id: 1,
              name: "Php"
            },
            {
              id: 2,
              name: "Javascript"
            }
          ]
        },
        {
          id: 1,
          question: "springMVC的controller接收json数据失败",
          res_user: "牛奶糖",
          req_user: "毕鹏",
          visit_num: 15, // 浏览量
          req_datetime: "2017-07-05 15:09", // 提出问题的日期时间
          userful_num: 12, // 有用数
          res_num: 9, // 回答数
          lateTimeRes: "3分钟前回答", // 多少时间之前回复的
          relatedTechnologyList: [
            {
              id: 1,
              name: "Php"
            },
            {
              id: 2,
              name: "Javascript"
            }
          ]
        }
      ],
      // 最热回答
      hot_responseList: [
        {
          id: 0,
          question: "springMVC的controller接收json数据失败",
          res_user: "牛奶糖",
          req_user: "毕鹏",
          visit_num: 15, // 浏览量
          req_datetime: "2017-07-05 15:09", // 提出问题的日期时间
          userful_num: 11, // 有用数
          res_num: 9, // 回答数
          lateTimeRes: "3分钟前回答", // 多少时间之前回复的
          relatedTechnologyList: [
            {
              id: 1,
              name: "Php"
            },
            {
              id: 2,
              name: "Javascript"
            }
          ]
        },
        {
          id: 1,
          question: "springMVC的controller接收json数据失败",
          res_user: "牛奶糖",
          req_user: "毕鹏",
          visit_num: 12, // 浏览量
          req_datetime: "2017-07-05 15:09", // 提出问题的日期时间
          userful_num: 12, // 有用数
          res_num: 9, // 回答数
          lateTimeRes: "3分钟前回答", // 多少时间之前回复的
          relatedTechnologyList: [
            {
              id: 1,
              name: "Php"
            },
            {
              id: 2,
              name: "Javascript"
            }
          ]
        }
      ],
      // 等待回答
      wait_responseList:[],
      allItems:[]
    };
  },
  watch: {
    new_responseList: function(oldVal, newVal) {
      if(this.activeTypeIndex == 0) this.view_responseList = newVal;
    },
    hot_responseList:function(oldVal,newVal){
      if(this.activeTypeIndex == 1) this.view_responseList = newVal;
    }
  },
  created () {
    this.getAllLabels();
    this.getnewresponseList();
  },
  methods: {
    // 改变激活bar
    changeSelectItem(index) {
      this.activeTypeIndex = index;
      this.getnewresponseList(index)
    },
    getAllLabels () {
      this.$http({
        method:"POST",
        url:"http://192.168.0.188:9004/problem/label",
        headers:{
          'Content-Type':"application/json;charset=utf-8"
        }
      })
      .then((res) =>{
        let labels = res.data.data
        this.hot_tagList = labels;
        this.$store.commit("setValue",[
          {
            name:'allLabels',
            value:labels
          }
        ])
      })
    },
    getnewresponseList (type,id=-1) {
      // id是标签laelid   type是三种回答的排序格式
        switch (type) {
            case 0:
                type= "lastest"
              break;
               case 1:
                type= "mostReply"
              break;
               case 2:
               type=  "waiting"
              break;
          
            default:
              type= "lastest"
              break;
          }
      this.$http({
         method:"POST",
         url:"http://192.168.0.188:9004/problem/"+type,
         data:{
            "labelid":id==-1?undefined:id
         },
         headers:{
          'Content-Type':"application/json;charset=utf-8"
        }
      })
      .then((res) => {
        // console.log(res.data.data);
        this.view_responseList = res.data.data;
          
          
      }).catch((err) => {
        
      })
    },
    thumup (e) {
        
      // this.$http({
      //   method:"PUT",
      //   url:"http://192.168.0.188:9005/spit/thumbup/1211605504841879552"
      // })
    }
  }
};
</script>

<style>
body {
  background-color: #f4f5f5;
}
.question{
  margin-top: 20px;
  
}
.tap_nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: #000;
  font-size: 16px;
  padding: 0 150px;
  /* width: 65vw; */
  margin:12px auto;
}
.tap_nav>div{
  margin: 0 auto;
  position: relative;
  width: 65vw;
  padding: 0;
  display: flex;
  justify-content: flex-start;
}
.tap_item {
  padding-left: 35px;
  padding-right: 35px;
  line-height: 36px;
  height: 100%;
  color: #fff;

  cursor: pointer;
}
.tap_item_active {
  height: 100%;
  padding-left: 35px;
  padding-right: 35px;
  line-height: 36px;
  color: #fff;
  background-color: #e64620;
  cursor: pointer;
}
.bottom_box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 65vw;
  margin: 0 auto;
}
.left_box {
  width: 50vw;
  min-height: 500px;
}
.header_res_bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}
.res_bar_title_active {
  font-size: 15px;
  font-weight: bold;
  border: 0;
  border-bottom: 2px solid #e64620;
  color: #000;
  padding: 15px;
  cursor: pointer;
}
.res_bar_title {
  font-size: 15px;
  font-weight: bold;
  border: 0;
  color: #000;
  padding: 15px;
  cursor: pointer;
}
.left_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.left_content_box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
}
.userful_res_num {
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: relative;
  padding: 10px 12px;
  background-color: #fff;
}
.userful_num {
  flex: 1;
  border: 1px solid #f06c4c;
  padding: 2px 6px;
  border-radius: 4px;
  text-align: center;
  font-size: 10px;
  margin-bottom: 5px;
}
.res_num {
  flex: 1;
  border: 1px solid #5fba7d;
  padding: 2px 6px;
  border-radius: 4px;
  text-align: center;
  font-size: 10px;
}
.userful_num_style {
  color: #f06c4c;
  min-width: 24px;
  font-size: 16px;
  cursor: pointer;
}
.res_num_style {
  min-width: 24px;
  cursor: pointer;
  color: #5fba7d;
  font-size: 16px;
}
.question {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.res_user {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
}
.res_username {
  padding-right: 10px;
  color: #0077cc;
}
.res_question a{
    color: #555;
  font-size: 18px;
}
.res_question {
  color: #555;
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;

  text-align: left;

  /* 超出三行省略 */
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

}
.res_question:hover {
  text-decoration: underline;
}
.res_relatedTech {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.tech_item {
  margin-right: 10px;
  border: 0;
  border-radius: 4px;
  background: #e1ecf4;
  color: #0077cc;
  font-size: 12px;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
}
.req_user_inf {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
}
.req_user_dateil {
  text-align: left;
  width: 100%;
  line-height: 25px;
  font-size: 12px;
  color: #a8a8a8;
}
.req_username {
  color: #4cb9fc;
  cursor: pointer;
}
.req_username:hover {
  text-decoration: underline;
}
.right_box {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 20vw;
}
.submitQuestion {
  padding: 10px 15px 13px 25px;
  border: 1px solid #e64620;
  font-size: 14px;
  background-color: #fff;
  margin-bottom: 10px;
  width: 100%;
  height: 100px;
}
.subQuestionButton {
  margin-top: 6px;
  padding-top: 6px;
  padding-bottom: 6px;
  border: 0;
  background-color: #e64620;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.hottag {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 15px 13px 25px;
  font-size: 14px;
  background-color: #fff;
  padding-left: 15px;
  margin: 0;
  line-height: 18px;
  width: 100%;
}
.hotTapTitle {
  border-left: 2px solid #e64620;
  color: #e64620;
  font-weight: bold;
  padding: 6px 12px 6px 12px;
  margin-bottom: 10px;
}
.hotTagContent {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.hotTagbox {
  padding: 4px 8px;
  margin: 0 10px 10px 0;
  border: 0;
  border-radius: 3px;
  font-size: 14px;
  color: #39739d;
  background: #e1ecf4;
  cursor: pointer;
}
.labelControl{
  margin: 4px;
  cursor: pointer;
  float: right;
  position: absolute;
  right: 20px;

}
.labelControl a{
  display: inline-block;
  height: 100%;
  color: white;
  vertical-align: middle;
}
.labelControl a::after{
   display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}

</style>