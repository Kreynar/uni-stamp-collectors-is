<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
          name="register-form">
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    placeholder="Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  placeholder="Job title"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="mail"
                  placeholder="Email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  type="tel"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  mask="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="notes"
                  placeholder="Notes"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <!--autocomplete="off"-->
          <v-text-field
            label="Username"
            v-model="username"
            :counter="3"
            required
          ></v-text-field>
          <br>
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            required
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
            :counter="6"
            required
          ></v-text-field>
          <br>
          <v-text-field
            label="First name"
            v-model="firstName"
          ></v-text-field>
          <br>
          <v-text-field
            label="First name"
            v-model="lastName"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert">{{ errorMessage }}</div>
        <br>
        <v-btn
          dark
          :class=vv.mainColorOfTheme
          @click="register">
          Register
        </v-btn>
        <br/>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '../services/AuthenticationService.js'
  import vv from '../strings.js'

  export default {
    data () {
      return {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        errorMessage: null,
        vv: vv
      }
    },
    methods: {
      async register () {
        try {
          this.errorMessage = null
          const response = await AuthenticationService.register({
            username: this.username,
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName
          })
          console.log(response.data)
        }
        catch (error) {
          this.errorMessage = error.response.data.message
        }
        finally {
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red
  }
</style>
