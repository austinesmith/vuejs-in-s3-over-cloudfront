<template>
  <v-container style="width: 100%; margin: 0 auto;">
    <!-- <div style="width: 100%; margin: 0 auto;"> -->
          <v-toolbar dark flat>

            <v-toolbar-title>Austin Smith</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>

            <v-btn text>
              <router-link to="/">Portfolio</router-link>
            </v-btn>

            <v-btn text>
              <router-link to="/Contact">Contact</router-link>
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
