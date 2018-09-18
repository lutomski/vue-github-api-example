import githubState from './_state';
import githubMutations from './_mutations';
import githubActions from './_actions';
import githubGetters from './_getters';

const githubModule = {
  namespaced: true,
  state: githubState,
  mutations: githubMutations,
  actions: githubActions,
  getters: githubGetters,
};

export default githubModule;
