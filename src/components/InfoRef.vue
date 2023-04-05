<script>
export default {
    name: 'InfoRef',
    props: {
        title:"Lorem ipsum dolor sit amet.",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nihil.",
        textButton:"See more"
    },
  }
</script>

<template>
  <div class="info-ref">
    <h1 class="subtitle">{{ title }}</h1>
    <p class="minititle">{{ text }}</p>
    <button class="btn">{{ textButton }}</button>
  </div>

</template>
<style scoped>
   .info-ref{
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
   }
</style>
