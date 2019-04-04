 const common = {
  state:{
    isCollapse: false
  },
  getters:{

  },
  actions:{

  },
  mutations:{
    toggleSiderBar(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}

export default common;
