import axios from 'axios';

const githubActions = {
  async getGithubUserDataFromApi({ commit }, payload) {
    const response = await axios.get(`https://api.github.com/users/${payload.username}`);
    const data = response.data;
    commit('setGithubUserData', data);
  },
  async getGithubUserReposFromApi({ commit }, payload) {
    const username = payload.username;
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    const data = response.data;
    commit('setGithubReposData', {
      data: data,
      username: username,
    });
  },
};

export default githubActions;
