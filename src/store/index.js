import Vue from 'vue';
import Vuex from 'vuex';
import githubModule from './modules/social/github';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    github: githubModule,
  },
});
