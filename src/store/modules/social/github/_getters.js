const githubGetters = {
  getGithubUsernames(state) {
    return state.githubUsernames;
  },
  getGithubUserData(state) {
    return state.githubUserData;
  },
  getGithubUsersData(state) {
    return state.githubUsersData;
  },
  getGithubUserReposData(state) {
    return state.githubUserReposData;
  },
  getGithubUsersReposData(state) {
    return state.githubUsersReposData;
  },
};

export default githubGetters;
