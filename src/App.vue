<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
    name: 'GameModeButton',
    components: {
      NavBar
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
      <div>socialsS</div>
  </header>

  <RouterView />
</template>

<style scoped>



.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
