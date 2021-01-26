<template>
  <v-container style="width: 100%; margin: 0 auto;">
    <!-- <div style="width: 100%; margin: 0 auto;"> -->
          <v-toolbar dark flat>

            <v-toolbar-title><v-img
              width="100%"
              max-width="175"

  src="../assets/card-images/banner.png"
></v-img></v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>

            <v-btn text>
              <router-link to="/">portfolio</router-link>
            </v-btn>

            <v-btn text>
              <router-link to="/Contact">contact</router-link>
            </v-btn>

            </v-toolbar-items>
          </v-toolbar>
  </v-container>
  <!-- </div> -->
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>
