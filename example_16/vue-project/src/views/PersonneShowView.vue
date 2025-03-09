<template>
<h1>Personnes</h1>
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

<script>
import PersonneAdd from '@/components/PersonneAdd.vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'app',
    components: {
        PersonneAdd
    },
    data() {
        return {
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
        console.log('created');
        // axios({
        //     method: 'GET',
        //     url: 'http://localhost:5555/personnes'
        // }).then( resp => this.personnes=resp.data)
        axios.get('http://localhost:5555/personnes').then( resp => this.personnes=resp.data)
    },
    mounted(){
        console.log('mounted');
    }

}
</script>