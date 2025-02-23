<script >
export default {
  name: 'VilleComponent',
  props : ['ville', 'codePostal'],
  emits: ['update:ville', 'update:codePostal'],
}
</script>

<template>
<h2>ville</h2>
<div>
  <label>Ville</label>
  <input :value="ville" @input="$emit('update:ville', $event.target.value)" />
</div>
<div>
  <label>Code Postal</label>
  <input :value="codePostal" @input="$emit('update:codePostal', $event.target.value)" />
</div>
</template>

<style scoped>

</style>


setup:
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
befourUnmout
unmounted
