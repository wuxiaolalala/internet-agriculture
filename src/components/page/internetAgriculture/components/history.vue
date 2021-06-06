<template>
  <div class="history">
    <div class="history-left">
      <div>
        <p style="color:#fff;">{{tableTitle}}</p>
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
      <!-- <EchartsCenter ref="EchartsCenter"></EchartsCenter> -->
    </div>
    <div class="history-right">
      <div style="color:#fff;margin-bottom:10px; margin-top:10px; font-size:14px;">数据类型选择</div>
      <div>
        <el-select v-model="historyValue" placeholder="请选择" @change="handleChangeHistory">
          <el-option v-for="item in historyList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/components/common/bus'
// import EchartsCenter from './components/EchartsCenter.vue'

export default {
  components:{
    // EchartsCenter
  },
  data(){
    return{
      page:{
        total:0,
        currentPage:1,
        size:8
      },
      tableTitle:'',
      co2Data:[],
      historyValue:1,
      historyList:[{
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
      }],
    }
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
    this.handleChangeHistory(1)
  },
  mounted(){
    // let that = this
    // this.$nextTick(() => {
      // that.$refs.EchartsCenter.ifShowtable = true
    // })
    
  },
  methods:{
    getDioxideList(){
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
    handleChangeHistory(data){
      // this.title = `${this.historyList[data - 1].label}平均值`
      bus.$emit('showTable',data)
      // this.getHistoryData()
    },
  }
}
</script>

<style lang="less" scoped>
.history {
    display: flex;
    .history-left {
        width: 70%;
        height: 100vh;
    }
    .history-right {
        width: 30%;
        height: 100vh;
        padding: 0 20px;
    }
}
</style>