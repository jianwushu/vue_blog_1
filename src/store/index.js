import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state: {
    userInfo:null,
    token:"",
    isLogin: false
  },
  mutations: {
    userInfo:(state,userInfo) => {
      if(userInfo){
        state.userInfo = userInfo
        state.isLogin = true
      }else{
        sessionStorage.removeItem("userInfo");
        sessionStorage.removeItem("token");
        state.userInfo = null;
        state.token = "";
        state.isLogin = false
      }
    },
    token:(state,token)=>{
      if(token){
        sessionStorage.setItem("token",token)
        state.token = token
        state.isLogin = true
      }else{
        sessionStorage.removeItem("userInfo");
        sessionStorage.removeItem("Token");
        state.userInfo = null;
        state.token = "";
        state.isLogin = false
      }
    }
  },
  actions: {
    setUser:({commit},userInfo) => {
      commit("userInfo",userInfo)
    },
    setToken:({commit},token) => {
      commit("token",token)
    }
  }
})
