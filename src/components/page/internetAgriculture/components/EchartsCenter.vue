<template>
  <div class="echartsCenter">
    <div v-show="!ifShowtable" id="myChart" :style="{width: '100%', height: 'calc(100vh - 80px)'}"></div>
    <div v-show="ifShowtable">
      <p>{{tableTitle}}</p>
      <el-table :data="co2Data" style="width: 100%">
        <!-- <el-table-column prop="id" label="ID" align="center">
        </el-table-column> -->
        <el-table-column prop="deviceSn" label="设备SN号" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="主机SN号" label="主机SN号" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="deviceType" label="设备类型" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="recordTime" label="记录时间" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="String(tableType) === '2'" prop="ppm" label="二氧化碳浓度" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="String(tableType) === '1'" prop="intensity" label="光照强度" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="String(tableType) === '3'" prop="waterTemperature" label="水温" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="(String(tableType) === '4') || (String(tableType) === '5')" prop="temperature" label="空气温度值" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column v-if="(String(tableType) === '4') || (String(tableType) === '5')" prop="humidity" label="空气湿度值" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div style="text-align: right; margin-top:20px;">
        <el-pagination background layout="prev, pager, next" :page-size="page.size" :current-page="page.currentPage" @current-change="currentChange" :total="page.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/common/bus'
export default {
  data(){
    return{
      tableTitle:'',
      tableType:1,
      ifShowtable:false,
      co2Data:[],
      xdatas:[],
      ydatas:[],
      echartsTitle:'光照',
      page:{
        total:0,
        currentPage:1,
        size:8
      }
    };
  },
  created(){
    bus.$on('showTable',data => {
      if(String(data) === '1'){
        this.tableTitle = '光照历史数据'
      }else if(String(data) === '2'){
        this.tableTitle = 'CO2浓度历史数据'
      }else if(String(data) === '3'){
        this.tableTitle = '水温历史数据'
      }else if((String(data) === '4')||(String(data) === '5')){
        this.tableTitle = '空气温度和湿度历史数据'
      }
      
      this.$set(this.page,'total',0)
      this.$set(this.page,'currentPage',1)
      this.tableType = data
      this.getDioxideList()
      this.ifShowtable = true 
    })
    bus.$on('changeData', target => {  
      let JsonData = JSON.parse(target)
      this.echartsTitle = JsonData.title
      this.xdatas = JsonData.xdatas
      this.ydatas = JsonData.ydatas
      this.drawLine(); 
      this.ifShowtable = false
      }); 
  },
  mounted () {
    // this.drawLine();
  },
  methods: {
    getDioxideList(){
      // debugger
      let that = this
      let params = {
        pageNum:that.page.currentPage,
        pageSize:that.page.size
      }
      let url = '/illumination/list'
      if(String(that.tableType) === '1'){
        url = '/illumination/list'
      }else if(String(that.tableType) === '2'){
        url = '/dioxide/list'
      }else if(String(that.tableType) === '3'){
        url = '/stroma/list'
      }else if((String(that.tableType) === '4') || (String(that.tableType) === '5')){
        url = '/temperatureHumidity/list'
      }
      that.$api.getDioxideList(params,url)
            .then(res => {
            let {code,data,msg} = res.data
            let { total, rows } = data
            if(code === '0000'){
              debugger
                that.page.total = total
                that.co2Data = rows
            }else{
                that.$message.error(msg)
            }
            }).catch(err => { 
                that.$message.error(err)
            })
    },
    currentChange(val){
      this.$set(this.page, 'currentPage', val);
      this.getDioxideList()
    },
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
}
</style>