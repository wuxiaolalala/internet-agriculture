<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    created(){
        this.getBaseUrl()
    },
    methods:{
        getBaseUrl(){
            let protocol = window.location.protocol // 'http:'
            // let protocol = 'http:'
            let host = window.location.host //'27.255.64.51'
            // let host = '148.70.194.24'
            // // console.log(`${protocol}//${host}:8188`)
            let imgUrlBase = `${protocol}//${host}:8188/file/fileDown?saveName=`
            let baseUrl = `${protocol}//${host}:8188`
            sessionStorage.setItem('imgUrlBase',imgUrlBase)
            sessionStorage.setItem('baseUrl',baseUrl)
        }
    }
}
</script>
<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css'; /*深色主题*/
body{
/*background: url("~@/assets/images/bg.png") 0 0 / 100% 100% no-repeat;*/
background: url("./assets/images/background.png") 0 0 / 100% 100% no-repeat;
}
/*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>