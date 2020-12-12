<template>
  <!-- <div style="width: 100%; margin: 0 auto;"> -->
  <!-- <v-container fluid> -->
  <!-- <v-row align="center"
    justify="center">
    <v-col> -->
    <!-- fill-height fluid-->
    
    <!-- <div style="flex-basis: 0%"> 
      class="ma-0 pa-0"-->
    <v-footer
      padless
    >

    <!-- <div margin="25px"> -->
    <v-card
      flat
      tile
      class="white--text text-center"
      color="#272727"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-8 white--text"
          icon
        >
          <v-icon size="40px"
            class="my-8"
          >
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        This web SPA was created with Vuetify, a JavaScript component manager powered by Vue.js. 
        It uses the AWS Cloud Development Kit with TypeScript for automated deployment to Amazon Web Services. 
        The AWS CDK automatically provisions an S3 bucket for static hosting behind the CloudFront Content Delivery Network.
        It uses Yarn as a package manager and Yarn Workspaces to create a monolithic repository. 
        Changes are tracked by Git and Github Actions are used for continuous deployment. 
        <a href=https://github.com/austinesmith/vuejs-in-s3-over-cloudfront>View: Github Repository</a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Austin Smith</strong>
      </v-card-text>
    </v-card>
    
    

    
  </v-footer>
  <!-- </div> -->

  <!-- </div> -->
  <!-- </v-col>
  </v-row> -->
  <!-- </v-container> -->
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
      icons: [
        'mdi-github',
        'mdi-linkedin'
      ],
    }),
};
</script>
