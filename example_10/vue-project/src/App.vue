<script >
import HelloWorld from './components/HelloWorld.vue'
import ReactiveValue from './components/ReactiveValue.vue';
// import VilleComponent from './components/VilleComponent.vue';


export default{
  name: 'App',
  components: { 
    HelloWorld,
    ReactiveValue
    // VilleComponent
   },
  data(){
    return {
      villes: ["Kenitra", "El Jadida", "Marrakech", "Rabat", "Tanger"],
      codePostaux: ['12000','10053', '15000', '10000', '90000'],
    nom:null
    }
  },
  methods:{
    afficherHello(nom){
      this.nom=nom;
      console.log("app componenet  : ", this.nom);
    },
    translate(){
      this.$refs.enfant.msg = 'Bonjour tous le monde';
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <p>Bonjour {{ nom }}</p>
      <HelloWorld @send-data="afficherHello" ville="Kenitra" ref="enfant"/>
      <div>
        <button @click="translate">
          Translate
        </button>
      </div>
      <ReactiveValue></ReactiveValue>
      <!-- <HelloWorld  >
      </HelloWorld> -->
    </div>
    <!-- <h1>
      Villes: {{ villes }}
    </h1>
    <div>
      <template v-for="(item,i) in villes">
      {{ item }} - {{ codePostaux[i] }} <br>
    </template>
    </div>
    <template v-for="(item,i) in villes">
      <VilleComponent v-model:ville="villes[i]" v-model:codePostal="codePostaux[i]" />
    </template> -->
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
