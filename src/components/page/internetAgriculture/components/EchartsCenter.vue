<template>
  <div class="echartsCenter">
    <div id="myChart" :style="{width: '100%', height: 'calc(100vh - 80px)'}"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      echartsTitle:'光照'
    };
  },
    mounted () {
    this.drawLine();
  },
    methods: {
    drawLine () {
      const echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('myChart'));
      myChart.setOption({
        title: {
          text: this.echartsTitle,
          textStyle:{
            color:'#fff'
          }
        },
        textStyle:{color:"#fff"},
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          nameTextStyle:{
            color:'#fff',
          },
          axisLine:{
            lineStyle:{
              color:'#fff'
            }
          }
        },
        yAxis: {
            type: 'value',
            nameTextStyle:{
              color:'#fff',
            },
            axisLine:{
              lineStyle:{
                color:'#fff'
              }
            }
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            lineStyle:{
              color:'#fff'
            }
        }]
      });
    }
  }
}
</script>

<style lang="less" scoped>
.echartsCenter{
  // background-color: #fff;
  color:#fff;
  border-radius: 8px;
  padding:10px;
}
</style>