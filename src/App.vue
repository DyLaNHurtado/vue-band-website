<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Socials from './components/Socials.vue'

export default {
    name: 'App',
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
      <Socials size="md"/>
  </header>

  <RouterView />
  <footer>
    <span class="minititle">Follow us on:</span>
    <Socials size="3x"/>
  </footer>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

footer{
  width: 30%;
  padding: 10px;
}

</style>
