<script>
import GalleryItem from '../components/GalleryItem.vue';
export default {
    name: 'GallerySection',
    props:{
      mediaList:[],
    },components:{
      GalleryItem
    }
}
</script>

<template>
  <div class="gallery-section">
      <GalleryItem v-for="item in mediaList" :url="item?.url" :isVideo="item?.isVideo"/>
  </div>
</template>
<style scoped>
  .gallery-section{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    .gallery-section{
      margin: 0;
      width: 100%;
    }
  }
</style>
