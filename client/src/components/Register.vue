<template>
  <div>
    <h1>Register</h1>
    <input
      type="text"
      name="username"
      v-model="username"
      placeholder="username"
    />
    <br/>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"
    />
    <br/>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <br/>
    <input
      type="text"
      name="firstName"
      v-model="firstName"
      placeholder="first name"
    />
    <br/>
    <input
      type="text"
      name="lastName"
      v-model="lastName"
      placeholder="last name"
    />
    <br/>
    <button
      v-on:click="register"
    >Register</button><!--@click="register"-->
  </div>
</template>

<script>
  import AuthenticationService from '../services/AuthenticationService.js'

  export default {
    data () {
      return {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }
    },
    methods: {
      async register () {
        const response = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName
        })
        console.log(response.data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
