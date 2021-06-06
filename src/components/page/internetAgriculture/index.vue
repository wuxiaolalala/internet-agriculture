<template>
  <div>
    <div class="header">
      <div class="title">
        物联网智慧大棚监控系统
      </div>
      <div class="title-bottom">
        <div class="bottom-sidebar"></div>
      </div>
    </div>
    <div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- 实时数据 历史分布 历史最值 监控视频 设备运行情况 历史数据 设置 -->
        <el-tab-pane label="实时数据" name="实时数据">
          <RealTimeData></RealTimeData>
        </el-tab-pane>
        <el-tab-pane label="历史分布" name="历史分布">
          <div style="display:flex;">
            <div style="width:70%; height:100vh;">
              <EchartsCenter></EchartsCenter>
            </div>
            <div style="width:30%; height:100vh;">
              <OperationRight></OperationRight>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="监控视频" name="监控视频">
          <div style="width:100%; margin-top:100px; display:flex; justify-content: center; align-items: center; ">
            <div style="width:400px; height:300px; position: relative;">
              <img style="width:100%; height:100%;" src="@/assets/img/demo.jpeg" />
              <div style="width:60px; height:60px; position: absolute;top: 120px; left: 170px;" @click="play">
                <img src="@/assets/img/play.png" style="width:100%; height:100%;" alt="">
              </div>

            </div>

          </div>
        </el-tab-pane>
        <el-tab-pane label="设备运行情况" name="设备运行情况">
          <div style="display:flex; justify-content: center; margin-top:30px;">
            <div style="color:#fff;">
              <div style="display:flex; margin-bottom:10px;">
                <div style="margin-right:20px;">二氧化碳测试仪</div>
                <div style="color:#7FFF00;">正常运行</div>
              </div>
              <div style="display:flex; margin-bottom:10px;">
                <div style="margin-right:20px;">光照强度测试仪</div>
                <div style="color:#7FFF00;">正常运行</div>
              </div>
              <div style="display:flex; margin-bottom:10px;">
                <div style="margin-right:20px;">空气湿度测试仪</div>
                <div style="color:#7FFF00;">正常运行</div>
              </div>
              <div style="display:flex; margin-bottom:10px;">
                <div style="margin-right:20px;">空气温度测试仪</div>
                <div style="color:#7FFF00;">正常运行</div>
              </div>
              <div style="display:flex;">
                <div style="margin-right:20px;">基质温度测试仪</div>
                <div style="color:#7FFF00;">正常运行</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="历史数据" name="历史数据">
          <div style="width:100%; height:100vh;">
            <!-- <div style="width:70%; height:100%;">
              <EchartsCenter></EchartsCenter>
            </div>
            <div style="width:30%; height:100%;">
              <OperationRight></OperationRight>
            </div> -->
            <history></history>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最值查看" name="最值查看">
          <div>
            <extremeValue></extremeValue>
          </div>
        </el-tab-pane>
        <el-tab-pane label="设置" name="设置">
          <div style="width:100%; display:flex; justify-content: center;">
            <div style="margin-top:80px;">
              <div style="display:flex; color:#fff;">
                <div style="width:150px; text-align: right;">
                  空气湿度(RH%)：
                </div>
                <div>
                  <el-input type="number" v-model="formData.kongHumidityMin" placeholder="请输入最小值"></el-input>
                </div>
                <div style="margin-left:10px;">
                  <el-input type="number" v-model="formData.kongHumidityMax" placeholder="请输入最大值"></el-input>
                </div>
              </div>
              <div style="display:flex; color:#fff; margin-top:20px;">
                <div style="width:150px; text-align: right;">
                  空气温度(℃)：
                </div>
                <div>
                  <el-input type="number" v-model="formData.kongQiTemperatureMin" placeholder="请输入最小值"></el-input>
                </div>
                <div style="margin-left:10px;">
                  <el-input type="number" v-model="formData.kongQiTemperatureMax" placeholder="请输入最大值"></el-input>
                </div>
              </div>
              <div style="display:flex; color:#fff; margin-top:20px;">
                <div style="width:150px; text-align: right;">
                  光照强度(lux)：
                </div>
                <div>
                  <el-input type="number" v-model="formData.illuminationMin" placeholder="请输入最小值"></el-input>
                </div>
                <div style="margin-left:10px;">
                  <el-input type="number" v-model="formData.illuminationMax" placeholder="请输入最大值"></el-input>
                </div>
              </div>
              <div style="display:flex; color:#fff; margin-top:20px;">
                <div style="width:150px; text-align: right;">
                  CO2浓度(ppm)：
                </div>
                <div>
                  <el-input type="number" v-model="formData.dioxideMin" placeholder="请输入最小值"></el-input>
                </div>
                <div style="margin-left:10px;">
                  <el-input type="number" v-model="formData.dioxideMax" placeholder="请输入最大值"></el-input>
                </div>
              </div>
              <div style="display:flex; color:#fff; margin-top:20px;">
                <div style="width:150px; text-align: right;">
                  水温(℃)：
                </div>
                <div>
                  <el-input type="number" v-model="formData.waterTemperatureMin" placeholder="请输入最小值"></el-input>
                </div>
                <div style="margin-left:10px;">
                  <el-input type="number" v-model="formData.waterTemperatureMax" placeholder="请输入最大值"></el-input>
                </div>
              </div>
              <div style="text-align: center; margin-top: 40px; margin-left: 170px;">
                <el-button type="primary" @click="save">保存设置</el-button>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import RealTimeData from './components/RealTimeData.vue'
