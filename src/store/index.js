import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  page: 1,

  movies: []
};

export default new Vuex.Store({
  actions,
  mutations,
  state
});
