<template>
  <!--<div id="app">-->
    
  <v-app>
    <v-app-bar
      padless
      flat
      dark
    >
      <Header/>
    </v-app-bar>


    <router-view></router-view>

    <v-footer
    
    >
      <Footer/>
    </v-footer>


  </v-app>
 <!-- </div> -->
 
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
