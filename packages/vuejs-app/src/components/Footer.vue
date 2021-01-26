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
      class="mb-n1"
      padless
      flat
    >


    <!-- <div margin="25px"> -->
    <v-card
    
      align="center"
      tile
      flat
      class="white--text text-center"
      color="#272727"
    >
      <v-card-text>
        <v-btn
          class="mx-8 white--text"
          icon
          href="https://github.com/austinesmith"
          target="_blank"
        >
          <v-icon size="40px"
            class="my-8"
          >
            mdi-github
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-8 white--text"
          icon
          href="https://www.linkedin.com/in/austinfosec/"
          target="_blank"
        >
          <v-icon size="40px"
            class="my-8"
          >
            mdi-linkedin
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-8 white--text"
          icon
          href="mailto:austinfosec@gmail.com"
          target="_blank"
        >
          <v-icon size="40px"
            class="my-8"
          >
            mdi-email
          </v-icon>
        </v-btn>


      </v-card-text>

      <v-card-text class="grey--text pt-0">
        
        This web SPA was created with Vuetify, a JavaScript component manager powered by Vue.js. 
        It uses the AWS Cloud Development Kit with TypeScript for automated deployment to Amazon Web Services. 
        The CDK automatically provisions an S3 bucket for static hosting behind the CloudFront Content Delivery Network.
        It uses Yarn as a package manager and Yarn Workspaces to create a monolithic repository. 
        Changes are tracked by Git and Github Actions are used for CI/CD.<br> <a href=https://github.com/austinesmith/vuejs-in-s3-over-cloudfront>[View: This Repository]</a><br>
        
        
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="grey--text">
        
        <strong class="white--text">Created by Austin Smith</strong> — <a href="https://opensource.org/licenses/ISC">ISC</a> {{ new Date().getFullYear() }}<br><br>
        <span font-size="200%"><em>powered by</em></span><br>
        <img src="../assets/carousel-images/awswhite.png" width="100">
        
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
    }),
};
</script>
