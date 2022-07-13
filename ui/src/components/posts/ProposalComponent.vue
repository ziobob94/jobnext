<template>
  <form class="forms" @submit="createProposal">
    <input class="form-input" name="title" type="text" placeholder="title"/>
    <input class="form-input" type="textarea" placeholder="write a small description"/>
    <input type="street" class="form-input" id="autocomplete" placeholder="Street"/>
    <input type="city" class="form-input" id="inputCity" placeholder="City"/>
    <input type="state" class="form-input" id="inputState" placeholder="State"/>
    <input type="zip" class="form-input" id="inputZip" placeholder="Zip"/>
    <input type="county" class="form-input" id="inputCounty" placeholder="County"/>
    <button class="submit-button">CREATE</button>
  </form>
</template>

<script>
export default {
  name: "ProposalComponent",
  methods: {
    createProposal() {

    }
  }
}
</script>

<style scoped>

</style>