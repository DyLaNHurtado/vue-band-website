<script>
import GalleryCard from '../components/GalleryCard.vue'
export default {
    name: 'GallerySection',
    data(){
      return{
      }
    },
    props:{
      date:"8 marzo 2023",
      sectionList:[]
    },
    components: {
      GalleryCard
    },
    methods: {
    },
  }
</script>

<template>
  <div class="section-dated">
      <span class="date minititle">{{ date }}</span>
      <div class="media-container">
        <GalleryCard v-for="item in sectionList" url="" :isVideo="false" />
      </div>
  </div>
</template>
<style scoped>

</style>
