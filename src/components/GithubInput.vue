<template>
  <div>
    <v-layout row>
      <v-flex xs12 mt-5>
        <div class="text-xs-center">
          <label class="text-label">
            Github username:
            <input
              type="text"
              class="text-input"
              v-model="githubUsernames"
              @keyup.space="addUsernames"
            />
          </label>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'GithubInput',

  data () {
    return {
      githubUsernames: null,
    }
  },

  methods: {
    ...mapMutations('github', [
      'setGithubUsernames',
    ]),

    addUsernames() {
      if (this.githubUsernames.indexOf(' ') !== -1) {
        const usernames = this.githubUsernames.split(' ').filter((e) => {
          return e;
        });
        this.setGithubUsernames(usernames);
      }
    },
  },
}
</script>
