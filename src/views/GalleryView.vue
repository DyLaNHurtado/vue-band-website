<script>
import GalleryItem from '../components/GalleryItem.vue';
export default {
    name: 'GalleryView',
    data(){
      return{
        mediaList:[],
        
      }
    },components:{
      GalleryItem
    }
}
</script>
<template>
  <div class="gallery">
    <h1 class="title">Gallery</h1>
    <div class="container">
      <GalleryItem url="https://picsum.photos/700/600"/>
      <GalleryItem url="https://picsum.photos/700/600"/>
      <GalleryItem url="https://picsum.photos/700/600"/>
      <GalleryItem url="https://picsum.photos/700/600"/>
      <GalleryItem url="https://picsum.photos/700/600"/>
      <GalleryItem url="https://picsum.photos/700/600"/>
    </div>
    <!-- <GallerySection date="" :sectionList="[]" v-for="item in mediaList" /> -->
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
  .container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: 80%;
  }

@media screen and (max-width: 500px) {
  .container{
    margin: 0;
    width: 100%;
  }
}
</style>