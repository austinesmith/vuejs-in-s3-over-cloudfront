<template>
<div>
  <v-container>
      <div>
      <v-expansion-panels dark focusable multiple class="mb-6">

      <!-- About me -->
      <v-expansion-panel
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          About Me
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
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          Projects
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
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          Education
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
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          Certifications
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
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          Skills
        </v-expansion-panel-header>

        <v-expansion-panel-content enabled>
          <v-card >
          Juggling<br>
          Eating
          </v-card>
        </v-expansion-panel-content>

      </v-expansion-panel>

    </v-expansion-panels>
    </div>
    
  </v-container>
  </div>
</template>

<script>
export default {
  name: "ExpansionPanel",

  data() {
    return {
      visible:true,
      items: [
        {
          title: 'AWS Certified Solutions Architect - Associate',
          content: 'Amazon Web Services',
        },
        {
          title: 'AWS Certified Cloud Practicioner',
          content: 'Amazon Web Services',
        },
      ]
    };
  }
};
</script>
