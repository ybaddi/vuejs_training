<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <!-- Example1 -->
    <div class="wrapper">
      <HelloWorld  />
      <HelloWorld > 
        <template>
          <slot >BADDI </slot>
        <!-- <template v-slot:prenom>Youssef</template>  -->

        <!-- <template #nom>BADDI</template>   -->
        <slot name="prenom">Youssef</slot>

        </template> 
      </HelloWorld>

    </div>

    <!-- Example2 -->
     <div>
      <HelloWorld v-slot="slotProps"> 
        {{ slotProps.nom }} {{ slotProps.prenom }}
      </HelloWorld>
     </div>

     <!-- Example3 -->
     <div>
      <h3>Example 3</h3>
      <HelloWorld v-slot="{nom, prenom}"> 
        {{ nom }} {{ prenom }}
      </HelloWorld>
     </div>

     <!-- Example4 -->
     <div>
      <h3>Example 4</h3>
      <HelloWorld ville="Knitra"></HelloWorld>
      <HelloWorld v-slot="{nom, prenom}"> 
        {{ nom }} {{ prenom }}
      </HelloWorld>
     </div>
  </header>

</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
