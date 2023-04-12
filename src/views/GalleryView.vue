<template>
  <div class="gallery">
    <h1 class="title">Gallery</h1>
    <div class="section-dated">
      <span class="date minititle">8 marzo 2023</span>
      <div class="photos">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
      </div>
    </div>
    <div class="section-dated">
      <span class="date minititle">2 marzo 2023</span>
      <div class="photos">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/logo.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .gallery {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    padding-top: 5rem;
  }
  .section-dated{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  img{
    filter: grayscale(100);
    transition: all .3s;
    cursor: pointer;
    width: 100%;
    background-color: aquamarine;
  }

  img:hover{
    filter: grayscale(0);
  }

  .photos{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: .3rem;
  }
</style>