<template>
  <div class="operationRight">
    <div class="operationRight-top">
      <p style="margin-bottom:10px; font-size:14px;">条件查询</p>
      <el-cascader
      v-model="value"
      size="mini"
      clearable
      :options="options"
      @change="handleChange"></el-cascader>
      <div v-if="ifShow">
        <div class="custom">
          <div class="myinput">
            <el-select v-model="form.startMonth" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!-- <el-input v-model="form.startMonth"></el-input> -->
            </div>
          <div class="inputtext">月</div>
          <div class="myinput">
            <el-select v-model="form.startDay" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </div>
          <div class="inputtext">日</div>
        </div>
        <div class="inputtext">至</div>
        <div style="display:flex;">
          <div class="myinput">
            <el-select v-model="form.endMonth" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputtext">月</div>
          <div class="myinput">
            <el-select v-model="form.endDay" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputtext">日</div>
        </div>
      </div>
      <div style="font-size:12px; color: rgb(245, 108, 108); margin-top:5px;" v-if="errorText !== ''">{{errorText}}</div>
    </div>
    <div class="operationRight-bottom">
      <div style="margin-bottom:10px; margin-top:10px; font-size:14px;">历史数据</div>
      <div>
        <el-select v-model="historyValue" placeholder="请选择">
          <el-option
            v-for="item in historyList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectOpation:{},
      ifShow:false,
      historyValue:'',
      errorText:'',
      value:'',
      form:{
        startMonth:12,
        startDay:1,
        endMonth:1,
        endDay:1
      },
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
            value: 3,
            label: '土壤温度'
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
      selectList: [{
          value: '1',
          label: '1月'
        }, {
          value: '2',
          label: '2月'
        }, {
          value: '3',
          label: '3月'
        }, {
          value: '4',
          label: '4月'
        }, {
          value: '5',
          label: '5月'
        },
        {
          value: '6',
          label: '6月'
        },
        {
          value: '7',
          label: '7月'
        },
        {
          value: '8',
          label: '8月'
        },
        {
          value: '9',
          label: '9月'
        },
        {
          value: '10',
          label: '10月'
        },
        {
          value: '11',
          label: '11月'
        },
        {
          value: '12',
          label: '12月'
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
              label: '土壤温度',
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
            value: 3,
            label: '土壤温度'
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
          label:'自定义'
        }
      ]
    };
  },
  watch:{
    // form:{
    //   handler(n,o){
    //     for(let key in n){
    //       // debugger
    //       if(o[key] === ''){
    //         this.errorText = '请输入正确格式自定义日期值'
    //       }else {
    //         // console.log(Number(o[key]))
    //         // console.log(typeof o[key])
    //         let newVal = Number(o[key])
    //         let reg = new RegExp("^\d{n}$");
    //         if(reg.test(newVal)){
    //           if(key === 'startMonth'){
    //             if(Number(n[key]) !== 12){
    //               this.errorText = '数据只有从12月到次年5月，请重新输入！'
    //               this.$message.warning(this.errorText)
    //             }else {
    //               this.errorText = ''
    //             }
                
    //           }else if(key === 'endMonth'){
    //             if(Number(n[key]) !== 1 || Number(n[key]) !== 2 || Number(n[key]) !== 3 || Number(n[key]) !== 4){
    //               this.errorText = '数据只有从12月到次年5月，请重新输入！'
    //               this.$message.warning(this.errorText)
    //             }else {
    //               this.errorText = ''
    //             }
    //           }else {
    //               this.errorText = ''
    //             }
    //         }else {
    //           this.errorText = '请输入正确格式自定义日期值'
    //         }
    //       }
    //     }
    //   },
    //   deep:true
    // }
  },
  methods:{
    getAverageData(){
      let that = this
      let params = {
        ...this.selectOpation
      }
      that.$api.getAvgDataByMonth(params)
        .then(res => {
        let {code,data,msg} = res.data
        if(code === '0000'){
          debugger
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
    handleChange(data){
      // type:1 光照；2 CO2浓度；3 水温；4 空气温度；5 空气湿度；month:1-12
      debugger
      // console.log(data['0'])
      if(data['0'] !== 3){
        this.selectOpation = {
          type: data['1'],
          month: data['2']
        }
      }
      // if(){}
      if(data['0'] === 3){
        this.ifShow = true
      }else {
        if(data['0'] === 1){
          this.getAverageData()
        }
        this.ifShow = false
      }
    }
  }
}
</script>
<style>
.myinput .el-input{
  width:60px;
}
.myinput .el-input__inner{
  width:60px;
  padding: 0 5px;
}
</style>
<style lang="less" scoped>
.operationRight{
  // border-top: 1px solid #f5f5f5;
  padding:10px;
  border-radius: 8px;
  color:#fff;
  // background: linear-gradient(to bottom right, rgba(185, 247, 247,0.6), rgba(243, 248, 248,0.6));
  height: 100%;
  .operationRight-top{
    height: 200px;
    // border-bottom: 1px solid #f5f5f5;
    margin-bottom: 60px;
    .custom{
      display:flex;
      margin-top:20px;
      
    }
    .inputtext{
        line-height: 32px;
        margin:0 5px;
      }
  }
  .operationRight-bottom{
  }
}
</style>