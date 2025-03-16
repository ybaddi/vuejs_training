<template>
    <h1>calculatrice</h1>

    <div>
        <label for="valeur1">Valeur 1</label>
        <input type="number" id="valeur1" v-model="valeur1" 
        @input="calculerResultat">
    </div>

    <div>
        <label for="valeur2">Valeur 2</label>
        <input type="number" id="valeur2" v-model="valeur2" 
        @input="calculerResultat">
    </div>

    <div>
        <label for="resultat">resultat</label>
        <input type="number" id="resultat" v-model="resultat" 
        readonly>
    </div>

</template>

<script setup>
import { ref } from 'vue';

 const valeur1 = ref(0);
 const valeur2 = ref(0);
 const resultat = ref(0);

const calculerResultat = () => {
    resultat.value = valeur1.value + valeur2.value;
        }


</script>