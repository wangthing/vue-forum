<template>
  <div class="activityDis_box">
    <!-- 头部标题栏 -->
    <div class="header_activity_bar">
      <div
        :class="activeTypeIndex == index ? 'activity_bar_title_active':'activity_bar_title'"
        v-for="(item,index) in activityTypeList"
        :key="item.id"
        @click="changeSelectItem(index)"
      >{{item.typeName}}</div>
    </div>
    <!-- 中部活动展示区 -->
    <div class="middle_activity_content">
      <div class="activity_box" v-for="item in activityList" :key="item.id">
        <div class="activity_img">
          <img :src="item.imgUrl" />
        </div>
        <div class="activity_title">{{item.title}}</div>
        <div class="activity_footer">
          <div class="activity_date_city">
            <div>时间：{{item.date}} {{item.week}}</div>
            <div>城市：{{item.city}}</div>
          </div>
          <div class="activity_apply_box">
            <div class="activity_apply">立即报名</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 激活bar的序号
      activeTypeIndex: 0,
      // 最新活动     （以后可能加入最热活动，等等）
      activityTypeList: [
        {
          id: 0,
          typeName: "最新活动"
        }
      ],
      // 活动列表
      activityList: [
        {
          id: 0,
          imgUrl: "../../../static/img/widget-acti.png",
          title: "APMCon2017中国应用性能管理大会",
          date: "2017-07-29",
          week: "周六",
          city: "广州"
        },
        {
          id: 1,
          imgUrl: "../../../static/img/widget-acti.png",
          title: "APMCon2017中国应用性能管理大会",
          date: "2017-07-29",
          week: "周六",
          city: "广州"
        },
        {
          id: 2,
          imgUrl: "../../../static/img/widget-acti.png",
          title: "APMCon2017中国应用性能管理大会",
          date: "2017-07-29",
          week: "周六",
          city: "广州"
        },
        {
          id: 3,
          imgUrl: "../../../static/img/widget-acti.png",
          title: "APMCon2017中国应用性能管理大会",
          date: "2017-07-29",
          week: "周六",
          city: "广州"
        },
        {
          id: 4,
          imgUrl: "../../../static/img/widget-acti.png",
          title: "APMCon2017中国应用性能管理大会",
          date: "2017-07-29",
          week: "周六",
          city: "广州"
        }
      ]
    };
  },
  methods: {
    changeSelectItem(index) {
      this.activeTypeIndex = index;
    }
  }
};
</script>
<style>
body {
  background-color: #f4f5f5;
}
.activityDis_box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 75vw;
  margin: 100px auto;
}
.header_activity_bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}
.activity_bar_title_active {
  font-size: 15px;
  font-weight: bold;
  border: 0;
  border-bottom: 2px solid #e64620;
  color: #000;
  padding: 15px;
  cursor: pointer;
}
.activity_bar_title {
  font-size: 15px;
  font-weight: bold;
  border: 0;
  color: #000;
  padding: 15px;
  cursor: pointer;
}
.middle_activity_content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
 text-align: left;
}
.activity_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 24%;
  margin-right: 1%;
  background-color: #fff;
  margin-bottom: 10px;
}
.activity_img {
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
}
.activity_title {
  padding-left: 6px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 16px;
}
.activity_footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 6px;
}
.activity_date_city {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  font-size: 12px;
  color: #333333;
}
.activity_apply_box {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.activity_apply {
  padding:6px 6px;
  font-size: 12px;
  background-color: #e64620;
  color: #fff;
  border: 0;
  border-radius: 5px;
  line-height: 13px;
  cursor: pointer;
}
</style>