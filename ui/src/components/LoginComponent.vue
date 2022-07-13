<template>
  <div class="function-container"  id="login-container">
    <form class="forms" id="login-form" @submit="loginUser">
      <input name="email" class="form-input" type="email" placeholder="Your email"/>
      <input name="pwd" class="form-input" type="password" placeholder="Password"/>
      <button class="submit-button"  @submit="loginUser">Login</button>
    </form>

  </div>
</template>

<script>
import axios from "axios";
import {axios_config} from "@/axios.configs";

export default {
  name: "LoginComponent",
  data() {
    return{
      logged: false,
    }
  },
  methods:{
    async loginUser(e) {
      e.preventDefault();
      let form = document.getElementById("login-form");
      console.log(form)
      let user = {
        email: form.elements["email"].value,
        pwd: form.elements["pwd"].value
      }
      console.log(user)
      try {
        let res = await axios.post("/api/auth/login",{user: user},axios_config);
        console.log(res)
      //debugger;//eslint-disable-line
      } catch (err) {
        window.alert("wrong email or password")
        console.log(err.message);
      }
    }
  }
}
</script>

<style scoped>

</style>