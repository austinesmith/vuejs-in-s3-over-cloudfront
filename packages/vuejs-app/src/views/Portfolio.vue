<template>
  <v-content>
  <v-container>

    <v-card
    class="mb-3"
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
          <v-card flat>
          <br>Welcome to the developer portfolio page of Austin Smith.  This website is a Vue.js SPA (single page application) and is automatically deployed with AWS CDK (Amazon Web Services Cloud Developer Kit).  It is being used to showcase my skills and what I've been working on recently.
          The summary about the methodologies used in this project, as well as the source code, can be viewed in the footer.<br><br>

          I have been a computer hobbyist all my life which has helped me sharpen skills in security, design, and development.  My current career path is to work with Amazon Web Services professionally.  My goal is to become an AWS Cloud Engineer or Solutions Architect.
          I do development work using AWS in my free time so that my skills are constantly improving.  I genuinely enjoy the work.  The arguments behind adopting the cloud are not only compelling, they're incredibly interesting.<br><br>
          
          I'm always chasing a goal in my life and I'm very driven to accomplish them.  Or I'm taking steps to learn new information and skills and evolve myself as a person.  When I'm not behind a screen I enjoy being productive by doing DiY projects or helping others.  
          I always make an attempt to fix a problem on my own, no matter what the problem is.  I also like finding entertaining ways to better myself, like choosing documentaries instead of fiction.  There is no greater feeling than basking in the glory of your accomplishments!<br><br>
          
          My favorite way to unwind is to visit the great outdoors with my best friend; my dog Forest.  He's a golden-retriever/border-collie mix and a gift to the earth.  I also love traveling, cooking great food, meeting new people, and riding my motorcycle.<br><br>
          
         
          <v-card
          max-width="400px"
          >
          <expandable-image
      class="image"
      max-height="200px"
      :src="require('../assets/card-images/forest.jpg')"
      alt="Dog"
      title="Forest"
    ></expandable-image>
          </v-card>

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
          
          
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#121212"
            dark
          >

              <div class="d-flex flex-no-wrap justify-space-between">
              <div>

            <v-card-title class="headline">
              Digital Art
            </v-card-title>

            <v-card-subtitle>This is a collection of professional logos I've designed and created from scratch. These were created as a hobby in Adobe Photoshop. If you like these designs feel free to contact me for a commission.</v-card-subtitle>

            <v-card-actions>
              <v-btn 
                text
                class="ml-2 mt-5"
                outlined
                to=""
              >
                <router-link to="/Logos">View Digital Art</router-link>
              </v-btn>
            </v-card-actions>

              </div>

              <v-avatar
                class="ma-5"
                size="150"
                tile
              >
                <v-img src="../assets/card-images/photoshop.png"></v-img>
              </v-avatar>
            </div>

          </v-card>
        </v-col>
        
      </v-row>
    
          
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
    class="mx"
    max-width="100%"
    rounded
    flat
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

    

    <expandable-image
      class="image"
      :src="require('../assets/card-images/degree.jpg')"
      alt="Cybersecurity Degree"
      title="UNO Cybersecurity Degree"
    ></expandable-image>
    


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


    <expandable-image
      class="image"
      :src="require('../assets/card-images/ccp.jpg')"
      alt="AWS Certification"
      title="AWS Certified Cloud Practitioner"
    ></expandable-image>

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
    <expandable-image
      class="image"
      :src="require('../assets/card-images/saa.jpg')"
      alt="AWS Certification"
      title="AWS Certified Solutions Architect - Associate"
    ></expandable-image>

      <v-card-title>AWS Certified Solutions Architect</v-card-title>
    

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
          <v-card flat>
            <v-card-text class="text--primary; justify-center">
              <ul>
                <div><li>Using JavaScript, Vue.js, and Vuetify to create responsive user interfaces</li></div>
      
                <div><li>Building infrastructure and serverless applications using CDK and CloudFormation in AWS</li></div>

                <div><li>Experience writing Java, C, scripts, and using the command line interface</li></div>

                <div><li>Knowledgeable in best practices for ensuring information security</li></div>

                <div><li>Experience with databases and SQL</li></div>

                <div><li>Working in teams by following development lifecycles, using Git, and code reviews</li></div>

                <div><li>Using Yarn and NPM to manage project dependencies and GitHub Actions for CI/CD</li></div>
              </ul>
    </v-card-text>
          </v-card>
        </v-expansion-panel-content>

      </v-expansion-panel>

    </v-expansion-panels>

  </v-container>
  </v-content>
</template>

<script>


export default {
  name: 'Portfolio',

  components: {
  },

  data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#121212',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Logo Design',
          artist: 'A collection of professional logos I\'ve designed and created from scratch.  Designing logos is a hobby of mine.  These were created with Adobe Photoshop.  If you like these designs you may contact me for commission.',
        },
      ],
    }),
  
};
</script>