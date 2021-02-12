<template>
  <!-- <v-container
  style="width: 100%; margin: 0 auto; padding: 0"> -->
    <!-- <div style="width: 100%; margin: 0 auto;"> -->
      
          <v-toolbar 
          dark
          margin="0px"
          >

          <v-container

      >
      <v-toolbar 
          dark
          flat
          width="100%"
          margin="0px"
          >

            <v-toolbar-title class="mr-3 ml-1 pa-0"><v-img
              width="100%"
              max-width="200"
              
              src="../assets/card-images/banner3.png"
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
          </v-toolbar>
  
  <!-- </div> -->
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>

<style>
    .v-toolbar__content {
      padding-left: 0px;
      padding-right: 0px;
    }
</style>

