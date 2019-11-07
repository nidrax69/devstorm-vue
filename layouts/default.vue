<template>
  <v-app dark>
    <v-app-bar color="primary" dense fixed clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-3">account_circle</v-icon>
      <v-toolbar-title app class="align-center">
        <span class="title">Ticketing App</span>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <Nuxt />
    </v-content>
  </v-app>
</template>

<style scoped>
</style>

<script>
export default {
  data () {
    return {
      drawer: true
    }
  }
}
</script>