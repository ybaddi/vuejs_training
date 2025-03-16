<template>
<h1> add new personne</h1>
<Form @submit="addPersonne"
:validation-schema="simpleSchema"
ref="personneForm"
v-slot="{errors, meta, values}">
{{ values }}
<div>
    <template v-if="Object.keys(errors).length >0">
        <p>Please resolve these problems</p>
        <ul>
            <li v-for="(value,key) in errors">
                {{ key }} : {{ value }}
            </li>
        </ul>
    </template>
</div>
    <div>
        nom: 
        <Field type="text" name="nom"  
        :class="{'red-left-border': errors.nom}"/>
        <ErrorMessage name="nom" as="div"/>
    </div>
    <div>
        prenom: 
        <Field type="text" name="prenom"  />
        <ErrorMessage name="prenom" />
    </div>
    <div>
        age: 
        <Field type="number" name="age"  />
        <ErrorMessage name="age" />
    </div>
    <div>
        <button :disabled="!meta.valid">add</button>
    </div>
</Form>
</template>

<script setup>
import { ErrorMessage, Field, Form } from 'vee-validate';
import '@/validators/min-max'
import { normalizeClass } from 'vue';
import * as yup from 'yup';
import axios from 'axios';



const simpleSchema = {
    age: 
        yup
            .number()      
            .required("l'age est obligatoir")
            .min(24, (params) => `l'age ${params.value} est obligatoire, vous etes mineur`)
            .max(45,  (params) => `l'age ${params.value} est obligatoire, vous etes trop age`),
    nom:
        yup
            .string()
            .required()
            .matches(/^[A-Z]{1}.*/),
                
    prenom:
        yup
            .string()
            .required()
            .matches(/^[A-Z]{1}.*/)

}

const addPersonne = (values) => {
            console.log(values);
            axios.post("http://localhost:5555/personnes", values)
            .then((resp) => {
                console.log("added succefly")
                this.$emit('sendData', resp.data)
             })
        }

</script>

<style scoped>

</style>