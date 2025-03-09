<template>
<h1> add new personne</h1>
<Form @submit="addPersonne">
    <div>
        nom: 
        <Field type="text" name="nom" :rules="validateName" />
        <ErrorMessage name="nom" as="div"/>
    </div>
    <div>
        prenom: 
        <Field type="text" name="prenom"  :rules="validateName"/>
        <ErrorMessage name="prenom" />
    </div>
    <div>
        age: 
        <Field type="number" name="age" :rules="validateAge" />
        <ErrorMessage name="age" />
    </div>
    <div>
        <button >add</button>
    </div>
</Form>
</template>

<script>
import { ErrorMessage, Field, Form } from 'vee-validate';
import '@/validators/min-max'
import { normalizeClass } from 'vue';
import * as yup from 'yup';


export default {
    name: 'PersonneAdd',
    components: {
        Form,
        Field, 
        ErrorMessage
    },
    data() {
        return {
            validateAge: yup.number()
            .required("l'age est obligatoir")
            .min(24, (params) => `l'age ${params.value} est obligatoire, vous etes mineur`)
            .max(45,  (params) => `l'age ${params.value} est obligatoire, vous etes trop age`), // lessthan morethan postive negative integer ...
            validateName: yup.string().required().matches(/^[A-Z]{1}.*/) // lenght url uuid lowercase uppercase trim ...
        }
    },
    methods: {
        addPersonne(values){
            console.log(values);
            // actions.resetForm(); // to reset the forme or delete inputs
            // actions.setValues({nom: 'El Idrissi' , prenom:"nezha", age: 24}); // to reset the forme with values in param
            // actions.setFieldValue('age', 22);
        },
        
    }
}

</script>

<style scoped>
</style>