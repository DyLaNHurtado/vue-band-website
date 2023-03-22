<script setup>
</script>

<template>
  <div class="new">
    <div class="small-info">
        <span class="date">4 de Marzo 2023</span>
        <span class="authors">ssdfdf</span>
    </div>
    <div class="data">
        <span class="minititle">sdffssdfsfdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdfsdf</span>
    </div>
  </div>

</template>
<style scoped>
  .new{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    padding: 1rem;
    background-color: gray;
    cursor: pointer;
  }

  .small-info{
    display: flex;
    flex-direction: column;
    align-self: start;
    justify-self: start;
    font-size: .8rem;
    width: 100%;
  }
  .data{
    width:100%;
  }
  .minititle{
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: all .3s;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    
  }
  .new:hover .data .minititle{
    color: greenyellow;
    border-bottom: 1px solid #f2f2f2;
  }

</style>
