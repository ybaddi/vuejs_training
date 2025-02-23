<script >
import { watchEffect, computed } from 'vue';

export default {
  name: 'HelloWorld',
  data(){
    return {
    value1: 2,
    value2: 3,
    result: 0
    }
  },
  created(){
    // watchEffect( () => this.result = this.value1 + this.value2 )
    // this.result = computed( () => this.value1 + this.value2 );
    
  },
  computed: {
    result(){
      return this.value1 + this.value2;
    }
  },
  mounted(){
    setInterval(() => this.value2 +=100, 5000);
  }
  }
  

</script>

<template>
  
  
<p> {{ value1 }} + {{  value2 }} = {{ result }}</p>

</template>

<style scoped>


</style>


