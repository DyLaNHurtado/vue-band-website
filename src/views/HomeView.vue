<script setup>
import Welcome from '../components/Welcome.vue'
import LastNews from '../components/LastNews.vue'
import InfoRef from '../components/InfoRef.vue'
</script>

<template>
  <main>
    <Welcome id="welcome"/>
    <div class="container">
      <InfoRef title="Do you want to know more about us ?" 
      text="We tell you from general information to the most shocking and funny anecdotes. You will be able to know better how the members work, their likes, concerns..."
      textButton="Let's meet better!"/>
    </div>
    <div class="container">
      <LastNews/>
    </div>
    <div class="container">
      <InfoRef title="Look out the gallery" 
      text="In the gallery you will find photos of all our important moments and video-compilations of the best moments"
      textButton="Go to gallery!"/>
    </div>
    <div class="container">
      <InfoRef title="What music play?" 
      text="Currently, we mix up the covers with own songs. We have a repertoire of songs that`s we know play."
      textButton="Check it out!"/>
    </div>
    <div class="container">
      <InfoRef title="Have any question or proposal ?" 
      text="The band is hardworking daily to offer a good show. The band wants to people feel good vibes and desire to dance and sing."
      textButton="Contact now!"/>
    </div>
  </main>
</template>
<style scoped>
main{
  width: 100%;
}
  #welcome{
    height: 99vh;
  }
  .container{
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
</style>
