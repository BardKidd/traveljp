import { createStore } from "vuex";

export default createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    ISLOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isLoading: (state) => state.isLoading,
  },
});
