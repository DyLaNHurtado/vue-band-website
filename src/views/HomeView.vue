<script setup>
import Welcome from '../components/Welcome.vue'
import LastNews from '../components/LastNews.vue'
</script>

<template>
  <main>
    <Welcome id="welcome"/>
    <div class="container">
      <LastNews/>

    </div>
  </main>
</template>
<style scoped>
main{
  width: 100%;
}
  #welcome{
    height: 95vh;
  }
  .container{
    padding: 0 20vw;
  }
</style>
