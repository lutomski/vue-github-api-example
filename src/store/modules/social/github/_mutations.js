const githubMutations = {
  setGithubUsernames(state, githubUsernames) {
    state.githubUsernames = githubUsernames;
  },
  setGithubUserData(state, githubUser) {
    state.githubUserData = githubUser;
    state.githubUsersData.push(githubUser);
  },
  setGithubReposData(state, payload) {
    const repoData = {
      login: payload.username,
      isLoaded: true,
      reposData: payload.data,
    };
    state.githubUserReposData = payload.data;
    state.githubUsersReposData.push(repoData);
  },
};

export default githubMutations;
