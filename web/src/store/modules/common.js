import axios from 'axios'

const common = {
  state:{
    username: localStorage.getItem("userInfo") || '',
    isCollapse: false,
  },
  getters:{

  },
  actions:{
    //同步获取用户数据
    userInfo({commit},username){
      commit('user_info',{username});
    },
    //异步获取用户信息
    getUserInfo({commit}){
      axios.get('api/checkLogin').then((res)=>{
        let rs = res.data;
        if(rs.code == 0){
          const username = rs.data;
          commit('user_info',{username})
        }
      })
    }
  },
  mutations:{
    //存储用户信息
    user_info(state,{username}){
      state.username = username;
    },
    toggleSiderBar(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}

export default common;
