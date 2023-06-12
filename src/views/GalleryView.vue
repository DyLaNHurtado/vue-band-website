<script>
import {galleryRef} from '../firebase'
import GallerySection from '../components/GallerySection.vue';
export default {
    name: 'GalleryView',
    data(){
      return{
        mediaList:[{
        url: "https://picsum.photos/700/600",
        isVideo:false
      },
      {
        url: "https://picsum.photos/700/600",
        isVideo:false
      },
      {
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        isVideo:true
      },
      {
        url: "https://picsum.photos/700/600",
        isVideo:false
      },
      {
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        isVideo:true
      },
      {
        url: "https://picsum.photos/700/600",
        isVideo:false
      },],
      }
    },components:{
      GallerySection
    },mounted(){
      console.log(this.mediaList);
      console.log(galleryRef.data.value);
      this.mediaList = galleryRef.value;
      console.log(this.mediaList);
    }
}
</script>
<template>
  <div class="gallery">
    <h1 class="title">Gallery</h1>
    <GallerySection :mediaList="mediaList" />
  </div>
</template>

<style scoped>
  .gallery {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    padding-top: 5rem;
  }
</style>