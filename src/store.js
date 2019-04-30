import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slide_info: {
      slide_id: null
    }
  },
  getters: {},
  mutations: {
    GET_SLIDE_INFO_FROM_JSON(state, payload) {
      state.slide_info = payload;
    }
  },
  actions: {
    getSlideInfo({ commit }, payload) {
      commit("GET_SLIDE_INFO_FROM_JSON", payload);
    }
  }
});
