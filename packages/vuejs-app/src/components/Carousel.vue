<template>
  <v-container>
    <div class="carouselBlock">
      <v-carousel hide-delimiters cycle>
      <v-carousel-item
       v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        >
        <v-row class="fill-height title" align="center" justify="center">
            <div>{{ item.title }}</div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "Squirrel",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "Sky",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Bird",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "Space",
        },
        {
          src: require("../assets/carousel-images/AWS.jpg"),
          title: "AWS",
        },
      ],
    };
  },
};
</script>
