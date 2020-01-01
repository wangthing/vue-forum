<template>
  <div>
    <div class="answer_item" v-for="item in myanswer" :key="item.id">
      <div class="item usefulNum">
        {{item.usefulNum}}
        <span class="usefont">有用</span>
      </div>
      <div class="item"><a :href="'#/detail?id='+item.id" target="_blank">{{item.title}}</a></div>
      <div class="item date">{{item.updatetime&&(item.updatetime[0]+"年"+item.updatetime[1]+"月"+item.updatetime[2]+"日")}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myanswer",
  data() {
    return {
      myanswer: [
        {
          id: 0,
          usefulNum: 10,
          title: "有关PHP初级进阶问题",
          date: "4月6日"
        },
        {
          id: 1,
          usefulNum: 10,
          title: "有关PHP初级进阶问题",
          date: "4月6日"
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

        }
      
      })
      .then((res) => {
        let data = res.data
        
        console.log(data);
        if(data.code == 20000){
          this.myanswer = data.data
        }
      }).catch((err) => {
        
      })
    }
  },
};
</script>
<style>
.answer_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 16px 0;
  font-size: 13px;
  border-bottom: 1px solid #e8e8e8;
}
.item {
  margin: 5px;
}
.date {
  position: absolute;
  right: 20px;
}
.usefulNum {
  padding: 1px 5px;
  margin-right: 10px;
  line-height: 24px;
  margin-top: 2px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #e64620;
  color: #e64620;
}
</style>