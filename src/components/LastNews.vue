<script setup>
import New from './New.vue'
</script>

<template>
  <div id="last-news">
    <span class="subtitle">Last news</span>
    <div class="grid">
      <New/>
      <New/>
      <New/>
      <New/>
      <New/>
      <New/>
    </div>
    <button class="btn">See more</button>
  </div>

</template>
<style scoped>
  #last-news{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    background-color: black;
    padding: 20px 0;
  }
  img{
    width: 200px;
    height: 200px;
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .3rem;
  }
  .btn{
    margin: 2rem;
  }
  @media only screen and (max-width: 1300px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  }
  @media only screen and (max-width: 850px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  }
</style>
