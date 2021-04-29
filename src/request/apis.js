import axios from './http'
import base from './base'
import QS from 'qs'

const demo = {
    realTimeData (params) {
        return axios.post(`${base.egg}/home/realTimeData`, params);
    },
    getAvgDataByMonth(params){
        return axios.post(`${base.egg}/home/getAvgDataByMonth`, params);
    }
}

export default demo;