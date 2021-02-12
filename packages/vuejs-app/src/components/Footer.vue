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
        <SPAN STYLE="font-size:10px">
This website is a single-page application (SPA) powered by the Vue.js JavaScript framework.
The user interface was built using a component framework called Vuetify for responsive design.
The application is hosted on the Amazon Web Services (AWS) cloud platform using a serverless architecture.
The static Vue.js application is stored on a fully managed AWS key/value database called Simple Storage Service (S3).
The website is accessed via a content delivery network (CDN) called AWS Cloudfront that uses edge caching to lower latency.
All of the infrastructure was written as code in TypeScript for automatic deployments using the AWS Cloud Development Kit (CDK).
The project build and dependencies are consolidated into a monolithic repository and managed by Yarn Workspaces.
Changes are tracked using Git and Github actions are used for continuous integration on push.<br> <a href=https://github.com/austinesmith/vuejs-in-s3-over-cloudfront>[View: This Repository]</a><br>
        </SPAN>
        
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="grey--text">
        
        <strong class="white--text">Created by Austin Smith</strong> — <a href="https://opensource.org/licenses/ISC">ISC</a> {{ new Date().getFullYear() }}<br><br>
        <span font-size="200%"><em>powered by:</em></span><br>
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
