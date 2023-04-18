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
    methods:{
      scrollTop(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }
    }
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
  <Transition name="slide-fade">
    <button v-if="!isTopOfPage" @click="scrollTop" class="fab"><font-awesome-icon class="icon" id="ig" :icon="['fas', 'arrow-up']" size="xl"/></button>
  </Transition>
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
.fab{
  min-height: 4em;
  min-width: 4em;
  position: fixed;
  right: 2em;
  bottom: 2em;
  border-radius: 10px;
  border:0;
  background-color: #fafafa;
  color: yellowgreen;
  scale: 1;
  transition: all .3s;
}
.fab:hover{
  background-color: hsla(160, 100%, 57%, 0.2);
  color: var(--color-heading);
}
.fab:active{
  scale:1.2;
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
