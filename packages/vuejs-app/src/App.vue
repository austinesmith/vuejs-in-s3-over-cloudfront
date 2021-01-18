<template>
  <!--<div id="app">-->
    
  <v-app>
    <v-app-bar
      app
      flat
      dark
    >
      <Header/>
    </v-app-bar>

    <router-view></router-view>

    <v-footer>
      <Footer/>
    </v-footer>

  </v-app>
 <!-- </div> -->
 
</template>

<script>
import Header from './components/Header';
//import Carousel from './components/Carousel';
//import Education from './components/Education';
//import Certifications from './components/Certifications';
import Footer from './components/Footer';
//import ExpansionPanel from './components/ExpansionPanel'

export default {
  name: 'App',

  components: {
    Header,
    //Carousel,
    //Education,
    //Certifications,
    Footer,
    //ExpansionPanel
  },

  data: () => ({
    //
  }),
};
</script>
