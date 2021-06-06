<template>
  <div class="realTimeData">
    <div class="title">
      实时数据
    </div>
    <div class="dataList">
      <div>
        <div class="col-sm-12 col-md-12">
          <div class="box-content">
            <div class="statistic-box" style="display:flex; justify-content: space-around;">
              <div class="statistic-item" v-for="item of indexData" v-bind:key="item.name">
                <div class="icon-content">
                  <span class="iconfont icon-shuju"></span>
                </div>
                <div class="text-content">
                  <div class="text">
                    <span class="counter">
                      <ICountUp :delay="delay" :endVal="Number(item.value)" :decimals="3" :options="options" @ready="onReady" />
                    </span>
                  </div>
                  <div class="sub-title">{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="dataList-item">
        空气湿度<span style="color:red; margin-left:8px;">{{form.airHumidity }}</span>
      </div>
      <div class="dataList-item">
        空气温度<span style="color:red; margin-left:8px;">{{form.airTemperature}}</span>
      </div>
      <div class="dataList-item">
        光照强度<span style="color:red; margin-left:8px;">{{form.lightIntensity}}</span>
      </div>
      <div class="dataList-item">
        CO2浓度<span style="color:red; margin-left:8px;">{{form.carbonDioxideConcentration}}</span>
      </div>
      <div class="dataList-item">
        土壤温度<span style="color:red; margin-left:8px;">{{form.soilTemperature }}</span>
      </div> -->
    </div>
    <div class="title" style="margin-top:20px;">
      警告
    </div>
    <div style="padding: 0 20px; width:100%;">
      <div style="padding: 20px 10px 20px 30px;  display:flex; justify-content: space-around; border:1px solid #fff;">
        <div>
          <span style="margin-right:10px;">空气湿度:</span>
          <span :style="{'color':indexData.kongHumidity.if_normal ?'#7FFF00':'red'}">{{indexData.dioxide.if_norma? '正常':'超出范围'}}</span>
        </div>
        <div>
          <span style="margin-right:10px;">空气温度:</span>
          <span :style="{'color':indexData.kongQiTemperature.if_normal ?'#7FFF00':'red'}">{{indexData.dioxide.if_norma? '正常':'超出范围'}}</span>
        </div>
        <div>
          <span style="margin-right:10px;">光照强度:</span>
          <span :style="{'color':indexData.illumination.if_norma ?'#7FFF00':'red'}">{{indexData.dioxide.if_norma? '正常':'超出范围'}}</span>
        </div>
        <div>
          <span style="margin-right:10px;">CO2浓度:</span>
          <span :style="{'color':indexData.dioxide.if_norma ?'#7FFF00':'red'}">{{indexData.dioxide.if_norma? '正常':'超出范围'}}</span>
        </div>
        <div>
          <span style="margin-right:10px;">水温:</span>
          <span :style="{'color':indexData.waterTemperature.if_norma ?'#7FFF00':'red'}">{{indexData.dioxide.if_norma? '正常':'超出范围'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions } from 'vuex'
import ICountUp from 'vue-countup-v2'

export default {
  components:{
    ICountUp
  },
  data(){
    return{
      delay: 0,
      endVal: 0,
      options: {
          useEasing: true,
          useGrouping: true,
          decimalPlaces: 3,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
      },
      indexData:{
        kongHumidity:{ name: '空气湿度(RH%)', code:'kongHumidity', value: 0 ,if_normal:true}, 
        kongQiTemperature:{ name: '空气温度(℃)', code:'kongQiTemperature', value: 0 ,if_normal:true}, 
        illumination:{ name: '光照强度(lux)', code:'illumination', value: 0 ,if_normal:true}, 
        dioxide:{ name: 'CO2浓度(ppm)', code:'dioxide', value: 1560 ,if_normal:true}, 
        waterTemperature:{ name: '水温(℃)', code:'waterTemperature', value: 0 ,if_normal:true}
      },
      form:{
        airHumidity:'20',
        airTemperature:'70',
        lightIntensity:'40',
        carbonDioxideConcentration:'79',
        soilTemperature:'57'
      }
    };
  },
  mounted(){ 
    this.initDatas()
    setInterval(()=>{
      this.initDatas()
    },300000)// 5分钟更新一次数据
  },
  watch:{
    formData:{
      handler(n,o){
        this.ifNormal()
      },
      deep:true
    }
  },
  computed: {
    ...mapState('setting', {
      formData: state => state.formData
    })
    },
  methods:{
    ...mapActions('setting', [
        'setSetting'
      ]),
      ifNormal(){
        for(let key of this.formData){
          if(this.indexData[key].val > this.formData[key].max || this.indexData[key].val < this.formData[key].min){
            this.$set(this.indexData[key],'if_normal',false)
          }else {
            this.$set(this.indexData[key],'if_normal',true)
          }
          
        }
      },
    // setData(){
    //   let newList = {
    //     kongHumidity:1, 
    //     kongQiTemperature:2, 
    //     illumination:3, 
    //     dioxide:4, 
    //     waterTemperature:5
    //   }
    //   for(let key in newList){
    //               this.$set(this.indexData,key,{
    //                 name:this.indexData[key].name,
    //                 code:this.indexData[key].code,
    //                 value:newList[key] || 0
    //               })
    //             }
    //             // debugger
    //             // this.indexData
    // },
    onReady(instance, CountUp) {
      return
      const that = this
      instance.update(that.endVal + 100)
    },
    initDatas(){
      let that = this
      let nowData =  this.$moment().format('YYYY-MM-DD HH:mm:ss');
      let params = {
        recordTime:nowData
      }
      that.$api.realTimeData(params)
            .then(res => {
            let {code,data,msg} = res.data
            if(code === '0000'){
                for(let key in that.indexData){
                  that.$set(that.indexData,key,{
                    name:that.indexData[key].name,
                    code:that.indexData[key].code,
                    value:data[key] || 0
                  })
                }
            }else{
                that.$message.error(msg)
            }
            }).catch(err => { 
                that.$message.error(err)
            })
      // console.log('leftInitDatas')
    }
  }
}
</script>

<style lang="less" scoped>
.realTimeData {
    // background: linear-gradient(to bottom right, rgba(8, 8, 8,0.7), rgba(68, 71, 71,0.7));
    // border-top: 1px solid #f5f5f5;
    border-radius: 8px;
    color: #fff;
    height: 100%;
    margin-top: 20px;
    .statistic-item {
        display: flex;
        margin-bottom: 15px;
        padding: 10px 0;
        align-items: center;
        overflow: hidden;
        margin-right: 30px;
    }

    .statistic-item .icon-content {
        width: 35px;
        min-width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b4e82;
        border-radius: 50%;
    }

    .icon-content .iconfont {
        font-size: 24px;
        color: #fff;
    }

    .text-content {
        margin-left: 10px;
        overflow: hidden;
    }

    .statistic-item .text {
        font-size: 20px;
        color: #fff;
    }

    .statistic-item .sub-title {
        font-size: 14px;
        text-align: left;
        color: rgb(154, 168, 212);
    }
    .statistic-item .text {
        font-size: 20px;
        color: #fff;
    }

    .statistic-item .sub-title {
        font-size: 14px;
        text-align: left;
        color: rgb(154, 168, 212);
    }
    .box-content {
        display: block;
        line-height: 1.42857143;
        -webkit-transition: border 0.2s ease-in-out;
        -o-transition: border 0.2s ease-in-out;
        transition: border 0.2s ease-in-out;
        border: 1px solid #fff;
    }

    .box-content.shadow {
        box-shadow: 1px 2px 8px 0px #888;
    }
    .box-content .caption {
        text-align: left;
        color: #fff;
    }
    .title {
        padding: 10px 10px 20px 30px;
        text-align: left;
        font-size: 20px;
    }
    .dataList {
        // overflow-y: scroll;
        .dataList-item {
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #f5f5f5;
        }
    }
}
</style>