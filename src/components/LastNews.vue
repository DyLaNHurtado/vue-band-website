<script setup>
import New from './New.vue'
</script>

<template>
  <div id="last-news">
    <span class="title">Last news</span>
    <div class="grid">
      <New/>
      <New/>
      <New/>
      <New/>
    </div>
  </div>

</template>
<style scoped>
  #news{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    background-color: black;
  }
  img{
    width: 200px;
    height: 200px;
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-content: center;
  }
</style>
