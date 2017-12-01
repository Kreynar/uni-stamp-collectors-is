<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
          name="register-form">
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
  import vv from '../variables.js'

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
