<script>
import Loader from '../components/Loader.vue'
export default {
    name: 'MusicView',
    data(){
      return{
        songList:[
          {
            title:"Seek And Destroy",
            author:"Metallica",
            img:"/videos/SeekAndDestroyMetallica.gif",
          },
          {
            title:"Heaven's On Fire",
            author:"KISS",
            img:"/videos/HeavenOnFireKISS.gif",
          },
          {
            title:"Can't Stop",
            author:"Red Hot Chili Peppers",
            img:"/videos/CantStopRHCP.gif",
          },
          {
            title:"Sweating Bullets",
            author:"Megadeth",
            img:"/videos/SweatingBulletsMegadeth.gif",
          },
          {
            title:"Holy Diver",
            author:"DIO",
            img:"/videos/HolyDiverDio.gif",
          },
          {
            title:"Speed King",
            author:"Deep Purple",
            img:"/videos/SpeedKingDeepPurple.gif",
          },
        ]
      }
    },
    components: {
      Loader
    },
    methods: {
      doEffect(event){
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
    <h1 class="title">Musical repertoire</h1>
    <h2 class="subtitle"> Our Covers </h2>
    <div class="repertorio">
      <div class="card"  v-for="item in songList" @mouseenter="doEffect($event)"  @mouseleave="doEffect($event)">
        <Loader/>
        <img :src="item.img" loading="lazy" class="image"  style="filter:grayscale(1)"  />
        <div class="info">
          <h3 class="minititle">{{ item.title }}</h3>
          <p>{{ item.author }}</p>
        </div>
      </div>
  </div>
  <h2 class="subtitle">Our Own Songs</h2>
  <span>Comming soon...</span>
  </div>
</template>

<style scoped>

  .music {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    padding-top: 5rem;
  }
  .repertorio{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    transition: all .3s;
  }
  .card{
    transition: all .3s;
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