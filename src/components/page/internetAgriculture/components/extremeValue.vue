<template>
  <div class="extremeValue">
    <div style="width:70%;">
      <div id="extremeChart" style="width: 1000px;height:500px;"></div>
    </div>
    <div style="width:30%;">
      <div style="margin-bottom:20px;">
        <el-select v-model="timeValue" placeholder="请选择" @change="handleChangeTime">
          <el-option label="月最值" value="getMaxMinDataByMonth">
          </el-option>
          <el-option label="周最值" value="getMaxMinDataByWeek">
          </el-option>
        </el-select>
      </div>

      <el-select v-model="historyValue" placeholder="请选择" @change="handleChangeHistory">
        <el-option v-for="item in historyList" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>

  </div>
</template>

<script>
import bus from '@/components/common/bus'

export default {
  data(){
    return{
      timeValue:'getMaxMinDataByMonth',
      historyValue:1,
      xdatas:[],
      ydatasmax:[],
      ydatasmin:[],
      echartsTitle:'光照最值',
      historyList:[
        {
          value: 1,
          label: '光照'
        },
        {
          value: 2,
          label: 'CO2浓度'
        },
        {
          value: 3,//1 光照；2 CO2浓度；3 水温；4 空气温度；5 空气湿度
          label: '水温'
        },
        {
          value: 4,
          label: '空气温度'
        },
        {
          value: 5,
          label: '空气湿度'
        }
      ],
    }
  },
  created(){
    bus.$on('changeExtreme', target => {  
      // let JsonData = JSON.parse(target)
      // this.echartsTitle = JsonData.title
      // this.xdatas = JsonData.xdatas
      // this.ydatas = JsonData.ydatas
      // debugger
      this.drawLine(); 
      // this.ifShowtable = false
      });
    // debugger
    this.handleChangeHistory(1)
    // this.drawLine()
  },
  methods:{
    handleChangeTime(data){
      this.handleChangeHistory(1)
    },
    handleChangeHistory(data){
      // debugger
      let title = this.timeValue === 'getMaxMinDataByMonth' ? '月':'周'
      this.echartsTitle = this.historyList[Number(data) -1].label + title + '最值'
      let that = this
      let params = {
        type:this.historyValue
      }
      that.$api[this.timeValue](params)
        .then(res => {
        let {code,data,msg} = res.data
        if(code === '0000'){
          // debugger
          let xdatas = []
          let ydatasmax = []
          let ydatasmin = []
          let newList = data.map(item => {
            let ele = JSON.parse(JSON.stringify(item))
            // ele.month = `${ele.month}`
            xdatas.push(`${ele.month || ele.week}${this.timeValue === 'getMaxMinDataByMonth'? '月':''}`)
            ydatasmax.push(ele.maxVal)
            ydatasmin.push(ele.minVal)
            return ele
          })
         that.xdatas = xdatas;
         that.ydatasmax = ydatasmax;
         that.ydatasmin = ydatasmin;
         bus.$emit('changeExtreme',data)
        }else{
            that.$message.error(msg)
        }
        }).catch(err => { 
            that.$message.error(err)
        })
    },
    drawLine () {
      const echarts = require('echarts');
      var extremeChart = echarts.init(document.getElementById('extremeChart'));
      extremeChart.setOption({
        title: {
          text: this.echartsTitle,
          textStyle:{
            color:'#fff'
          }
        },
        legend: {
          data: ['最大值', '最小值'],
          textStyle:{
            color:'#fff',
          }
        },
        textStyle:{color:"#fff"},
        tooltip: {},
        xAxis: {
          type: 'category',
          data: this.xdatas,
          boundaryGap: false,
          // nameTextStyle:{
          //   color:'#fff',
          // },
          axisLine:{
            // lineStyle:{
            //   color:'#fff'
            // }
          }
        },
        yAxis: {
            type: 'value',
            // nameTextStyle:{
            //   color:'#fff',
            // },
            // axisLine:{
            //   lineStyle:{
            //     color:'#fff'
            //   }
            // }
        },
        series: [{
            data: this.ydatasmax,
            name: '最大值',
            stack: '最值',
            type: 'line',
            // lineStyle:{
            //   color:'#fff'
            // }
        },
        {
            data: this.ydatasmin,
            name: '最小值',
            stack: '最值',
            type: 'line',
            // lineStyle:{
            //   color:'#fff'
            // }
        }
        ]
      });
    }
  }
}
</script>

<style lang="less" scoped>
.extremeValue {
    color: #fff;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    height: 100vh;
    display: flex;
}
</style>