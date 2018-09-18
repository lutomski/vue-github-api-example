<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <v-tabs
          v-model="active"
          transition="slide-y-transition"
          color="cyan"
          dark
          slider-color="yellow"
        >
          <v-tab ripple>
            Home
          </v-tab>
          <v-tab
            v-if="githubUsernamesCount > 0"
            v-for="n in githubUsernamesCount"
            :key="n"
            ripple
          >
            {{ githubUsernames[n-1] }}
          </v-tab>
          <v-tab-item>
            <GithubInput></GithubInput>
            <v-layout row>
              <v-flex xs12 mt-3>
                <div class="text-xs-center">
                  <v-btn
                    primary
                    block
                    @click="moveToFirstTab">
                    Submit
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-tab-item>
          <v-tab-item
            v-if="githubUsernamesCount > 0"
            v-for="n in githubUsernamesCount"
            :key="n"
          >
            <TabContent
              :username="githubUsernames[n-1]"
              :active="active === n"
            >
            </TabContent>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TabContent from '../components/TabContent';
import GithubInput from '../components/GithubInput';

export default {
  name: 'Tabs',
  components: {
    TabContent,
    GithubInput,
  },

  data () {
    return {
      active: null,
    }
  },

  computed: {
    ...mapGetters('github', {
      githubUsernames: 'getGithubUsernames',
    }),

    githubUsernamesCount() {
      return this.githubUsernames.length;
    },
  },

  methods: {
    moveToFirstTab() {
      this.active = 1;
      }
  }
}
</script>
