import axios from './http'
import base from './base'
import QS from 'qs'

const demo = {
    realTimeData (params) {
        return axios.post(`${base.egg}/home/realTimeData`, params);
    },
    getAvgDataByMonth (params) {
        return axios.post(`${base.egg}/home/getAvgDataByMonth`, params);
    },
    getAvgDataByYear (params) {
        return axios.post(`${base.egg}/home/getAvgDataByYear`, params);
    },
    getHistoryData (params) {
        return axios.get(`${base.egg}/home/getHistoryData`, { params });
    },
    getAvgDataByDay (params) {
        return axios.post(`${base.egg}/home/getAvgDataByDay`, params);
    },
    getDioxideList(params,url){
        return axios.post(`${base.egg}${url}`, params);
    }
}

export default demo;