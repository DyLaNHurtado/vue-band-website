<script>
export default {
    name: 'SongCard',
    props: {
        size:"xl"
    },
  }
</script>

<template>
  <div class="card" @mouseenter="controlVideo($event)"  @mouseleave="controlVideo($event)" >
    <img src="../assets/videos/SpeedKingDeepPurple.gif" class="image" style="filter:grayscale(1)" />
    <div class="info">
      <h3 class="minititle">Speed King</h3>
      <p>Deep purple</p>
    </div>
  </div>

</template>
<style scoped>

</style>
