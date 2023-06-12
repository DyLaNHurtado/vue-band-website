<script>
import Loader from '../components/Loader.vue'
export default {
    name: 'GalleryItem',
    data(){
      return{
        isLoading:true,
        isDisplay:false,
      }
    },
    props:{
      url: "",
      isVideo:false,
    },
    components: {
      Loader
    },
    methods: {
      openDisplay(){
        this.isDisplay = true;
        setTimeout(()=>{
          const itemDisplay = document.getElementsByClassName("item-display")[0];
          if(itemDisplay){ itemDisplay.focus(); }
        });
      }
    },
  }
</script>

<template>
  <div class="img-container" @click="openDisplay()">
    <img v-show="!isLoading" class="img" :src="url" @loadstart="isLoading=true" @load="isLoading=false" 
        loading="lazy" @error="this.style.display='none'" />
        <!-- <video class="video" muted loop autoplay controls src="../assets/logo.svg"></video> -->
        <Loader id="loader" v-if="isLoading"/>
        <font-awesome-icon id="hover-icon" v-if="!isLoading" :icon="['fas', 'magnifying-glass-plus']"  size="l"/>
  </div>

  <div class="item-display" v-if="isDisplay" tabindex="0" @keydown.esc="isDisplay=false">
    <font-awesome-icon @click="isDisplay=false" :icon="['fas', 'xmark']" id="close-icon" size="3x"/>
    <!-- <img v-if="!isVideo" :src="url" loading="lazy" @error="this.style.display='none'" /> -->
    <video class="video-display" autoplay controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"></video>
  </div>
</template>
<style scoped>
  #loader{
    min-height: 100%;
    min-width: 100%;
  }

  #hover-icon{
    min-height: 20%;
    min-width: 20%;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
    transition: all .3s;
  }
  .img-container:hover #hover-icon{
    opacity: 1;
  }

  .img-container {
    width: 350px;
    height: 350px;
    margin: 15px;
    opacity: .8;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .img-container:hover{
    opacity: 1;
    }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video-display{
    max-width: 90vw;
  }
  .item-display{
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }

  #close-icon{
    position: fixed;
    top: 1em;
    right: 1em;
  }

  @media screen and (max-width: 500px) {
    .img-container {
      width: auto;
      height: auto;
    }
  }
</style>
