<template>
  <h3>Joueurs</h3>
  <ul>
    <li v-for="(elt, indice) in players" :key="indice"> 
      {{ elt }}
    </li>
  </ul>
  <input type="text" placeholder="Nom d'une l´egende" v-model="player">
  <button @click="ajouter">Ajouter</button>
  </template>
  <script>
  export default {
  name: 'PlayersComponent',
    data() {
      return {
          players: ['Lionel Messi', 'Cristiano Ronaldo', 'Andr´es Iniesta'],
          player: null,
  }
  },
  methods: {
      ajouter() {
          this.players.push(this.player)
          this.player = ''
  }
  }
  }
  </script>