<template>
  <div class="about">
    <h1>404: Page Not Found ({{ $route.params.pathMatch }})</h1>
  </div>
</template>



<script>
export default {
  name: 'NotFoundView',
  
}
</script>


<style scoped>
h1 {
  color: red;
}
</style>
