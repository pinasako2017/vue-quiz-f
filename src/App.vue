<script setup>
// eslint-disable-next-line
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView name="header"/>
  <RouterView />  
  <RouterView name="footer"/>
</template>
<style scoped>
.maincontent {
  min-height: 75vh;
  flex: 1;
  margin-left: 1rem;
}

</style>
