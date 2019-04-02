import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import common from './modules/common'
import module1 from './modules/module1'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    common,
    module1
  },
  state,
  actions,
  mutations,
  getters
})
