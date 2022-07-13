<template>
  <div class="function-container" id="project-creator">
    <ul class="post-type-buttons">
      <li class="function-link" id="project" @click="mapProjectType">COMMUNITY PROJECT</li>
      <li class="function-link" id="offer" @click="mapProjectType">OFFER A JOB</li>
      <li class="function-link" id="proposal" @click="mapProjectType">APPLIES FOR A JOB</li>
    </ul>
    <ProjectComponent v-if="this.project_type === 'project'"/>
    <OfferComponent v-if="this.project_type === 'offer'"/>
    <ProposalComponent v-if="this.project_type === 'proposal'"/>
  </div>

</template>

<script>
import OfferComponent from "@/components/posts/OfferComponent";
import ProjectComponent from "@/components/posts/ProjectComponent";
import ProposalComponent from "@/components/posts/ProposalComponent";
export default {
  name: "CreatorComponent",
  components:{
    OfferComponent,
    ProjectComponent,
    ProposalComponent
  },
  data(){
    return{
      project_type: ""
    }
  },
  methods:{
   mapProjectType(e) {
     this.project_type = e.target.id;
    }
  }
}
</script>

<style scoped>

</style>