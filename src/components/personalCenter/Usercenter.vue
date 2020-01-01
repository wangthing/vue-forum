<template>
  <div class="usercenter_box">
    <!-- 左边区域 -->
    <div class="left_content">
      <div class="userInf">
        <div class="headPhoto"></div>
        <div class="username">
          <p>{{username}}</p>
          <h3>你是从事什么职业</h3>
          <h3>你的个人介绍</h3>
        </div>
        <div class="editInf"  @click="changeSelectItem(4)"><router-link :to="'mysetting'">编辑个人资料</router-link></div>
      </div>
      <div class="userDynamic">
        <div class="udbar" ref="udbar">
          <div
            :class="activeClass == index ? 'udbaritem_active':'udbaritem'"
            v-for="(item,index) in udbar"
            :key="item.id"
            @click="changeSelectItem(index)"
          >
            <router-link :to="item.routeName">{{item.title}}</router-link>
          </div>
        </div>
        <div class="udContent">
          <router-view />
        </div>
      </div>
    </div>
    <!-- 右边区域 -->
    <div class="right_content">
      <div class="attention">
        <div class="attentionto">
          <div>关注了</div>
          <div class="attention_num">{{attention_num}}</div>
        </div>
        <div class="beattention">
          <div>关注者</div>
          <div class="attention_num">{{beattention_num}}</div>
        </div>
      </div>

      <div class="collection">
        <div class="collection_item">
          <span>收藏集</span>
          <span class="collection_num">{{collection_num}}</span>
        </div>
        <div class="collection_item">
          <span>关注标签</span>
          <span class="collection_num">{{attention_tag}}</span>
        </div>
        <div class="collection_item">
          <span>加入于</span>
          <span class="collection_num">{{join_date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import myactive from './myactive'
// import myanswer from './myanswer'
// import myattention from './myattention'
// import mycollect from './mycollect'
// import myquestion from './myquestion'
// import mysetting from './mysetting'
// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)

// var router = new Router({
    
//     routes:[
//       {
//         path: '/usercenter/myactive',
//         name:'myactive',
//         component:myactive
//       }
//     ]
  
// })

export default {
  data() {
    return {
      scrolltop: null, // 距离顶部高度
      username: "芒果与你",
      userinfo:[],
      activeClass: 0,
      attention_num: 4, // 我关注的人数
      beattention_num: 5, // 我被关注的人数
      collection_num: 10, // 收藏集
      attention_tag: 5, // 关注标签
      join_date: "2019-10-15", // 加入日期
      udbar: [
        {
          id: 0,
          title: "我的回答",
          routeName: "myanswer",
          num: 0
        },
        {
          id: 1,
          title: "我的提问",
          routeName: "myquestion",
          num: 0
        },
        // {
        //   id: 2,
        //   title: "个人动态",
        //   routeName: "myactive",
        //   num: 0
        // },
        {
          id: 3,
          title: "我的关注",
          routeName: "myattention",
          num: 0
        },
        {
          id: 4,
          title: "我的收藏",
          routeName: "mycollect",
          num: 0
        },
        {
          id: 5,
          title: "账户设置",
          routeName: "mysetting",
          num: 0
        }
      ]
    };
  },
  
  methods: {
    changeSelectItem(index) {
      this.activeClass = index;
    
    },
    getUSerInfo () {
      this.$http({
        method:"get",
        url:"http://192.168.0.188:9006/user",
        headers:{
          "Content-Type":"application/json;charset=utf-8"
        }
      })
      .then((res) => {
        let data = res.data.data
        console.log(data);
        if(res.data.code == 20000){
          this.userinfo = data
          this.$store.commit("setValue",[{
            name:"userinfo",
            value:data
          }])
        }
      }).catch((err) => {
        
      })
    }
  },
  mounted () {
    this.getUSerInfo()
    
    if(window.location.href.indexOf("myanswer")==-1){
      this.$router.push("myanswer")
    }
    
  }
 
  
};
</script>
<style>
body {
  background-color: #f4f5f5;
}
.usercenter_box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 70vw;
  margin: 20px auto;
  min-height: 600px;
}
.left_content,.right_content{
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
}
.left_content {
  width: 70%;
}
.right_content {
  width: 30%;
}
.userInf,
.userDynamic {
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 35px 35px 35px 35px;
  margin: 10px;
  position: relative;
  background-color: #fff;
}
.userInf {
  flex-direction: row;
}
.userDynamic {
  padding-bottom: 0;
}
.attention,
.collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  padding: 35px 35px 35px 35px;
  margin: 10px;
  position: relative;
}
.collection_item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid #e8e8e8;
}
.collection_num {
  position: absolute;
  right: 0;
}
.collection {
  padding: 0;
  height: 150px;
}
.attention {
  background-color: #fff;
}
.attentionto,
.beattention {
  flex: 1;
  height: 50px;
}
.attentionto {
  border-right: 1px solid #e8e8e8;
}
.attention_num {
  font-weight: 600;
}

.headPhoto {
  background-image: url("/static/img/widget-photo.png");
  flex: 0 0 auto;
  margin-right: 2.4rem;
  width: 5rem;
  height: 5rem;
  background-color: #f9f9f9;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.username {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #000;
  text-align: left;
}
.username h3{
  margin-top: 6px;
  font-size: 14px;
  color: #72777b;
}
.editInf {
  position: absolute;
  bottom: 40px;
  right: 50px;
  border: 1px solid #007fff;
  border-radius: 5px;
  color: #007fff;
  cursor: pointer;
  font-size: 18px;
  font-size: 1.1rem;
}
.editInf a{
  padding: 5px;
  display: inline-block;
  height: 100%;
  
}
.udbar {
  display: flex;
  
  flex-direction: row;
  border-bottom: 1px solid #e8e8e8;
}
.udbar a{
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 4px 0;
  text-align: center;
  line-height: 1;
  
}
/* 悬停在顶部样式 */
.udbar_float {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e8e8e8;
}
.udbaritem_active {
  box-shadow: inset 0 -2px 0 #3780f7;
  margin: 4px 12px;
  font-size: 15px;
  font-weight: 500;
  color: #3780f7;
}
.udbaritem {
  margin: 4px 12px;
  /* padding: 5px 20px; */
  font-size: 15px;
  font-weight: 500;
  color: #000;
}
a {
  color: #000;
}


</style>