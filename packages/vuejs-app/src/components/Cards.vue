<template>
  <v-container>
    
  </v-container>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      items: [
        {
          color: '#404040',
          src: require('../assets/card-images/degree.jpg'),
          title: 'Bachelor of Science in Cybersecurity',
          school: 'University of Nebraska Omaha',
          date: 'December 2018',
        },
      ]
    };
  }
};
</script>
