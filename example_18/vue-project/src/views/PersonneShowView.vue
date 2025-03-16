<template>
<h1>Personnes</h1>
<template v-if="!error">
    <ul>
        
        <PersonneAdd @send-data="ajouterDansList"/>
        <li v-for="(item, index) in personnes" :key="index" >
            <router-link :to="{
                name:'personne-details',
                params: { id:item.id }
                }">
                {{ item.nom }} {{ item.prenom }}
            </router-link>
            <button class="btn" @click="deletePersonne(item.id)">
                <i class="fas fa-trash-alt"></i></button>
        </li>
        
    </ul>
</template>
<template v-else-if="error.response">
    <h2>Error: la liste n'est pas disponible</h2>
</template>
<template v-else-if="error.request">
    <h2>Error: server n'est pas disponible</h2>
</template>
<template v-else>
    <h2>Error: {{ error.message }}</h2>
</template>
</template>

<script>
import PersonneAdd from '@/components/PersonneAdd.vue';

import { RouterLink } from 'vue-router';

export default {
    name: 'app',
    components: {
        PersonneAdd
    },
    data() {
        return {
            error: null,
        personnes : [   ]
        }
    },
    methods:{
        ajouterDansList(data){
            this.personnes.push(data);
        },
        deletePersonne(id){
            console.log(id);
            axios.delete(`http://localhost:5555/personnes/${id}`)
            .then( () => {
                this.personnes = this.personnes.filter(item => item.id != id);
            })
        }
    },
    created(){
        console.log(`${this.BASE_URL}`);
        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:5555/personnes'
        // }).then( resp => this.personnes=resp.data)
        this.axios.get(`${this.BASE_URL}/personnes`)
        .then( resp => this.personnes=resp.data)
        .catch( (error) => this.error = error)
    },
    mounted(){
        console.log('mounted');
    }

}
</script>