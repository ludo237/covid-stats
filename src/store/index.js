import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
