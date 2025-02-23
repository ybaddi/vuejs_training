<script >
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: "Hello World",
      nom: null
    }
  },
  methods:{
    envoyer(){
      console.log("hello world componenet  : ", this.nom);
      this.$emit('sendData', this.nom);
    },
  },  
beforeCreate(){
  console.log("before create");
},
created(){
  console.log("created");
},
beforeMount(){
  console.log("before Mount");
},
mounted(){
  console.log("mounted");
  this.$refs.name.placeholder= 'Your Name';
  this.$refs.name.focus();
},
beforeUpdate(){
  console.log("before Update");
},
updated(){
  console.log("updated");
},
befourUnmout(){
  console.log("before Unmout");
},
unmounted(){
  console.log("Unmouted");
},
  }
  

</script>

<template>
  <div>{{ msg }} from {{ ville }}</div>

  <div>
    Hello <slot name="nom">Nazha</slot>
    you have <slot name="age">24</slot> year 

    <div>
      <label for="nom">Nom</label>
      <input type="text" id="nom" v-model="nom" ref="name"/>
      <button @click="$emit('sendData', this.nom)">Send</button>
    </div>
  </div>
  


</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}


</style>


