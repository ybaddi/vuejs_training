<script>
export default{
  name: 'HelloWorld',
  data(){
    return {
      msg: 'Hello World',
      firstName: 'youssef',
      secondName: 'BADDI'
    }
  },
  props:{
    ville: {
      type:  String,
      default: 'Casablanca'
    }
  }
}
</script>

<template>
<div>
  {{ msg }} from {{ ville }}
</div>
<div>
  Hello <slot name="nom">El Idrissi</slot>  
  <slot name="prenom">Nazha</slot>
</div>
<hr>
<div>
  Hello <slot :nom="firstName" :prenom="secondName"> </slot>  
  
</div>

</template>

<style scoped>

</style>
