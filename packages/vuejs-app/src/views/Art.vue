<template>
  <v-content>
    <v-container>
      <v-row>
    <v-col
      cols="6"
    >
      <expandable-image
        :src="require('../assets/digitalart/vader.jpg')"
        >
        </expandable-image>
    </v-col>
    <v-col
      cols="6"
    >
      <expandable-image
        :src="require('../assets/digitalart/pcs.jpg')"
        >
        </expandable-image>
    </v-col>
    <v-col
      cols="6"
    >
      <expandable-image
        :src="require('../assets/digitalart/twrecks.jpg')"
        >
        </expandable-image>
    </v-col>
    <v-col
      cols="6"
    >
      <expandable-image
        :src="require('../assets/digitalart/deal.jpg')"
        >
        </expandable-image>
    </v-col>
    <v-col
      cols="6"
    >
      <expandable-image
        :src="require('../assets/digitalart/rain.jpg')"
        >
        </expandable-image>
    </v-col>
    <v-col
      cols="6"
    >
      <expandable-image
        :src="require('../assets/digitalart/netboox.jpg')"
        >
        </expandable-image>
    </v-col>
  </v-row>
    </v-container>
  </v-content>
</template>

<script>
//import

export default {
  name: 'Art',

  components: {
  },

  data: () => ({
    //
  }), 
};
</script>