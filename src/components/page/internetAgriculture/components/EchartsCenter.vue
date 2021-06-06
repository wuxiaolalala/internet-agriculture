<template>
  <div class="echartsCenter">
    <div id="myChart" style="width: 1000px;height:500px;"></div>
  </div>
</template>

<script>
import bus from '@/components/common/bus'
export default {
  data(){
    return{
      tableTitle:'',
      xdatas:[],
      ydatas:[],
      echartsTitle:'光照'
    };
  },
  created(){
    bus.$on('changeData', target => {  
      let JsonData = JSON.parse(target)
      this.echartsTitle = JsonData.title
      this.xdatas = JsonData.xdatas
      this.ydatas = JsonData.ydatas
      this.drawLine(); 
      // this.ifShowtable = false
      }); 
  },
  mounted () {
    // this.drawLine();
    
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
          data: this.xdatas,
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
            data: this.ydatas,
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
.echartsCenter {
    // background-color: #fff;
    color: #fff;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    height: 100vh;
}
</style>