<template>
  <v-content>
  <v-container>
    <v-expansion-panels dark multiple class="mb-0">

      
      <!-- About me -->
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>About Me</b>
        </v-expansion-panel-header>
          
        <v-expansion-panel-content>
          <v-card >
          Welcome to my page.
          </v-card>
        </v-expansion-panel-content>

      </v-expansion-panel>

      <!-- Projects -->
      <v-expansion-panel
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>Projects</b>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-card >
          Vue.js!
          </v-card>
        </v-expansion-panel-content>

      </v-expansion-panel>

      <!-- Education -->
      <v-expansion-panel
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>Education</b>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-card >
          Bachelors of Science in Cybersecurity
          </v-card>
        </v-expansion-panel-content>

      </v-expansion-panel>

      <!-- Certifications -->
      <v-expansion-panel
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>Certifications</b>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-card >
          AWS Certified Solutions Architect - Associate<br>
          AWS Certified Cloud Practicioner
          </v-card>
        </v-expansion-panel-content>

      </v-expansion-panel>

      <!-- Skills -->
      <v-expansion-panel
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>Skills</b>
        </v-expansion-panel-header>

        <v-expansion-panel-content enabled>
          <v-card >
          Juggling<br>
          Eating
          </v-card>
        </v-expansion-panel-content>

      </v-expansion-panel>

    </v-expansion-panels>

  </v-container>
  </v-content>
</template>

<script>
//import

export default {
  name: 'Portfolio',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>