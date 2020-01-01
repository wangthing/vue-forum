<template>
  <div class="activityDetail_box">
    <!-- 活动标题区 -->
    <div class="detail_title">{{activityDrtailInf.title}}</div>
    <!-- 活动中部信息区 -->
    <div class="detail_content_box">
      <!-- 活动图片 -->
      <div class="detail_img">
        <img :src="activityDrtailInf.imgUrl" class="img_style" />
      </div>
      <!-- 活动时间，地点，主办方等 -->
      <div class="activity_date_site">
        <div class="detailInf_box1">开始时间：{{activityDrtailInf.startDate}}</div>
        <div class="detailInf_box1">结束时间：{{activityDrtailInf.endDate}}</div>
        <div class="detailInf_box1">举办地点：{{activityDrtailInf.site}}</div>
        <div class="detailInf_box1">主办方：{{activityDrtailInf.sponsor}}</div>
        <div class="detailInf_box1">报名截止：{{activityDrtailInf.curoffTime}}</div>
        <div class="detailInf_box1">
          <div class="detail_applyButton">立即报名</div>
        </div>
      </div>
    </div>
    <!-- 活动底部介绍，议题区 -->
    <div class="detail_topic_intro_box">
      <div class="detail_intro_box">
        <div class="intro_title">大会介绍</div>
        <div class="intro_content">{{activityDrtailInf.introduce}}</div>
      </div>
      <div class="detail_topic_box">
        <div class="topic_title">大会介绍</div>
        <div class="topic_content">{{activityDrtailInf.topic}}</div>
      </div>
    </div>
    <!-- 相关链接 -->
    <div class="detail_relatedLinks">
      <div class="related_box">
        <div class="related_title">活动组织者</div>
        <div class="related_content">主办方：{{activityDrtailInf.sponsor}}</div>
      </div>
      <div class="related_box">
        <div class="related_title">相关链接</div>
        <div class="related_content">活动官网：{{activityDrtailInf.website}}</div>
      </div>
      <div class="related_box">
        <div class="related_title">分享扩散</div>
        <div class="related_content">
          <img src="../../../static/img/asset-weibo.png" class="share_img" />
          <img src="../../../static/img/asset-weixin.png" class="share_img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 活动相关信息
      activityDrtailInf: {
        id: 1,
        title: "APMCon2017中国应用性能管理大会",
        imgUrl: "../../../static/img/widget-acti.png",
        startDate: "2017-01-01 08:00",
        startWeek: "周五",
        endDate: "2017-01-01 08:00",
        endWeek: "周一",
        site: "深圳市华侨城洲际酒店",
        sponsor: "infoQ", // 主办方
        curoffTime: "85天15时16分10秒", // 截止,
        website: "infoQ.com", // 活动官网
        introduce:
          "实践第一、案例为主" + //大会介绍
          "ArchSummit 全球架构师峰会是 InfoQ 中国团队推出的面向高端技术管理者、架构师的技术大会，参会者中超过 50% 拥有 8 年以上的工作经验。ArchSummit 秉承“实践第一、案例为主”的原则，展示新技术在行业应用中的最新实践，技术在企业转型中的加速作用，帮助企业技术管理者、CTO、架构师做好技术选型、技术团队组建与管理，并确立技术对于产品和业务的关键作用。",
        topic: "#############" // 议题简介
      }
    };
  }
};
</script>
<style>
body {
  background-color: #f4f5f5;
}
.activityDetail_box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 75vw;
  margin: 100px auto;
}
.detail_title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  line-height: 36px;
  font-weight: 800;
}
.detail_content_box {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 300px;
  margin-bottom: 10px;
}
.detail_img {
  width: 45%;
}
.img_style {
  height: 100%;
  margin: 0;
}
.activity_date_site {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 55%;
  height: 100%;
  background-color: #fff;
  padding: 0 20px;
}
.detailInf_box1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
  line-height: 28px;
}
.detail_applyButton {
  padding: 7px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #ea4a36;
  border: 1px solid #e8351f;
  cursor: pointer;
}
.detail_topic_intro_box {
  width: 73%;
  font-size: 14px;
  margin-right: 2%;
}
.detail_intro_box,
.detail_topic_box {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.intro_title,
.topic_title {
  padding: 0 10px;
  margin: 5px 0;
  font-size: 18px;
  border-left: 2px solid #e64620;
  color: #e64620;
}
.intro_content,
.topic_content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 10px;
  margin: 5px 0;
  font-size: 15px;
}
.detail_relatedLinks {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.related_box {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 0;
  margin-bottom: 10px;
}
.related_title {
  padding: 0 10px;
  margin: 5px 0;
  font-size: 18px;
  border-left: 2px solid #e64620;
  color: #e64620;
}
.related_content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 12px;
  margin: 5px 0;
  font-size: 14px;
  line-height: 26px;
}
.share_img {
  margin-right: 10px;
  cursor: pointer;
}
</style>
