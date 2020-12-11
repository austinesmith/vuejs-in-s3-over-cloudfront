<template>
  <v-app dark>

    <v-app-bar
      app
      flat
      dark
    >
      <Header/>
    </v-app-bar>
    <v-content>
      <Carousel/>
      <Education/>
      <Certifications/>
    </v-content>
    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Carousel from './components/Carousel';
import Education from './components/Education';
import Certifications from './components/Certifications';

export default {
  name: 'App',

  components: {
    Header,
    Carousel,
    Education,
    Certifications
  },

  data: () => ({
    //
  }),
};
</script>
