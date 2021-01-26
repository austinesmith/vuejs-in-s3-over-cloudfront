<template>
  <v-content>
  <v-container>

    <v-card
    class="mb-0"
    tile
  >
    <!-- start col -->
    
    <v-row>
        <v-col
          
          cols="12"
        >
          <v-card
            dark
            flat
            
            id="portpad"
          >
            <div class="d-flex flex-no-wrap">
            <div>
              <v-avatar
                class="ma-3"
                size="200"
                tile
              >
                <v-img src="../assets/card-images/squareport.jpg"></v-img>
              </v-avatar>
</div>

              <div>
                <v-card-title
                  class="headline fix"
                >Austin Smith</v-card-title>

                <v-card-subtitle>Cloud Engineer in Omaha, NE</v-card-subtitle>

                <v-card-text id="credentials">
                  <ul>
                  <li>Bachelor's of Science in Cybersecurity</li>
                  <li>AWS Certified Solutions Architect - Associate</li>
                  <li>AWS Certified Cloud Practitioner</li>
                  </ul>
                </v-card-text>
              </div>
            

              
            </div>
          </v-card>
        </v-col>

    </v-row>
  </v-card>

    <!-- expansion panel start -->
    <v-expansion-panels dark multiple class="mb-0">

      
      <!-- About me -->
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>About Me</b>
        </v-expansion-panel-header>
          
        <v-expansion-panel-content>
          
          <v-container>
          <v-card flat>
            
          <br>Welcome to the developer portfolio page of Austin Smith.  This website is a Vue.js single-page application and is automatically deployed with AWS CDK (Amazon Web Services Cloud Developer Kit).  It is meant to be a living document to showcase my skills and what I've been working on recently.
          A summary of technologies used for this project, as well as a link to the source code, can be viewed in the footer.<br><br>

          I have been a computer enthusiast for most of my life and this has enabled me to develop valuable professional skills in design, development, and security.  My current goal is to work in any development position that compliments cloud computing.  My career goal is to become an Cloud Engineer or Solutions Architect.
          I do development work using AWS in my free time to make sure my skills are constantly improving.  I genuinely enjoy the work.  The arguments behind adopting the cloud are not only compelling, they're incredibly interesting.<br><br>
          
          I'm always chasing goals in my life and I'm very driven to accomplish them.  Or I'm taking steps to learn new information and skills and evolve myself as a person.  When I'm not behind a screen I enjoy being productive by doing DIY projects or helping others.  
          I always make an attempt to fix problems on my own, no matter how challenging.  There is no greater feeling than basking in the glory of your accomplishments!<br><br>
          
          My favorite way to unwind is to visit the great outdoors with my dog Forest.  He's a golden-retriever/border-collie mix and the best friend I'll ever have.  I also love traveling, cooking great food, graphic design, meeting new people, and riding my motorcycle.<br><br>
         
         

          <v-card
          
            max-width="250px"
            tile
            flat
          >
          <expandable-image
      width="50%"
      :src="require('../assets/card-images/bestfriend.jpg')"
      alt="Dog"
      title="Forest"
    ></expandable-image>
          </v-card
          >
          </v-card>
          </v-container>

        </v-expansion-panel-content>

      </v-expansion-panel>

      <!-- Projects -->
      <v-expansion-panel
      >
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>Projects</b>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-container>
          
      
      <v-row dense>

        <!-- 1 -->
        <v-col cols="12">
          <v-card
            color="#121212"
            dark
          >

              <div class="d-flex flex-no-wrap justify-space-between">
              <div>

            <v-card-title class="headline fix">
              Serverless C.R.U.D. RESTful API
            </v-card-title>

            <v-card-subtitle>This project creates a web API following the standards of REpresentation State Transfer that enables create, read, update, and delete functions to a database. The project uses AWS managed resources for a serverless architecture. It uses an API Gateway with Lambda triggers that interact with a DynamoDB table. All resources are automatically provisioned using the AWS CDK.</v-card-subtitle>

            <v-card-actions>
              <v-btn 
                text
                class="ml-2 mt-5"
                outlined
                href="https://github.com/austinesmith/serverless-crud-restful-api"
                to=""
              >
                VIEW REPO
                
              </v-btn>
            </v-card-actions>

              </div>

              <v-avatar
                class="ma-5"
                size="50"
                tile
              >
                <v-img src="../assets/card-images/serverless.png"></v-img>
              </v-avatar>
            </div>

          </v-card>
        </v-col>
      

      <!-- 2 -->

      
        <v-col cols="12">
          <v-card
            color="#121212"
            dark
          >

              <div class="d-flex flex-no-wrap justify-space-between">
              <div>

            <v-card-title class="headline fix">
              Artifact Marketplace Servlet
            </v-card-title>

            <v-card-subtitle>This project uses Java EE to create a simple one-page marketplace that allows users to add, remove, and view for sale listings from a database.  It accomplished by deploying a *.WAR servlet to an Apache Tomcat webserver. The servlets use JDBC to connect to a MySQL database and persist data.</v-card-subtitle>

            <v-card-actions>
              <v-btn 
                text
                class="ml-2 mt-5"
                href="https://github.com/austinesmith/artifactmarketplace"
                outlined
              >
                VIEW REPO
              </v-btn>
            </v-card-actions>

              </div>

              <v-avatar
                class="ma-5"
                size="50"
                tile
              >
                <v-img src="../assets/card-images/servlet.png"></v-img>
              </v-avatar>
            </div>

          </v-card>
        </v-col>

        <!-- 3 -->
        <v-col cols="12">
          <v-card
            color="#121212"
            dark
          >

              <div class="d-flex flex-no-wrap justify-space-between">
              <div>

            <v-card-title class="headline fix">
              Digital Art
            </v-card-title>

            <v-card-subtitle>Creating digital art is a hobby of mine. This is a collection of professional logos I have created for others from scratch. These were created in Adobe Photoshop. If you like these designs feel free to contact me.</v-card-subtitle>

            <v-card-actions>
              <v-btn 
                text
                class="ml-2 mt-5"
                outlined
                to=""
              >
                <router-link to="/art">VIEW ART</router-link>
                
              </v-btn>
            </v-card-actions>

              </div>

              <v-avatar
                class="ma-5 projectavatar"
                
                tile
              >
                <v-img size="150" src="../assets/card-images/photoshop.png"></v-img>
              </v-avatar>
            </div>

          </v-card>
        </v-col>
        
      </v-row>
      </v-container>
          
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
              class="py-0"
              max-width="100%"
              flat

            >

  <v-row><v-col>
  <v-card-title class="pt-0 fix">Bachelors of Science in Cybersecurity</v-card-title>
    

    <v-card-subtitle class="pb-0">
      December 2018
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div><a href="https://www.unomaha.edu/college-of-information-science-and-technology/school-of-interdisciplinary-informatics/cybersecurity/bs-cybr.php">University of Nebraska Omaha</a></div>

    </v-card-text>
    </v-col>
    <v-col md="3">

    

    <expandable-image

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
          <v-container>
            <v-row><v-col md="6">
           <v-card
    class="mx-auto"
    flat
  >


    <expandable-image
      class="image"
      :src="require('../assets/card-images/ccp.jpg')"
      alt="AWS Certification"
      title="AWS Certified Cloud Practitioner"
    ></expandable-image>
    

      <v-card-title class="fix">AWS Certified Cloud Practitioner</v-card-title>
    

    <v-card-subtitle class="pb-0">
      September 2020
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div><a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS CLF-C01</a></div>
    </v-card-text>
  </v-card>
  </v-col><v-col md="6">
            <v-card
    class="mx-auto"
    flat
  >
    <expandable-image
      class="image"
      :src="require('../assets/card-images/saa.jpg')"
      alt="AWS Certification"
      title="AWS Certified Solutions Architect - Associate"
    ></expandable-image>

      <v-card-title class="fix">AWS Certified Solutions Architect</v-card-title>
    

    <v-card-subtitle class="pb-0">
      November 2020
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div><a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/">AWS SAA-C02</a></div>
    </v-card-text>
  </v-card>
  </v-col></v-row>

  </v-container>
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

                <div><li>Experience with Java, C, scripting, and using the command line interface</li></div>

                <div><li>Knowledgeable in best practices used for safeguarding information security</li></div>

                <div><li>Experience working with databases and SQL</li></div>

                <div><li>Working as a cohesive member of development team to ensure goals are met</li></div>

                <div><li>Productive strategies for development like build automation and continuous integration</li></div>

                
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
      items: [],
    }),
  
};
</script>