<template>
  <v-content>
    <v-container>

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
      <b>Cloud Engineer in Omaha, NE</b>
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
        color="blue lighten-2"
        text
        @click="show = !show"
      >
        Related Links:
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
          <a href=".../assets/pdfs/saa.pdf">Updated Resume (*.pdf)</a>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

    <!-- Contact Form -->
    <v-expansion-panels dark class="mt-3">

      
      <!-- About me -->
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down" color="#424242" class="overline">
          <b>Leave Me A Message</b>
        </v-expansion-panel-header>
          
        <v-expansion-panel-content>
          <v-card >

            <!-- Form -->
              <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

        <v-textarea
          v-model="message"
      :rules="messageRules"
      label="Message"
      required
        ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
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
        </v-expansion-panel-content>

      </v-expansion-panel>
      </v-expansion-panels>

    
  </v-container>
  </v-content>
</template>

<script>
//import

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
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
};
</script>