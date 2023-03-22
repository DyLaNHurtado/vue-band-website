<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Socials from './components/Socials.vue'

export default {
    name: 'GameModeButton',
    components: {
      NavBar,Socials
    },
    data(){
      return{
        isTopOfPage:true
      }
    },
    beforeMount(){
      onscroll = (event)=>{
          this.isTopOfPage = window.scrollY === 0;
    }
    },
  }

</script>

<template>
  <header :class="{'header-scroll' : !isTopOfPage}">
      <NavBar/>
      <Socials/>
  </header>

  <RouterView />
</template>

<style scoped>



.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
