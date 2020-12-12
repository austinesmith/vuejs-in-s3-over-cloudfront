<template>
  <v-content>
  <v-container>

    <v-card
    class="mb-3"
    tile
  >
    <!-- start col -->
    <v-container>
    <v-row no-gutters>
      <v-col md="4">

    <v-img
    max-height="200px"
    max-width="500px"
      img-border="10px"
      src="../assets/card-images/austin.jpg"
    >
    </v-img>

      </v-col>
      <v-col md="8" class="text-center">
        

        <v-card-title class="justify-center"><b>Austin Smith</b></v-card-title>
    <v-card-subtitle class="pb-0">
      Lives in Omaha, NE, USA<br>

      Went to University of Nebraska Omaha<br><br>
    </v-card-subtitle>

    <v-card-text class="text--primary; justify-center">
      <ul>
      <div><li>BS in Cybersecurity</li></div>
      

      <div><li>2x AWS Certified</li></div>

      <div><li>3 years professional development experience</li></div>
      </ul>
    </v-card-text>

    <!-- end col -->
   
    </v-col>
    </v-row>
    </v-container>
  </v-card>

    <!-- expansion panel start -->
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
          <!-- <v-container> -->
            <v-card
    class="mx-auto"
    max-width="100%"
    rounded
  >

  <v-row no-gutters><v-col>
  <v-card-title>Bachelors of Science in Cybersecurity</v-card-title>
    

    <v-card-subtitle class="pb-0">
      December 2018
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div><a href="https://www.unomaha.edu/college-of-information-science-and-technology/school-of-interdisciplinary-informatics/cybersecurity/bs-cybr.php">University of Nebraska Omaha</a></div>

    </v-card-text>
    </v-col><v-col md="3">
    <v-img
      class="white--text align-end"
      src="../assets/card-images/degree.jpg"
    ></v-img>
      </v-col>
      </v-row>
  </v-card>
          <!-- </v-container> -->
        </v-expansion-panel-content>

      </v-expansion-panel>

      <!-- Certifications -->
      <v-expansion-panel
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>Certifications</b>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <!-- AWS CERTS -->
            <v-row><v-col md="6">
           <v-card
    class="mx-auto"
  >
    <v-img
      class="white--text align-end"
      height="150px"
      src="../assets/card-images/ccp.jpg"
    ></v-img>

      <v-card-title>AWS Certified Cloud Practitioner</v-card-title>
    

    <v-card-subtitle class="pb-0">
      September 2020
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Amazon Web Services</div>
    </v-card-text>
  </v-card>
  </v-col><v-col md="6">
            <v-card
    class="mx-auto"
  >
    <v-img
      class="white--text align-end"
      height="150px"
      src="../assets/card-images/saa.jpg"
    ></v-img>

      <v-card-title>AWS Certified Solutions Architect - Associate</v-card-title>
    

    <v-card-subtitle class="pb-0">
      November 2020
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Amazon Web Services</div>
    </v-card-text>
  </v-card>
  </v-col></v-row>
          <!-- END AWS CERTS -->
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