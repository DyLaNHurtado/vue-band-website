<script setup>
</script>

<template>
  <div class="new">
    <div class="small-info">
        <span class="date"></span>
        <span class="authors"></span>
    </div>
    <div>
        <span class="subtitle">sdffsdfsdf</span>
    </div>

  </div>

</template>
<style scoped>
  .new{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    background-color: gray;
  }
  .subtitle::after{
    border:1px solid white;
  }

</style>
