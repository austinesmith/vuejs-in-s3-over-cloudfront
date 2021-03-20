<template>
  <v-content>
    <v-container>
      <v-card class="mb-3" color="#2b2f37">
        <!-- start col -->

        <v-row>
          <v-col cols="12">
            <v-card dark flat tile id="portpad">
              <div class="d-flex flex-no-wrap">
                <div>
                  <v-avatar class="ma-3 pl-1" size="200">
                    <v-img
                      class="expimg"
                      src="../assets/card-images/portrait.jpg"
                    ></v-img>
                  </v-avatar>
                </div>

                <div>
                  <v-card-subtitle class="pt-2"
                    ><strong>Cloud Engineer</strong> in
                    <strong>Omaha, NE</strong></v-card-subtitle
                  >

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
          <v-expansion-panel-header
            expand-icon="mdi-menu-down"
            color="#424242"
            class="overline"
          >
            <div>
              <v-icon color="#aaa6c9" class="pr-1">mdi-account</v-icon
              ><b> About Me</b>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content color="#212123" class="my-0 py-0">
            <v-container class="my-0 py-0">
              <v-card class="pa-3 my-0" flat tile font-size="2em">
                <v-card-text>
                  Welcome to the developer portfolio page of Austin Smith. This
                  website is a Vue.js single-page application and is
                  automatically deployed with AWS CDK (Amazon Web Services Cloud
                  Developer Kit). It is meant to be a living document to
                  showcase my skills and what I've been working on recently. A
                  summary of technologies used for this project, as well as a
                  link to the source code, can be viewed in the footer.<br /><br />

                  I have been a computer enthusiast for most of my life and this
                  has enabled me to develop valuable professional skills in
                  design, development, and security. My current focus is on
                  projects that take advantage of cloud resources. I do
                  development work using AWS in my free time to make sure my
                  skills are constantly improving. I genuinely enjoy the work.
                  The arguments behind adopting the cloud are as interesting as
                  they are compelling.<br /><br />

                  I'm always chasing goals in my life and I'm very driven to
                  accomplish them. Or I'm taking steps to learn new information
                  and skills and evolve myself as a person. When I'm not behind
                  a screen I enjoy being productive by doing DIY projects or
                  helping others. I always make an attempt to fix problems on my
                  own, no matter how challenging. There is no greater feeling
                  than basking in the glory of your accomplishments!<br /><br />

                  My favorite way to unwind is to visit the great outdoors with
                  my dog Forest. He's a golden-retriever/border-collie mix and
                  the best friend I'll ever have. I also love traveling, cooking
                  great food, graphic design, fixing and building things,
                  meeting new people, helping others/teaching, and riding my
                  motorcycle.<br /><br />
                </v-card-text>
                <v-card max-width="250px" tile flat class="px-5 pb-5 pt-0 mb-0">
                  <expandable-image
                    close-on-background-click
                    width="50%"
                    :src="require('../assets/card-images/bestfriend.jpg')"
                    alt="Dog"
                    title="Forest"
                  ></expandable-image>
                </v-card>
              </v-card>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Projects -->
        <v-expansion-panel>
          <v-expansion-panel-header
            expand-icon="mdi-menu-down"
            color="#424242"
            class="overline"
          >
            <div>
              <v-icon color="#aaa6c9" class="pr-1">mdi-projector-screen</v-icon
              ><b> Projects</b>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content color="#212123">
            <v-container color="282323" class="mx-0 pa-0">
              <v-row dense>
                <!-- 1 -->
                <v-col cols="12">
                  <v-card color="#262d3c" dark tile class="my-3 px-0">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="fix" word-break="normal">
                          <!-- A Dynamic Web Application with a Serverless Architecture built in CDK with API Gateway, Lambda, Dynamodb, S3, Cloudfront, Route53, and ACM. -->
                          <span class="yeller">Papio Cloud Website</span>
                        </v-card-title>

                        <v-card-text class="my-0"
                          ><b>Description: </b>This project is the
                          React+Typescript website I'm currently making for
                          Cloud company called Papio Cloud. It uses a responsive
                          design to maintain a clean look on any device. The
                          navigation switches from an app bar to an app drawer
                          based on the viewport. It uses easy-peasy as a data
                          store to dynamically display content and make updating
                          easier. It has a very polished look featuring many
                          aesthetic upgrades such as the nav bar only elevating
                          on scroll and an animated footer. The entire website
                          is created in React using only Typescript and hosted
                          on AWS S3.</v-card-text
                        >

                        <v-card-actions>
                          <v-btn
                            text
                            class="ml-2 mt-5"
                            outlined
                            href="https://react-test.papiocloud.com/"
                            to=""
                          >
                            LIVE DEMO
                          </v-btn>
                          <br />
                        </v-card-actions>
                      </div>

                      <v-avatar class="ma-5" size="50" tile>
                        <v-img src="../assets/card-images/papio.png"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>

                <!-- 2 -->
                <v-col cols="12">
                  <v-card color="#262d3c" dark tile class="my-3 px-0">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="fix" word-break="normal">
                          <!-- A Dynamic Web Application with a Serverless Architecture built in CDK with API Gateway, Lambda, Dynamodb, S3, Cloudfront, Route53, and ACM. -->
                          <span class="yeller"
                            >Another Portfolio using React with Typescript</span
                          >
                        </v-card-title>

                        <v-card-text class="my-0"
                          ><b>Description: </b>This project creates a new
                          portfolio similar to this one only using React,
                          Typescript, and Material-UI instead of Vue,
                          Typescript, and Vuetify. This portfolio adds a switch in the banner that toggles light
                          mode and dark mode.</v-card-text
                        >

                        <v-card-actions>
                          <v-btn
                            text
                            class="ml-2 mt-5"
                            outlined
                            href="https://d27d8afdb2lg6v.cloudfront.net/"
                            to=""
                          >
                            LIVE DEMO
                          </v-btn>
                          <br />
                          <v-btn
                            text
                            class="ml-2 mt-5"
                            outlined
                            href="https://github.com/austinesmith/reactjs-portfolio"
                            to=""
                          >
                            GITHUB REPO
                          </v-btn>
                        </v-card-actions>
                      </div>

                      <v-avatar class="ma-5" size="50" tile>
                        <v-img
                          src="../assets/card-images/reactandTStransparent.png"
                        ></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>

                <!-- 3 -->
                <v-col cols="12">
                  <v-card color="#262d3c" dark tile class="my-3 px-0">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="fix" word-break="normal">
                          <!-- A Dynamic Web Application with a Serverless Architecture built in CDK with API Gateway, Lambda, Dynamodb, S3, Cloudfront, Route53, and ACM. -->
                          <span class="yeller"
                            >C.R.U.D. API built for Serverless
                            Architectures</span
                          >
                        </v-card-title>

                        <v-card-text class="my-0"
                          ><b>Description: </b>This project creates a web API
                          following the standards of REpresentation State
                          Transfer that enables create, read, update, and delete
                          functions to a NoSQL database. All resources are
                          provisioned on services fully managed by AWS for a
                          completely serverless architecture. The back end uses
                          API Gateway to trigger Lambda functions that perform
                          operations on a DynamoDB table. The front end provides
                          the client implementation of the API using a static
                          Vue.js application hosted on S3. All resources are
                          automatically provisioned using the AWS
                          CDK.</v-card-text
                        >

                        <v-card-actions>
                          <v-btn
                            text
                            class="ml-2 mt-5"
                            outlined
                            href="https://d1yuvz3b02ioxr.cloudfront.net/"
                            to=""
                          >
                            LIVE DEMO
                          </v-btn>
                          <br />
                          <v-btn
                            text
                            class="ml-2 mt-5"
                            outlined
                            href="https://github.com/austinesmith/serverless-crud-restful-api"
                            to=""
                          >
                            GITHUB REPO
                          </v-btn>
                        </v-card-actions>
                      </div>

                      <v-avatar class="ma-5" size="50" tile>
                        <v-img
                          src="../assets/card-images/serverless.png"
                        ></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>

                <!-- 2 -->

                <v-col cols="12">
                  <v-card color="#1a202c" dark tile class="mb-3">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="fix">
                          <span class="yeller"
                            >Artifact Marketplace Java Servlet</span
                          >
                        </v-card-title>

                        <v-card-text class="my-0"
                          ><b>Description:</b> This project uses Java EE to
                          create a simple one-page marketplace that allows users
                          to add, remove, and view for sale listings from a
                          database. It accomplished by deploying a *.WAR servlet
                          to an Apache Tomcat webserver. The servlets use JDBC
                          to connect to a MySQL database and persist
                          data.</v-card-text
                        >

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

                      <v-avatar class="ma-5" size="50" tile>
                        <v-img src="../assets/card-images/servlet.png"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>

                <!-- 3 -->
                <v-col cols="12">
                  <v-card color="#262d3c" dark tile class="mb-3">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="fix">
                          <span class="yeller">Digital Art</span>
                        </v-card-title>

                        <v-card-text class="my-0"
                          ><b>Description:</b> Creating digital art is a hobby
                          of mine. This is a collection of professional logos
                          and other works I have created for myself and others.
                          These were created in Adobe Photoshop. If you like
                          these designs feel free to contact me.</v-card-text
                        >

                        <v-card-actions>
                          <v-btn
                            text
                            class="ml-2 mt-5"
                            outlined
                            to=""
                            color="#ff9900"
                          >
                            <router-link to="/art">VIEW ART</router-link>
                          </v-btn>
                        </v-card-actions>
                      </div>

                      <v-avatar class="ma-5 projectavatar" tile>
                        <v-img
                          size="150"
                          src="../assets/card-images/ps.png"
                        ></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Education -->
        <v-expansion-panel>
          <v-expansion-panel-header
            expand-icon="mdi-menu-down"
            color="#424242"
            class="overline"
          >
            <div>
              <v-icon color="#aaa6c9" class="pr-1">mdi-school</v-icon
              ><b> Education</b>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content color="#212123">
            <!-- <v-container> -->
            <v-container class="my-0 py-0">
              <v-card
                class="pa-0 ma-0"
                max-width="100%"
                flat
                color="#1e1e1e"
                tile
              >
                <v-row class="pa-0 ma-0"
                  ><v-col>
                    <v-card-title class="pa-0 ma-0 fix heading"
                      >Bachelor's of Science in Cybersecurity</v-card-title
                    >

                    <v-card-subtitle class="ma-0 px-0 pt-2 pb-0">
                      <span class="bluer">December 2018</span>
                    </v-card-subtitle>

                    <v-card-text class="text--primary ma-0 px-0">
                      <div>
                        <a
                          href="https://www.unomaha.edu/college-of-information-science-and-technology/school-of-interdisciplinary-informatics/cybersecurity/bs-cybr.php"
                          >University of Nebraska Omaha</a
                        >
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col md="3">
                    <expandable-image
                      close-on-background-click
                      :src="require('../assets/card-images/degree.jpg')"
                      alt="Cybersecurity Degree"
                      title="UNO Cybersecurity Degree"
                    ></expandable-image>
                  </v-col>
                </v-row>
              </v-card>
            </v-container>
            <!-- </v-container> -->
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Certifications -->
        <v-expansion-panel>
          <v-expansion-panel-header
            expand-icon="mdi-menu-down"
            color="#424242"
            class="overline"
          >
            <div>
              <v-icon class="pr-1" color="#aaa6c9">mdi-certificate</v-icon
              ><b> Certifications</b>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content color="#212123">
            <!-- AWS CERTS -->
            <v-container class="py-0">
              <v-row
                ><v-col md="6" class="pr-2" height="100%">
                  <v-card class="pa-0 ma-0" flat color="#1e1e1e">
                    <expandable-image
                      close-on-background-click
                      :src="require('../assets/card-images/ccpr.jpg')"
                      alt="AWS Certification"
                      title="AWS Certified Cloud Practitioner"
                    ></expandable-image>

                    <v-card-title class="fix"
                      >AWS Certified Cloud Practitioner</v-card-title
                    >

                    <v-card-subtitle class="pb-0 pt-2">
                      <span class="bluer">September 2020</span>
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>
                        <a
                          href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
                          >AWS CLF-C01</a
                        >
                      </div>
                    </v-card-text>
                  </v-card> </v-col
                ><v-col md="6" class="pl-2" height="auto">
                  <v-card class="mx-auto" flat color="#1e1e1e">
                    <expandable-image
                      close-on-background-click
                      :src="require('../assets/card-images/saar.jpg')"
                      alt="AWS Certification"
                      title="AWS Certified Solutions Architect - Associate"
                    ></expandable-image>

                    <v-card-title class="fix"
                      >AWS Certified Solutions Architect</v-card-title
                    >

                    <v-card-subtitle class="pb-0 pt-2">
                      <span class="bluer">November 2020</span>
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>
                        <a
                          href="https://aws.amazon.com/certification/certified-solutions-architect-associate/"
                          >AWS SAA-C02</a
                        >
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col></v-row
              >
            </v-container>
            <!-- END AWS CERTS -->
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Skills -->
        <v-expansion-panel>
          <v-expansion-panel-header
            expand-icon="mdi-menu-down"
            color="#424242"
            class="overline"
          >
            <div>
              <v-icon class="pr-1" color="#aaa6c9">mdi-brain</v-icon
              ><b> Skills</b>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content enabled color="#212123">
            <v-container class="my-0 py-0">
              <v-card flat tile class="px-3" color="#1e1e1e">
                <v-card-text class="text--primary; justify-center">
                  <ul>
                    <div>
                      <li>
                        Using Typescript, React.js, Material-UI, and Gatsby to
                        create progressive web applications
                      </li>
                    </div>

                    <div>
                      <li>
                        Using JavaScript, Vue.js, and Vuetify to create
                        attractive single page applications
                      </li>
                    </div>

                    <div>
                      <li>
                        Building cloud infrastructures and serverless
                        architectures as code using CDK and CloudFormation in
                        AWS
                      </li>
                    </div>

                    <div>
                      <li>
                        Experience with Java, C, scripting, and using the
                        command line interface
                      </li>
                    </div>

                    <div>
                      <li>
                        Knowledgeable in best practices used to strengthen
                        information security
                      </li>
                    </div>

                    <div>
                      <li>Experience working with databases and SQL</li>
                    </div>

                    <div>
                      <li>
                        Working efficiently by leveraging automation, version
                        control, and rapid development
                      </li>
                    </div>

                    <div>
                      <li>
                        Best Practices for development such as build automation
                        and continuous integration
                      </li>
                    </div>
                  </ul>
                </v-card-text>
              </v-card>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Portfolio",

  components: {},

  data: () => ({ 
    items: [],
  }),
};
</script>