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
    name: 'AddressView',
    computed:{
        address(){
            return this.$route.query;
        }
    },
    created(){
        console.log('created address');
        this.$watch(
            () => this.$route.query,
            (next, old) => {
                console.log(next);
                console.log(old);
            }
        )
    }
}
</script>