<template>
  <div class="band">
    <h1 class="title">The Band</h1>
    <div class="container">
      <div class="summary">
        <h2 class="subtitle">Summary</h2>
        Active years: 2023 - Currently
        Origin: Madrid
        
      </div>
      <img src="../assets/logo.svg" alt="">
    </div>
  </div>
</template>

<style>
  .band {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    padding-top: 5rem;
  }

  .container{
    width: 100%;
    background-color: gray;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .summary{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  img{
    width: 200px;
    height: auto;
  }

</style>
