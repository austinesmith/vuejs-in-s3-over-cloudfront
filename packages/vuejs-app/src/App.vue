<template>
  <v-app>
    dark
    <v-app-bar
      app
      flat
      dark
    >
      <Header/>
    </v-app-bar>
    <v-content>
      <Carousel/>
    </v-content>
    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Carousel from './components/Carousel';

export default {
  name: 'App',

  components: {
    Header,
    Carousel
  },

  data: () => ({
    //
  }),
};
</script>
