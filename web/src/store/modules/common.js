import axios from 'axios'
import libs from '../../../libs'
import Cookies from 'js-cookie'
import {getLanguage} from '../../lang'

const common = {
  state:{
    // username: libs.getLocalStorage("userInfo") || '',
    username: '',
    isCollapse: false,
    bannerImgs: [],
    // language: getLanguage()
    language: Cookies.get('language')
  },
  getters:{
    language: state => state.language,
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
    },

    //获取banner数据
    getBannerData({commit}){
      axios.get('api/home/banner').then((res)=>{
        let rs = res.data;
        if (rs.code == 0){
          const bannerImgs = rs.data;
          commit('bannerData',{bannerImgs})
        }
      })
    },

    //设置语言
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
  },
  mutations:{
    //存储用户信息
    user_info(state,{username}){
      state.username = username;
    },
    toggleSiderBar(state) {
      state.isCollapse = !state.isCollapse
    },
    //banner数据
    bannerData(state,{bannerImgs}){
      state.bannerImgs = bannerImgs;
    },

    //设置语言
    SET_LANGUAGE:(state,language)=>{
      state.language = language;
      Cookies.set('language',language)
    }
  }
}

export default common;
