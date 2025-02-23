<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    Hello <slot name="nom">Nazha</slot>
    you have <slot name="age">24</slot> year 

    <div>
      <label for="nom">Nom</label>
      <input type="text" id="nom" v-model="nom" ref="name"/>
      <button class="btn btn-primary" @click="$emit('sendData', this.nom)">Send</button>
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

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
