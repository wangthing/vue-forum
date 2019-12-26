<template>
  <div id="app">
    <div id="myChart" :style="{width:'1000px',height:'600px',marginTop:'200px',margin:'0 auto'}"></div>
    
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    
  },
  mounted () {
      // this.drawLine()
  },
    methods: {
        drawLine () {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById("myChart"))
         
          // 绘制图表
          myChart.setOption({
            title:{text:"在Vue中使用Echarts"},
            tooltip:{},
            // 全图默认背景
            backgroundColor: 'rgba(0,156,0,0)',
            // 默认色板
            color: ['#00fa9a','#ffd700','#6699FF','#ff6666','#3cb371','#b8860b',
            '#30e0e0','#1e90ff','#ff6347','#7b68ee','#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
                    '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'],
            xAxis:{
              data:["HTML","CSS","JavaScript","EcmaScript","Node.js"]
            },
            yAxis:{},
            series:[{
              name:"skills",
              "type":"bar",
              data:[52,36,35,-6,56]
            }]
          })

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
