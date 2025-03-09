<template>
    <h1> Address </h1>
    <ul>
        <li>Type: {{ sport.type }}</li> 
        <li>Nom: {{ sport.nom }}</li> 
    </ul>
    </template>
    
    <script>
    export default {
        name: 'PersonneSportView',
        data(){
            return {
                personnes : [
                    {id: 1, sport: {type: 'groupe' , nom: 'foot' }},
                    {id: 2, sport: {type: 'indiv' , nom: 'natation'}},
                    {id: 3, sport: {type: 'groupe' , nom: 'basket' }},
                ]
            }
        },
        computed:{
            sport(){
                return this.personnes.find(item => {
                    console.log(item.id);
                console.log(this.$route.params.id);
                    return item.id == this.$route.params.id;
                }
                ).sport;
            }
        }
    }
    </script>