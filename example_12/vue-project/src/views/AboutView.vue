<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{
            name:'adress',
            query: { rue: 'rue de la paix', ville: 'Paris', codePostal: 12001 }
            }">
            clique to view
        </router-link>

        <button @click="gotoPersonne()"> Consulter my informations </button>
  </div>
</template>



<script>
export default {
  name: 'About',
  methods: {
    gotoPersonne(){
      this.$router.push({name:'personne-details', params: {id: 1}})
      // this.$router.push('/personne/1');
    }
  }
}
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
