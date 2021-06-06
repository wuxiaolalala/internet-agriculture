<template>
  <div class="operationRight">
    <div class="operationRight-top">
      <p style="margin-bottom:10px; font-size:14px;">条件查询</p>
      <el-cascader v-model="value" size="mini" clearable :options="options" @change="handleChange"></el-cascader>
      <div v-if="ifShow">
        <div class="custom">
          <div class="myinput">
            <el-select v-model="form.startYear" placeholder="请选择" style="70px">
              <el-option label="2020" value="2020">
              </el-option>
              <el-option label="2021" value="2021">
              </el-option>
            </el-select>
            <!-- <el-input v-model="form.startMonth"></el-input> -->
          </div>
          <div class="inputtext">年</div>
          <div class="myinput">
            <el-select v-model="form.startMonth" placeholder="请选择">
              <el-option v-for="item in selectList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <!-- <el-input v-model="form.startMonth"></el-input> -->
          </div>
          <div class="inputtext">月</div>
          <div class="myinput">
            <el-select v-model="form.startDay" placeholder="请选择">
              <el-option v-for="item in selectList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputtext">日</div>
        </div>
        <div class="inputtext">至</div>
        <div style="display:flex;">
          <div class="myinput">
            <el-select v-model="form.endYear" placeholder="请选择" style="70px">
              <el-option label="2020" value="2020">
              </el-option>
              <el-option label="2021" value="2021">
              </el-option>
            </el-select>
          </div>
          <div class="inputtext">年</div>
          <div class="myinput">
            <el-select v-model="form.endMonth" placeholder="请选择">
              <el-option v-for="item in selectList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputtext">月</div>
          <div class="myinput">
            <el-select v-model="form.endDay" placeholder="请选择">
              <el-option v-for="item in selectList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputtext">日</div>
        </div>
      </div>
      <div style="font-size:12px; color: rgb(245, 108, 108); margin-top:5px;" v-if="errorText !== ''">{{errorText}}</div>
    </div>
    <!-- <div class="operationRight-bottom">
      <div style="margin-bottom:10px; margin-top:10px; font-size:14px;">历史数据</div>
      <div>
        <el-select v-model="historyValue" placeholder="请选择" @change="handleChangeHistory">
          <el-option v-for="item in historyList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div> -->
  </div>
</template>

