<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Socials from './components/Socials.vue'
import { setTransitionHooks } from 'vue'

export default {
    name: 'App',
    components: {
      NavBar,Socials
    },
    data(){
      return{
        isTopOfPage:true,
        showMobileMenu:false,
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
      },
      toggleMobileMenu(){
        this.showMobileMenu= !this.showMobileMenu;
      }
    }
  }

</script>

<template>
  <header :class="{'header-scroll' : !isTopOfPage}">
    <i class="nav-btn" @click="toggleMobileMenu()"><font-awesome-icon class="icon" :icon="['fas', 'bars']" size="xl"/></i>
    <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
      <NavBar/>
      <Socials size="md"/>
    </div>
      
  </header>

  <RouterView />
  <footer>
    <span class="minititle">Follow us on:</span>
    <Socials size="3x"/>
  </footer>
  <Transition name="slide-fade">
    <button v-if="!isTopOfPage" @click="scrollTop" class="fab"><font-awesome-icon class="icon"  :icon="['fas', 'arrow-up']" size="xl"/></button>
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
.nav-content{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

}
.nav-btn{
  opacity: 0;
  height: 0;
  visibility: hidden;
  padding: 1em;
  background-color: #3d3d3d
}

@media screen and (max-width: 1080px) {
    header{
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  .open-menu {
    opacity: 1;
    height: 100%;
    visibility: visible;
  }
  .closed-menu {
    opacity: 0;
    visibility: hidden;
    height: 0;
    padding: 0;
    margin: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-btn {
    opacity: 1;
    visibility: visible;
    height: auto;
    text-align: right;
  }
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