import OperationRight from './components/OperationRight.vue'
import EchartsCenter from './components/EchartsCenter.vue'
import history from './components/history.vue'
import extremeValue from './components/extremeValue.vue'
import {mapState, mapActions } from 'vuex'
export default {
  components:{
    history,
    RealTimeData,
    OperationRight,
    EchartsCenter,
    extremeValue
  },
  data(){
    return{
      activeName:'实时数据',
      formData:{
        kongHumidityMin:0,
        kongHumidityMax:0,
        kongQiTemperatureMin:0,
        kongQiTemperatureMax:0,
        illuminationMin:0,
        illuminationMax:0,
        dioxideMin:0,
        dioxideMax:0,
        waterTemperatureMin:0,
        waterTemperatureMax:0
      }
    };
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
    handleClick(val){},
    play(){
      this.$message.error('请连接设备！')
    },
    save(){
      let params = {
        kongHumidity:{
          min:this.formData.kongHumidityMin,
          max:this.formData.kongHumidityMax
        },
        kongQiTemperature:{
          min:this.formData.kongQiTemperatureMin,
          max:this.formData.kongQiTemperatureMax
        },
        illumination:{
          min:this.formData.illuminationMin,
          max:this.formData.illuminationMax
        },
        dioxide:{
          min:this.formData.dioxideMin,
          max:this.formData.dioxideMax
        },
        waterTemperature:{
          min:this.formData.waterTemperatureMin,
          max:this.formData.waterTemperatureMax
        }
      }
      this.setSetting(params)
      this.$message.success('保存成功！')
    }
  }
}
</script>
<style>
body {
    /*background: url("~@/assets/images/bg.png") 0 0 / 100% 100% no-repeat;*/
    background: url('../../../assets/images/background.png') 0 0 / 100% 100% no-repeat;
}
</style>
<style lang="less" scoped>
@import '../../../assets/css/main.css';
@import '../../../assets/css/color-dark.css'; /*深色主题*/
/deep/.el-tabs__nav-scroll {
    // display: flex;
    // justify-content: center;
}
/deep/.el-tabs__item {
    color: #fff;
}
/deep/.el-tabs__item.is-active {
    color: #409eff !important;
}
.header {
    margin: 4px;
}

.header .title {
    font-size: 24px;
    margin-bottom: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
}

.title-bottom {
    height: 30px;
    justify-content: center;
    display: flex;
}

.bottom-sidebar {
    width: 100%;
    height: 100%;
    opacity: 1;
    background-image: url('~@/assets/images/bottombar.gif');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 400px;
}
// .title{
//   background: linear-gradient(to bottom right, rgba(4, 33, 249, 1), rgba(6, 141, 251, 1));
//   padding:10px;
//   font-size: 20px;
//   color:#fff;
//   box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);
// }
body {
    min-width: 550px;
}
#main {
    width: 100%;
    height: calc(100vh-60px);
    // background-color: #f5f5f5;
}
#main-wrap {
    margin: 0 280px 0 175px;
    padding: 10px;
}
#left {
    width: 175px;
    height: 100vh;
    margin-top: 10px;
    // background-color: #fff;
    margin-left: -100%;
}
#right {
    width: 280px;
    height: 100vh;
    margin-top: 10px;
    // background-color: #fff;
    margin-left: -280px;
}
.col {
    float: left;
}
</style>