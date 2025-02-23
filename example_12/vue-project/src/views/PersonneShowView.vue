<template>
<h1>Personnes</h1>
<ul>
    <li v-for="(item, index) in personnes" :key="index" >
        <router-link :to="{
            name:'personne-details',
            params: { id:item.id }
            }">
            {{ item.nom }} {{ item.prenom }}
        </router-link>
    </li>
</ul>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'app',
    data() {
        return {
        personnes : [
                {id: 1, nom: 'Nazha', prenom: 'El Idrissi', age: 24},
                {id: 2, nom: 'Asmaa', prenom: 'Khalidy', age: 23},
                {id: 3, nom: 'Abdelkarim', prenom: 'bara', age: 27},
            ]
        }
    },
    created(){
        console.log('created');
    },
    mounted(){
        console.log('mounted');
    }

}
</script>