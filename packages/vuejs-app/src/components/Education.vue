<template>
<div class="educationCard" style="flex-basis: 20%">
  <v-container>
      <v-card
    class="mx-auto"
  >

    <v-app-bar
      dark
    >
      <v-toolbar-title>EDUCATION</v-toolbar-title>



    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.school"></v-card-subtitle>

                <v-card-subtitle v-text="item.date"></v-card-subtitle>

                <v-card-actions>

                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    VIEW CREDENTIAL
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                max-width="250"
                size="auto" 
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
    
  </v-container>
  </div>
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
