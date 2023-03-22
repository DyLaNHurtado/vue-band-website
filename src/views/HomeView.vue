<script setup>
import Welcome from '../components/Welcome.vue'
import LastNews from '../components/LastNews.vue'
</script>

<template>
  <main>
    <Welcome/>
    <div class="container">
      <LastNews/>

    </div>
  </main>
</template>
<style scoped>
  main{
    height: 95vh;
  }
  .container{
    padding: 0 20vw;
  }
</style>
