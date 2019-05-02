import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slides: {}
  },
  getters: {
    current_slide: state => index => state.slides[index]
  },
  mutations: {
    GET_SLIDE_INFO_FROM_JSON(state, payload) {
      state.slides = payload;
    }
  },
  actions: {
    getSlideInfo({ commit }, payload) {
      commit("GET_SLIDE_INFO_FROM_JSON", payload);
    }
  }
});
