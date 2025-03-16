<template>
<h1> Address </h1>
<ul>
    <li>Rue: {{ address.rue }}</li> 
    <li>Code postal: {{ address.codePostal }}</li> 
    <li>Ville: {{ address.ville }}</li> 
</ul>
<button @click="backToHome">Back to home</button>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const address = computed( () => {
 return route.query
})

const backToHome = () => {
    router.push('/')
}
       
    
</script>