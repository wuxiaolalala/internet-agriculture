import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './assets/css/iconfont.css'
import './assets/css/bootstrap.min.css'
import './components/common/directives';
import 'babel-polyfill';
import demo from './request/apis'
import moment from 'moment'
// import echarts from 'echarts'

// Vue.prototype.$echarts = echarts
Vue.prototype.$api = demo;
Vue.prototype.$moment = moment;
Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    next();
});

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');
