
import filterModule from './filterModule'
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    filters: filterModule,
  },
});
