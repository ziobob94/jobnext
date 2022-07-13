<template>
  <div class="function-container" id="register">
    <form class="forms" id="register-form" @submit="registerUser" >
      <input name="email" class="FormInput" type="email" placeholder="Your email"/>
      <input name="username" class="FormInput" type="text" placeholder="Username"/>
      <input name="pwd" class="FormInput" type="password" placeholder="Insert a Password"/>
      <input name="confirm_password" class="FormInput" type="password" placeholder="Repeat the Password"/>
      <button class="SubmitButton"  >Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import {axios_config} from "@/axios.configs";

export default {
  name: "RegisterComponent",
  data(){
    return {
    }
  },
  methods: {
    async registerUser (e) {
      e.preventDefault();
      let form = document.getElementById("register-form")
      if(form.elements["confirm_password"].value === form.elements["pwd"].value) {
        let user = {
          email: form.elements["email"].value,
          username: form.elements["username"].value,
          pwd: form.elements["pwd"].value,
          signup_date: moment().format("LLLL"),
        }
        console.log(user)
        try {
          console.log("reg")
          let regist = await axios.post("/api/auth/register",{user: user},axios_config);
          console.log("REGISTER",regist)
        } catch (err) {
          console.log(err.message);
        }
      }
      else {
        window.alert("PASSWORDS DOESN'T MATCH");
      }
    }
  }
}
</script>

<style scoped>

</style>