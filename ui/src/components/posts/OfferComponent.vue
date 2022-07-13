<template>
  <h1>OFFER</h1>
  <form class="form" @submit="createOffer">
    <input class="form-input" name="title" type="text" placeholder="title"/>
    <input class="form-input" type="textarea" placeholder="write a small description"/>
    <input type="street" class="form-input" id="autocomplete" placeholder="Street"/>
    <input type="city" class="form-input" id="input-city" placeholder="City"/>
    <input type="state" class="form-input" id="input-state" placeholder="State"/>
    <input type="zip" class="form-input" id="input-zip" placeholder="Zip"/>
    <input type="county" class="form-input" id="input-county" placeholder="County"/>
    <button class="submit-button">CREATE OFFER</button>
  </form>
</template>

<script>
export default {
  name: "OfferComponent",
  methods:{
    createOffer(){

    }
  }
}
</script>

<style scoped>

</style>