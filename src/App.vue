<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
      <NavBar/>
      <div>socialsS</div>
  </header>

  <RouterView />
</template>

<style scoped>



.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
