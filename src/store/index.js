import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cachedData: {}
  },
  mutations: {
    setCachedData(state, { key, page, data }) {
      state.cachedData[`${key}_${page}`] = data;
    }
  },
  actions: {
    getCachedData({ state }, { key, page }) {
      const cachedData = state.cachedData[`${key}_${page}`];
      if (cachedData) {
        return Promise.resolve(cachedData);
      }
      return null;
    }
  },
  modules: {}
});