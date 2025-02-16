<script >
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: "Hello World",
      nom: null
    }
  },
  methods:{
    envoyer(){
      this.$emit('sendData', this.nom);
    }
  }
  
}
</script>

<template>
  <div>
    <label for="nom">Nom</label>
    <input type="text" id="nom" v-model="nom" />
    <!-- <button @click="$emit('sendData', this.nom)">Send</button> -->
    <button @click="envoyer">Send</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}


</style>
