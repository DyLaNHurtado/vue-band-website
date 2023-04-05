<script>
export default {
    name: 'MusicView',
    data(){
      return{}
    },
    methods: {
      controlVideo(event){
        if(event.type ==="mouseenter"){
          event.target.childNodes[0].removeAttribute("style")
        }else{
          event.target.childNodes[0].setAttribute("style","filter: grayscale(1);")
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
    <img src="../assets/videos/SeekAndDestroyMetallica.gif" class="image"  style="filter:grayscale(1)"  />
    <div class="info">
      <h3 class="minititle">Seek And Destroy</h3>
      <p>Metallica</p>
    </div>
  </div>

  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)" >
    <img src="../assets/videos/HeavenOnFireKISS.gif" class="image"  style="filter:grayscale(1)"  />
    <div class="info">
      <h3 class="minititle">Heaven's On Fire</h3>
      <p>KISS</p>
    </div>
  </div>

  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)" >
    <img src="../assets/videos/cantStopRHCP.gif" class="image" style="filter:grayscale(1)" />
    <div class="info">
      <h3 class="minititle">Can't stop</h3>
      <p>Red Hot Chili Peppers</p>
    </div>
  </div>
  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)" >
    <img src="../assets/videos/SweatingBulletsMegadeth.gif" class="image" style="filter:grayscale(1)" />
    <div class="info">
      <h3 class="minititle">Sweating Bullets</h3>
      <p>Megadeth</p>
    </div>
  </div>
  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)" >
    <img src="../assets/videos/HolyDiverDio.gif" class="image" style="filter:grayscale(1)" />
    <div class="info">
      <h3 class="minititle">Holy Diver</h3>
      <p>DIO</p>
    </div>
  </div>
  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)" >
    <img src="../assets/videos/SpeedKingDeepPurple.gif" class="image" style="filter:grayscale(1)" />
    <div class="info">
      <h3 class="minititle">Speed King</h3>
      <p>Deep purple</p>
    </div>
  </div>

</div>
  </div>
</template>

<style scoped>

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
    transition: all .3s;
  }
  .card{
    display: flex;
    flex-direction: column;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    border:  1px solid var(--vt-c-indigo);
  }

  .card:hover{
   scale: 1.1;
  }
  .image{
    max-width: 25vh;
    min-width: 25vh;
    height: 20vh;
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
    color:greenyellow;
  }
</style>