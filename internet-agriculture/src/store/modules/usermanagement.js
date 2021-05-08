export default {

  namespaced: true,//使用命名空间，这样只在局部使用

  state: {
    majorList: [],
    collegeList: [],
    classList: [],
    userList:[]
  },

  mutations: {
    setCollegeListMutations (state, collegeList) {
      state.collegeList = collegeList
    },
    setMajorListMutations (state, majorList) {
      state.majorList = majorList
    },
    setClassListMutations (state, classList) {
      state.classList = classList
    },
    setUserListMutations (state, userList) {
      state.userList = userList
    }
  },
  actions: {
    setUserList ({ commit }, userList) {
      //  let newList = []
      // if (userList && userList.length > 0) {
      //   userList.forEach(item => {
      //     let newItem = JSON.parse(JSON.stringify(item))
      //     newItem['id'] = Number(newItem.id) || ''
      //     newList.push(newItem)
      //   })
      //  }
      commit('setUserListMutations',userList)
    },
    setCollegeList ({ commit }, collegeList) {
      //  let newList = []
      // if (collegeList && collegeList.length > 0) {
      //   collegeList.forEach(item => {
      //     let newItem = JSON.parse(JSON.stringify(item))
      //     newItem['id'] = Number(newItem.id) || ''
      //     newList.push(newItem)
      //   })
      //  }
      commit('setCollegeListMutations',collegeList)
    },
    setMajorList ({ commit }, majorList) {
      // let newList = []
      // if (majorList && majorList.length > 0) {
      //   majorList.forEach(item => {
      //     let newItem = JSON.parse(JSON.stringify(item))
      //     newItem['id'] = Number(newItem.id) || ''
      //     newList.push(newItem)
      //   })
      // }
      commit('setMajorListMutations',majorList)
    },
    setClassList ({ commit }, classList) {
      //  let newList = []
      // if (classList && classList.length > 0) {
      //   classList.forEach(item => {
      //     let newItem = JSON.parse(JSON.stringify(item))
      //     newItem['id'] = Number(newItem.id) || ''
      //     newList.push(newItem)
      //   })
      //  }
      commit('setClassListMutations',classList)
    }
  },
  getters: {

}

}