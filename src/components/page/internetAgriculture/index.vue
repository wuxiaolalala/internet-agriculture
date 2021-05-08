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
    <div id="main" class="col">
      <div id="main-wrap">
        <EchartsCenter></EchartsCenter>
      </div>
    </div>
    <div id="left" class="col">
      <RealTimeData></RealTimeData>
    </div>
    <div id="right" class="col">
      <OperationRight></OperationRight>
    </div>
  </div>
</template>

<script>
import RealTimeData from './components/RealTimeData.vue'
import OperationRight from './components/OperationRight.vue'
import EchartsCenter from './components/EchartsCenter.vue'
export default {
  components:{
    RealTimeData,
    OperationRight,
    EchartsCenter
  },
  data(){
    return{};
  }
}
</script>
<style>
body{
/*background: url("~@/assets/images/bg.png") 0 0 / 100% 100% no-repeat;*/
background: url("../../../assets/images/background.png") 0 0 / 100% 100% no-repeat;
}
</style>
<style lang="less" scoped>
@import '../../../assets/css/main.css';
@import '../../../assets/css/color-dark.css'; /*深色主题*/

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
    background-image: url("~@/assets/images/bottombar.gif");
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
body{
  min-width: 550px;
}
#main{
  width: 100%;
  height: calc(100vh-60px);
  // background-color: #f5f5f5;
}
  #main-wrap{
    margin:0 280px 0 175px;
    padding:10px
  }
#left{
  width:175px;
  height: 100vh;
  margin-top:10px;
  // background-color: #fff;
  margin-left:-100%;
  
}
#right{
  width:280px;
  height: 100vh;
  margin-top:10px;
  // background-color: #fff;
  margin-left: -280px;
}
.col{
  float: left;
}
</style>