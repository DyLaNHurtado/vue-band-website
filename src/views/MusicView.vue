<script>
export default {
    name: 'MusicView',
    data(){
      return{}
    },
    methods: {
      controlVideo(event){
        if(event.type ==="mouseenter"){
          event.target.childNodes[0].setAttribute("autoplay","")
          event.target.childNodes[0].setAttribute("loop","")
          event.target.childNodes[0].setAttribute("muted","")
        }else{
          event.target.childNodes[0].removeAttribute("autoplay")
          event.target.childNodes[0].removeAttribute("loop")
          event.target.childNodes[0].removeAttribute("muted")
        }
      }
    },
  }
</script>
<template>
  <div class="music">
    <h1>This is an music page</h1>

    <div class="repertorio">
  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)">
    <video src="" autoplay loop muted ></video>
    <div class="info">
      <h3 class="minititle">Nombre de la canción 1</h3>
      <p>Autor 1</p>
    </div>
  </div>

  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)" >
    <video src="" loop muted ></video>
    <div class="info">
      <h3 class="minititle">Nombre de la canción 2</h3>
      <p>Autor 2</p>
    </div>
  </div>

  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)" >
    <video src="" autoplay loop muted ></video>
    <div class="info">
      <h3 class="minititle">Nombre de la canción 3</h3>
      <p>Autor 3</p>
    </div>
  </div>
</div>
  </div>
</template>

<style>

  .music {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .repertorio{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card{
    display: flex;
    flex-direction: column;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
  }
  .image{
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    background-color: var(--color-background-mute);
  }
  .minititle{
    font-weight: bold;
  }
</style>