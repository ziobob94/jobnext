<template>
  <div class="app-container">
    <h1>NEXTJOB</h1>
    <ul class="app-functions-bar">
      <li class="function-link" :id="'login'" @click="setView">Login</li>
      <li class="function-link" :id="'signup'" @click="setView"> Signup </li>
      <li class="function-link" :id="'profile'">Profile</li>
      <li class="function-link" :id="'home'" @click="setView"> Home </li>
      <li class="function-link" :id="' creator'" @click="setView">Creator </li>
    </ul>
    <LoginComponent v-if="(this.view === 'login')"/>
    <RegisterComponent v-if="(this.view === 'signup')"/>
    <ProfileComponent v-if="(this.view === 'profile')"/>
<!--<HomeComponent v-if="(this.view === 'home')"/>-->
    <CreatorComponent v-if="(this.view === 'creator')"/>

  </div>

</template>

<script>

import LoginComponent from "@/components/LoginComponent";
import RegisterComponent from "@/components/RegisterComponent";
import ProfileComponent from "@/components/ProfileComponent";
import CreatorComponent from "@/components/CreatorComponent";

export default {
  name: 'App',
  components: {
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CreatorComponent
  },
  data(){
    return {
      view: "login"
    }
  },
  mounted() {

  },
  methods:{
    setView(e){
      this.view = e.target.id;
    }
  }
}
</script>

<style lang="scss">

</style>
