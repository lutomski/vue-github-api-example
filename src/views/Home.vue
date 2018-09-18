<template>
  <v-layout row>
    <v-flex xs12>
      <Tabs></Tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import Tabs from '../components/Tabs';

export default {
  name: 'home',

  components: {
    Tabs,
  },
}
</script>
