<template>
    <div id="app">
        <div id="myChart" :style="{width:'400px',height:'400px',marginTop:'0',margin:'0 auto'}"></div>
    </div>
</template>

<script>
export default {
    name:'pie',
    data () {
        return{

        }
    },
    mounted(){
        this.drawLine()
    },
    methods: {
        drawLine(){
            let myChart = this.$echarts.init(document.getElementById("myChart"))
            // 配置
            myChart.setOption({
                    series:{
                    name:"访问来源",
                    type:"pie", // 设置图表类型为饼图
                    //roseType: 'angle', 配置成南丁格尔图
                    radius:"55%", // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    itemStyle:{
                        normal:{
                            shadowBlur:  200,
                            shadowColor: 'rgba(120,12,125,0.5)'
                        }
                    },
                    data:[
                        {value:235,name:"视频广告"},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}
                    ]
                }
            })
        }
    },
}
</script>