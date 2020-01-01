<template>
  <div>
    <div class="attention_box" v-for="item in myAttentionList" :key="item.id">
      <div class="question_left">
        <div class="questionName">{{item.qquestionName}}</div>
        <div class="relatedTech">
          <div
            class="relatedTech_box"
            v-for="inneritem in item.relatedTechnology"
            :key="inneritem.id"
          >{{inneritem.name}}</div>
        </div>
      </div>

      <div class="question_right">
        <div class="attentionNum">{{item.attentionNum}} 关注</div>
        <!-- <div class="cancelAttention">取消关注</div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myAttentionList: [
        {
          id: 0,
          qquestionName:
            "css中设置元素为float，不是不影响其他元素的排版吗，如下图为什么影响了？",
          attentionNum: 7, // 关注人数
          relatedTechnology: [
            {
              id: 0,
              name: "css"
            },
            {
              id: 1,
              name: "html"
            },
            {
              id: 2,
              name: "javascript"
            }
          ]
        },
        {
          id: 1,
          qquestionName:
            "css中设置元素为float，不是不影响其他元素的排版吗，如下图为什么影响了？",
          attentionNum: 7, // 关注人数
          relatedTechnology: [
            {
              id: 0,
              name: "css"
            },
            {
              id: 1,
              name: "html"
            },
            {
              id: 2,
              name: "javascript"
            }
          ]
        },
        {
          id: 2,
          qquestionName:
            "css中设置元素为float，不是不影响其他元素的排版吗，如下图为什么影响了？",
          attentionNum: 7, // 关注人数
          relatedTechnology: [
            {
              id: 0,
              name: "css"
            },
            {
              id: 1,
              name: "html"
            },
            {
              id: 2,
              name: "javascript"
            }
          ]
        },
        {
          id: 3,
          qquestionName:
            "css中设置元素为float，不是不影响其他元素的排版吗，如下图为什么影响了？",
          attentionNum: 7, // 关注人数
          relatedTechnology: [
            {
              id: 0,
              name: "css"
            },
            {
              id: 1,
              name: "html"
            },
            {
              id: 2,
              name: "javascript"
            }
          ]
        },
        {
          id: 4,
          qquestionName:
            "css中设置元素为float，不是不影响其他元素的排版吗，如下图为什么影响了？",
          attentionNum: 7, // 关注人数
          relatedTechnology: [
            {
              id: 0,
              name: "css"
            },
            {
              id: 1,
              name: "html"
            },
            {
              id: 2,
              name: "javascript"
            }
          ]
        },
        {
          id: 5,
          qquestionName:
            "css中设置元素为float，不是不影响其他元素的排版吗，如下图为什么影响了？",
          attentionNum: 7, // 关注人数
          relatedTechnology: [
            {
              id: 0,
              name: "css"
            },
            {
              id: 1,
              name: "html"
            },
            {
              id: 2,
              name: "javascript"
            }
          ]
        },
        {
          id: 6,
          qquestionName:
            "css中设置元素为float，不是不影响其他元素的排版吗，如下图为什么影响了？",
          attentionNum: 7, // 关注人数
          relatedTechnology: [
            {
              id: 0,
              name: "css"
            },
            {
              id: 1,
              name: "html"
            },
            {
              id: 2,
              name: "javascript"
            }
          ]
        },
        {
          id: 7,
          qquestionName:
            "css中设置元素为float，不是不影响其他元素的排版吗，如下图为什么影响了？",
          attentionNum: 7, // 关注人数
          relatedTechnology: [
            {
              id: 0,
              name: "css"
            },
            {
              id: 1,
              name: "html"
            },
            {
              id: 2,
              name: "javascript"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
.attention_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 16px 0;
  font-size: 13px;
  border-bottom: 1px solid #e8e8e8;
}
.question_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.questionName {
  margin-bottom: 5px;
}
.relatedTech {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.relatedTech_box {
  border: 0;
  border-radius: 4px;
  background: #e1ecf4;
  color: #0077cc;
  padding: 3px;
  margin-right: 10px;
}
.question_right {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
}
.cancelAttention {
  margin-top: 3px;
  padding: 3px 21px;
  font-family: "Microsoft Yahei";
  font-size: 14px;
  border: 1px solid #ed6a5a;
  color: #ed6a5a;
  cursor: pointer;
}
.cancelAttention:hover {
  color: #fff;
  background-color: #ed6a5a;
}
</style>