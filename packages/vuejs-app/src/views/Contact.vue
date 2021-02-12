<template>
  <v-content>
    <v-container>

      <!--
      <div class="d-flex flex-no-wrap justify-space-between">
            <div>
    
            </div><div>
              <v-img
              width="100%"
              max-width="65"

  src="../assets/card-images/contact2.png"
></v-img>
</div></div>
-->

    <!-- Contact Card -->
    <v-card
    class="mx-auto"
    max-width="100%"
  >
    <v-img
      class="white--text align-right"
      src="../assets/card-images/omaha.jpg"
      height="350px"
    >

    <v-card-title>
      <v-spacer></v-spacer><b>Cloud Engineer in Omaha, NE</b>
    </v-card-title></v-img>

    <v-card-title>
      Contact Me:
    </v-card-title>

    <v-card-subtitle>
      Austin Smith<br>
      <a href = "mailto: austinfosec@gmail.com">austinfosec@gmail.com</a>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        text
        @click="show = !show"
      >
        LINKS AND DOWNLOADS
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <b>View My Github:</b><br>
          <a href="https://github.com/austinesmith/">github.com/austinesmith</a><br><br>

          <b>Add Me On Linkedin:</b><br>
          <a href="https://www.linkedin.com/in/austinfosec/">linkedin.com/in/austinfosec</a><br><br>

          <b>Download My Resume:</b><br>
          <a :href="require('../assets/pdfs/austinsmithresume2021.pdf')" target="_blank">Most Recent Resume (*.pdf)</a><br><br>

          <b>Paypal:</b><br>
          <a href="https://www.paypal.me/austinesmith/">paypal.me/austinesmith</a><br><br>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

    <!-- Contact Form -->
    <v-expansion-panels dark class="mt-3">

      
      <!-- About me -->
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <div><v-icon class="pr-2" color="#aaa6c9"> mdi-email-variant</v-icon><b>Send Me A Message</b></div>
        </v-expansion-panel-header>
          
        <v-expansion-panel-content>
          <v-container>
          <v-card 
            flat
          >

            <!-- Form -->
              <v-form
    id="contactForm"
    ref="form"
    @submit.prevent="sendEmail"
    v-model="valid"
    lazy-validation
    
  >
    <v-text-field
      v-model="name"
      :counter="25"
      :rules="nameRules"
      label="Name"
      required
      name="name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      type="email"
      name="email"
    ></v-text-field>

        <v-textarea
          v-model="message"
      :rules="messageRules"
      label="Message"
      required
      name="message"
        ></v-textarea>

    <v-btn
      :disabled="!valid"
      type="submit"
      color="success"
      class="mr-4"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset
    </v-btn>

  </v-form>
            <!-- Form -->

          </v-card>
          </v-container>
        </v-expansion-panel-content>

      </v-expansion-panel>
      </v-expansion-panels>

    
  </v-container>
  </v-content>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',

  components: {
  },

  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length >= 25) || 'Message must be more than 25 characters',
      ],
      show: false,
      
    }),

    
    methods: {
      reset () {
        this.$refs.form.reset()
      },
      sendEmail: (e) => {
        emailjs
          .sendForm(
            "service_6avd84s",
            "template_tfk1ats",
            e.target,
            "user_SelNr45w7Q0g6J4QPB8hv"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.status, result.text);
            },
            (error) => {
             console.log("FAILED...", error);
            }
          );
        e.target.reset();
      document.getElementById("contactForm").innerHTML="Success! Thank you for sending me a message. I will respond to the email provided in the message as soon as I can.";
      }
    }
}
</script>