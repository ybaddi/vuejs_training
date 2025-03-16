<template>
  <h1> Composants dynamiques </h1>
  <button @click="toggle(ActorsCpomponent)">Acteurs</button>
  <button @click="toggle(PlayersCpomponent)">Joueurs</button>
  <button @click="toggle(SingersCpomponent)">Chanteurs</button>
  <keep-alive>
  <component :is="componentName"></component>
  </keep-alive>
</template>

<script setup>
import { ref } from 'vue';
import ActorsCpomponent from '../components/Actors.vue'
import SingersCpomponent from '../components/Singers.vue'
import PlayersCpomponent from '../components/Players.vue'

const toggle = (component) =>{
  componentName.value = component;
}
const componentName= ref(ActorsCpomponent)
</script>