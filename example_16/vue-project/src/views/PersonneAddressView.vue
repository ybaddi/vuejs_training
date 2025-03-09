<template>
<h1> Address </h1>
<ul>
    <li>Rue: {{ address.rue }}</li> 
    <li>Code postal: {{ address.codePostal }}</li> 
    <li>Ville: {{ address.ville }}</li> 
</ul>
</template>

<script>
export default {
    name: 'PersonneAddressView',
    data(){
        return {
            personnes : [
                {id: 1, address: {rue: 'moukqawama' , codePostal: '40053' , ville: 'Kenitra'}},
                {id: 2, address: {rue: 'moukqawama' , codePostal: '10053' , ville: 'Rabat'}},
                {id: 3, address: {rue: 'Jabrane khalil jabrane' , codePostal: '20053' , ville: 'El Jadida'}},
            ]
        }
    },
    computed:{
        address(){
            return this.personnes.find(item => {
                console.log(item.id);
                console.log(this.$route.params.id);
                return item.id == this.$route.params.id;}).address;
        }
    }
}
</script>