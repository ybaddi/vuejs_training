<script setup>
import { onMounted, ref, defineProps, defineEmits } from 'vue';

// export default {
//   name: 'HelloWorld',
//   data() {
//     return {
//       msg: 'Hello World!',
//       nom: null
//     }
//   },
//   props: {
//     ville: {
//       type: string
//     }
//   },
//   mounted(){
//     this.$refs.name.placeholder = "Votre nom";
//     this.$refs.name.focus();
//   },
//   methods: {
//     sendData(){
//       this.$emit('sendData', this.nom)
//     }
//   }
// }
const msg = ref("Hello World");
const nom = ref(null);
const {ville} =  defineProps({
  ville: String
})

const city = defineModel()

const emit = defineEmits(['sendData']); // we can not place defineEmit in a function
// defineProps({
//   ville: String
// })
onMounted ( () => {
    nom.value.placeholder = "Votre nom";
    nom.value.focus(); 
    console.log(ville);
})

const sendData = () => { 
  console.log(nom);
  emit('sendData', nom.value)
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} from {{ ville }} </h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <div>
    <label for="nom">Nom</label>
    <input type="text" id="nom"  ref="nom">
    <button @click="sendData">Send</button>
  </div>
  <div>
    <input type="text" v-model="city">
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

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
