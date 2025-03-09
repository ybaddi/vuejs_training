<template>
<h1> details de la personne: {{ id }} </h1>
<p> Informations: {{ personne }} </p>
<RouterLink :to="`/personne/${id}/address`">Adresse</RouterLink>
<RouterLink :to="`/personne/${id}/sport`">Sport</RouterLink>
<router-view/>
<button @click="pagePack()">back</button>
</template>

<script>
export default {
    name: 'PersonneDetailsView',
    props: ['id'],
    data(){
        return {
            personnes : [
                {id: 1, name: 'Nazha', prenon: 'El Idrissi', age: 24},
                {id: 2, name: 'Asmaa', prenon: 'Khalidy', age: 23},
                {id: 3, name: 'Abdelkarim', prenon: 'bara', age: 27},
            ]
        }
    },
    methods:{
        pagePack(){
            // this.$router.back();
            this.$router.go(-2);
        }
    },
    computed:{
        personne() {
            return this.personnes.find( (item) => item.id==this.id) ;
        }
    }
}
</script>