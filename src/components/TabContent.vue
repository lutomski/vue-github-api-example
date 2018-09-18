<template>
  <div>
    <v-card flat>
      <v-card-text>
        <div v-if="!userData">
          <v-progress-linear :indeterminate="true"></v-progress-linear>
        </div>
        <div v-else>
          <h1>User information:</h1>
          <v-layout row
            v-for="(item, index) in userData"
            :key="index">
            <v-flex xs12>
              <strong>{{ index }}:</strong> {{ item }}
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 mt-5>
              <h1>User repositories:</h1>
              <div v-if="userReposData && userReposData.length > 0">
                <div
                  v-for="(repos, index) in userReposData"
                  :key="index">
                  <v-layout row
                    v-for="(item, key) in repos"
                    :key="key">
                    <v-flex xs12>
                      <div v-if="key === 'id' && index !== 0"><hr/></div>
                      <strong>{{ key }}:</strong> {{ item }}
                    </v-flex>
                  </v-layout>
                </div>
              </div>
              <div v-else>
                <v-alert
                  :value="true"
                  type="warning"
                >
                  {{ username }} doesn’t have any public repositories yet.
                </v-alert>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Tabs',

  props: {
    username: String,
    active: Boolean,
  },

  data() {
    return {
      userData: null,
      userReposData: null,
    };
  },

  computed: {
    ...mapGetters('github', {
      githubUsersData: 'getGithubUsersData',
      githubUserData: 'getGithubUserData',
      githubUsersReposData: 'getGithubUsersReposData',
      githubUserReposData: 'getGithubUserReposData',
    }),
  },

  watch: {
    active: async function(val) {
      if (val === true) {
        await this.getUserData();
        await this.getUserReposData();
      } else {
        this.resetData();
      }
    },
  },

  methods: {
    ...mapActions('github', [
      'getGithubUserDataFromApi',
      'getGithubUserReposFromApi',
    ]),

    async getUserData() {
      const githubUserData = this.githubUsersData.find(githubUser => githubUser.login === this.username);
      if (githubUserData) {
        this.userData = githubUserData;
        return;
      }

      try {
        await this.getGithubUserDataFromApi({
          username: this.username,
        })
      } catch (e) {
        console.log(e);
      }

      if (this.githubUserData) {
        this.userData = this.githubUserData;
        return;
      }

      return null;
    },

    async getUserReposData() {
      const githubUserRepoData = this.githubUsersReposData.find(repo => repo.login === this.username);
      if (githubUserRepoData || githubUserRepoData && githubUserRepoData.isLoaded === true) {
        this.userReposData = githubUserRepoData.reposData;
        return;
      }

      try {
        await this.getGithubUserReposFromApi({
          username: this.username,
        })
      } catch (e) {
        console.log(e);
      }

      this.userReposData = this.githubUserReposData;

      return this.userReposData;
    },

    resetData() {
      this.userData = null;
      this.userReposData = null;
    }
  }
}
</script>
