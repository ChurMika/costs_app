<template>
  <v-app>
    <v-system-bar>
      <div id="nav">
        <router-link to="/dashboard">Dashboard</router-link>|
        <router-link to="/about">About</router-link> |
        <router-link to="/404">404</router-link>
      </div>
    </v-system-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