<script>
import bus from '@/components/common/bus'
export default {
  data(){
    return{
      title:'',
      selectOpation:{},
      ifShow:false,
      historyValue:'',
      errorText:'',
      value:[],
      form:{
        startYear:2020,
        startMonth:12,
        startDay:1,
        endYear:2021,
        endMonth:1,
        endDay:1
      },
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
      selectList: [{
          value: 1,
          label: '1'
        }, {
          value: 2,
          label: '2'
        }, {
          value: 3,
          label: '3'
        }, {
          value: 4,
          label: '4'
        }, {
          value: 5,
          label: '5'
        },
        {
          value: 6,
          label: '6'
        },
        {
          value: 7,
          label: '7'
        },
        {
          value: 8,
          label: '8'
        },
        {
          value: 9,
          label: '9'
        },
        {
          value: 10,
          label: '10'
        },
        {
          value: 11,
          label: '11'
        },
        {
          value: 12,
          label: '12'
        }
        ],
      options: [
        {
          value: 1,
          label: '个月平均值',
          children: [
            {
              value: 1,
              label: '光照',
              children: [
                {
                  value: 1,
                  label: '1月',
                },
                {
                  value: 2,
                  label: '2月',
                },
                {
                  value: 3,
                  label: '3月',
                },
                {
                  value: 4,
                  label: '4月',
                },
                {
                  value: 5,
                  label: '5月',
                },
                {
                  value: 6,
                  label: '6月',
                },
                {
                  value: 7,
                  label: '7月',
                },
                {
                  value: 8,
                  label: '8月',
                },
                {
                  value: 9,
                  label: '9月',
                },
                {
                  value: 10,
                  label: '10月',
                },
                {
                  value: 11,
                  label: '11月',
                },
                {
                  value: 12,
                  label: '12月',
                }
              ]
            },
            {
              value: 2,
              label: 'CO2浓度',
              children: [
                {
                  value: 1,
                  label: '1月',
                },
                {
                  value: 2,
                  label: '2月',
                },
                {
                  value: 3,
                  label: '3月',
                },
                {
                  value: 4,
                  label: '4月',
                },
                {
                  value: 5,
                  label: '5月',
                },
                {
                  value: 6,
                  label: '6月',
                },
                {
                  value: 7,
                  label: '7月',
                },
                {
                  value: 8,
                  label: '8月',
                },
                {
                  value: 9,
                  label: '9月',
                },
                {
                  value: 10,
                  label: '10月',
                },
                {
                  value: 11,
                  label: '11月',
                },
                {
                  value: 12,
                  label: '12月',
                }
              ]
            },
            {
              value: 3,
              label: '水温',
              children: [
                {
                  value: 1,
                  label: '1月',
                },
                {
                  value: 2,
                  label: '2月',
                },
                {
                  value: 3,
                  label: '3月',
                },
                {
                  value: 4,
                  label: '4月',
                },
                {
                  value: 5,
                  label: '5月',
                },
                {
                  value: 6,
                  label: '6月',
                },
                {
                  value: 7,
                  label: '7月',
                },
                {
                  value: 8,
                  label: '8月',
                },
                {
                  value: 9,
                  label: '9月',
                },
                {
                  value: 10,
                  label: '10月',
                },
                {
                  value: 11,
                  label: '11月',
                },
                {
                  value: 12,
                  label: '12月',
                }
              ]
            },
            {
              value: 4,
              label: '空气温度',
              children: [
                {
                  value: 1,
                  label: '1月',
                },
                {
                  value: 2,
                  label: '2月',
                },
                {
                  value: 3,
                  label: '3月',
                },
                {
                  value: 4,
                  label: '4月',
                },
                {
                  value: 5,
                  label: '5月',
                },
                {
                  value: 6,
                  label: '6月',
                },
                {
                  value: 7,
                  label: '7月',
                },
                {
                  value: 8,
                  label: '8月',
                },
                {
                  value: 9,
                  label: '9月',
                },
                {
                  value: 10,
                  label: '10月',
                },
                {
                  value: 11,
                  label: '11月',
                },
                {
                  value: 12,
                  label: '12月',
                }
              ]
            },
            {
              value: 5,
              label: '空气湿度',
              children: [
                {
                  value: 1,
                  label: '1月',
                },
                {
                  value: 2,
                  label: '2月',
                },
                {
                  value: 3,
                  label: '3月',
                },
                {
                  value: 4,
                  label: '4月',
                },
                {
                  value: 5,
                  label: '5月',
                },
                {
                  value: 6,
                  label: '6月',
                },
                {
                  value: 7,
                  label: '7月',
                },
                {
                  value: 8,
                  label: '8月',
                },
                {
                  value: 9,
                  label: '9月',
                },
                {
                  value: 10,
                  label: '10月',
                },
                {
                  value: 11,
                  label: '11月',
                },
                {
                  value: 12,
                  label: '12月',
                }
              ]
            }
          ]
        },
        {
          value: 2,
          label: '分布规律',
          children: [{
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
          }]
        },
        {
          value: 3,
          label:'自定义',
          children: [{
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
          }]
        }
      ]
    };
  },
  watch:{
    form:{
      handler(n,o){
        let startTiem = `${n.startYear}-${n.startMonth}-${n.startDay}`
        let endTiem = `${n.endYear}-${n.endMonth}-${n.endDay}`
        let if_erro = this.$moment(endTiem).isBefore(startTiem, 'second')
        if(if_erro){
          this.$message.error('结束时间不能比开始时间早！')
          return
        }
        if(n.startYear === 2020) {
          if(n.startMonth !== 12){
            this.$message.error(`${n.startYear}年${n.startMonth}月暂无数据`)
            return
          }
        }else {
          if(n.startMonth > 6){
            this.$message.error(`${n.startYear}年${n.startMonth}月暂无数据`)
            return
          }
        }
        if(n.endYear === 2020) {
          if(n.endMonth !== 12){
            this.$message.error(`${n.endYear}年${n.endMonth}月暂无数据`)
            return
          }
        }else {
          if(n.endMonth >= 6){
            this.$message.error(`${n.endYear}年${n.endMonth}月暂无数据`)
            return
          }
        }
        this.ifSelf(this.selectOpation.type)
      },
      deep:true
      }
  },
  created(){
    let params = {
        type:4
      }
      this.title = '各月空气温度平均值'
    this.getAvgDataByYear(params)
    // this.handleChange([1,1,1])
  },
  methods:{
    getAvgDataByDay(flag){
      let that = this
      let params = {
        ...this.selectOpation
      }
      that.$api.getAvgDataByDay(params)
        .then(res => {
        let {code,data,msg} = res.data
        if(code === '0000'){
          let xdatas = []
          let ydatas = []
          let newList = data.map(item => {
            let ele = JSON.parse(JSON.stringify(item))
            ele.day = `${ele.day}`
            
            xdatas.push(ele.day)
            ydatas.push(ele.number || ele.humidity || ele.temperature)
            return ele
          })
          bus.$emit('changeData',JSON.stringify({
            data:newList,
            xdatas,
            ydatas,
            title:this.title
          }))
        }else{
            that.$message.error(msg)
        }
        }).catch(err => { 
            that.$message.error(err)
        })
    },
    handleChangeHistory(data){
      // this.title = `${this.historyList[data - 1].label}平均值`
      bus.$emit('showTable',data)
      // this.getHistoryData()
    },
    getHistoryData(){
      // debugger
      let that = this
      let params = {
        type:this.historyValue
      }
      that.$api.getHistoryData(params)
        .then(res => {
        let {code,data,msg} = res.data
        if(code === '0000'){
          // debugger
          let xdatas = []
          let ydatas = []
          let newList = data.map(item => {
            let ele = JSON.parse(JSON.stringify(item))
            ele.MONTH = `${ele.MONTH}月`
            xdatas.push(ele.MONTH)
            ydatas.push(ele.temperature)
            return ele
          })
          bus.$emit('changeData',JSON.stringify({
            data:newList,
            xdatas,
            ydatas,
            title:this.title
          }))
        }else{
            that.$message.error(msg)
        }
        }).catch(err => { 
            that.$message.error(err)
        })
    },
    getAvgDataByYear(params){
      let that = this
      that.$api.getAvgDataByYear(params)
        .then(res => {
        let {code,data,msg} = res.data
        if(code === '0000'){
          // debugger
          let xdatas = []
          let ydatas = []
          // debugger
          let newList = data.map(item => {
            let ele = JSON.parse(JSON.stringify(item))
            ele.MONTH = `${ele.MONTH || ele.month}月`
            xdatas.push(ele.MONTH || ele.month)
            ydatas.push(ele.temperature || ele.number)
            return ele
          })
          bus.$emit('changeData',JSON.stringify({
            data:newList,
            xdatas,
            ydatas,
            title:that.title
          }))
        }else{
            that.$message.error(msg)
        }
        }).catch(err => { 
            that.$message.error(err)
        })
    },
    getAverageData(){
      let that = this
      let params = {
        ...this.selectOpation
      }
      that.$api.getAvgDataByMonth(params)
        .then(res => {
        let {code,data,msg} = res.data
        if(code === '0000'){
          let xdatas = []
          let ydatas = []
          let newList = data.map(item => {
            let ele = JSON.parse(JSON.stringify(item))
            ele.week = `第${ele.week + 1}周`
            xdatas.push(ele.week)
            ydatas.push(ele.number)
            return ele
          })
          bus.$emit('changeData',JSON.stringify({
            data:newList,
            xdatas,
            ydatas,
            title:this.title
          }))
          // debugger
            // for(let key in that.indexData){
            //   that.$set(that.indexData,key,{
            //     name:that.indexData[key].name,
            //     code:that.indexData[key].code,
            //     value:data[key] || 0
            //   })
            // }
        }else{
            that.$message.error(msg)
        }
        }).catch(err => { 
            that.$message.error(err)
        })
    },
    ifSelf(type){
      //  let startYear = this.form.startMonth === 12 ? 2020 : 2021
      //   let endYear = 2021、
      // debugger
        let startTiem = this.$moment(`${this.form.startYear}-${this.form.startMonth}-${this.form.startDay}`).format('YYYY-MM-DD HH:mm:ss')
        let endTiem = this.$moment(`${this.form.endYear}-${this.form.endMonth}-${this.form.endDay}`).format('YYYY-MM-DD HH:mm:ss')
        this.selectOpation = {
          type: type,
          beginTime:`${startTiem}`,
          endTime:`${endTiem}`,
          // is_self:true
          // month: data['2'],

        }
        this.title = `${this.form.startYear}-${this.form.startMonth}-${this.form.startDay}至${this.form.endYear}-${this.form.endMonth}-${this.form.endDay}${this.historyList[type - 1].label}平均值`
        this.getAvgDataByDay()
        this.ifShow = true
    },
    handleChange(data){
      debugger
      // type:1 光照；2 CO2浓度；3 水温；4 空气温度；5 空气湿度；month:1-12
      // console.log(data['0'])

      if(data['0'] === 1){
        this.ifShow = false
        // debugger
        let mouthList = [1,2,3,4,5,12]
      //  let test =  mouthList.indexOf(data['2'])
        if(mouthList.indexOf(data['2']) === -1){
          this.$message.error(`${data['2']}月暂无数据`)
          return
        }
        this.title = `${data['2']}月${this.historyList[data['1']-1].label}平均值`
        this.selectOpation = {
          type: data['1'],
          month: data['2'],
          // is_self:false
        }
        this.getAverageData()
      }
      if(data['0'] === 2){
        this.ifShow = false
        this.title = `分布规律`
        this.selectOpation = {
          type: data['1'],
          // is_self:false
        }
        this.title = `${this.historyList[data['1']-1].label}分布规律`
        this.getAvgDataByYear(this.selectOpation)
        
      }
      // if(){}
      if(data['0'] === 3){
        // debugger
       this.ifSelf(data['1'])
      }
    }
  }
}
</script>
<style>
.myinput .el-input {
    width: 60px;
}
.myinput .el-input__inner {
    width: 60px;
    padding: 0 5px;
}
</style>
<style lang="less" scoped>
.operationRight {
    // border-top: 1px solid #f5f5f5;
    padding: 10px;
    border-radius: 8px;
    color: #fff;
    // background: linear-gradient(to bottom right, rgba(185, 247, 247,0.6), rgba(243, 248, 248,0.6));
    height: 100%;
    .operationRight-top {
        height: 200px;
        // border-bottom: 1px solid #f5f5f5;
        margin-bottom: 60px;
        .custom {
            display: flex;
            margin-top: 20px;
        }
        .inputtext {
            line-height: 32px;
            margin: 0 5px;
        }
    }
    .operationRight-bottom {
    }
}
</style>