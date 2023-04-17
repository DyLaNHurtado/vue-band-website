<script>
import GallerySection from '../components/GallerySection.vue';
export default {
    name: 'GallerySection',
    data(){
      return{
        mediaList:[],
        
      }
    },components:{
      GallerySection
    }
}
</script>
<template>
  <div class="gallery">
    <h1 class="title">Gallery</h1>
    <GallerySection date="" :sectionList="[]" v-for="item in mediaList" />
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