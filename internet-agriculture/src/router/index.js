import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// let redirect = window.userType === '1'?'/usermanagement':'/personalinformation'
export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/internetAgriculture'
        },
        {
            path: '/internetAgriculture',
            component: () => import(/* webpackChunkName: "internetAgriculture" */ '../components/page/internetAgriculture/index.vue'),
            meta: { title: '物联网农业大棚管理平台' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
