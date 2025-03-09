<template>
<h1> add new personne</h1>
<Form @submit="addPersonne"
:validation-schema="simpleSchema"
:initial-values="values"
@invalid-submit="onInvalidSubmit">
    <div>
        nom: 
        <Field type="text" name="nom"  />
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
        <button >add</button>
    </div>
</Form>
</template>

<script>
import { ErrorMessage, Field, Form } from 'vee-validate';
import '@/validators/min-max'
import { normalizeClass } from 'vue';


export default {
    name: 'PersonneAdd',
    components: {
        Form,
        Field, 
        ErrorMessage
    },
    data() {
        return {
            values: {
                nom: 'El Idrissi',
                prenom: "Nezha",
                age: 24
            },
            simpleSchema : {
                nom(value){
                    if(!value){
                        return "this field is required";
                    }
                     if(value[0] < 'A' || value[0] > 'Z'){
                        return "we must start by uppercase";
                    }
                    return true;
                },
                prenom(value){
                    if(!value){
                        return "this field is required";
                    }
                     if(value[0] < 'A' || value[0] > 'Z'){
                        return "we must start by uppercase";
                    }
                    return true;
                },
                age: "minMax: 24,45"
            }
        }
    },
    methods: {
        addPersonne(values){
            console.log(values);
            // actions.resetForm(); // to reset the forme or delete inputs
            // actions.setValues({nom: 'El Idrissi' , prenom:"nezha", age: 24}); // to reset the forme with values in param
            // actions.setFieldValue('age', 22);
        },
        onInvalidSubmit({values, errors, results}){
            console.log(values);
            console.log(errors);
            console.log(results);            
        },
        validateName(value){
            if(!value){
                return "this field is required";
            }
            if(value[0] < 'A' || value[0] > 'Z'){
                return "we must start by uppercase";
            }
            return true;
        },
        validateAge(value){
            if(!value){
                return "this field age is required";
            }
            if(value < 24 || value > 45){
                return "the age must be in [24,45]";
            }
            return true;
        }
    }
}

</script>

<style scoped>
</style>