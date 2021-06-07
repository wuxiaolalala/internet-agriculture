export default {

  namespaced: true,//使用命名空间，这样只在局部使用

  state: {
    flag:false,
    formData: {
      kongHumidity:{
          min:0,
          max:0
        },
        kongQiTemperature:{
          min:0,
          max:0
        },
        illumination:{
          min:0,
          max:0
        },
        dioxide:{
          min:0,
          max:0
        },
        waterTemperature:{
          min:0,
          max:0
        }
    }
  },

  mutations: {
    setFormDataMutations (state, formData) {
      sessionStorage.setItem('formData',JSON.stringify(formData))
      state.formData = formData
      state.flag = !state.flag
    }
  },
  actions: {
    setSetting ({ commit }, userList) {
      commit('setFormDataMutations',userList)
    }
  },
  getters: {

}

}