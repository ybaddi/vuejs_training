<template>
    <h1> details de la personne: {{ id }} </h1>
    <p> Informations: {{ personne }} </p>

    <Form @submit.prevent="updatePersonne">
        <div>
            Nom:
            <input type="text" v-model="personne.nom" />
        </div>
        <div>
            Prenom:
            <input type="text" v-model="personne.prenom" />
        </div>
        <div>
            Age:
            <input type="text" v-model="personne.age" />
        </div>
        <div>
            <button>
                update
            </button>
        </div>
    </Form>

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
                {id: 1, nom: 'Nazha', prenom: 'El Idrissi', age: 24},
                {id: 2, nom: 'Asmaa', prenom: 'Khalidy', age: 23},
                {id: 3, nom: 'Abdelkarim', prenom: 'bara', age: 27},
            ]
        }
    },
    methods:{
        pagePack(){
            // this.$router.back();
            this.$router.go(-2);
        },
        updatePersonne(){
            this.axios
            .put(`${this.BASE_URL}/personnes/${this.id}`, this.personne)
            .then(response => this.$router.push('/personne'))
        }
    },
    computed:{
        personne() {
            return this.personnes.find( (item) => item.id==this.id) ;
        }
    }
}
</script>