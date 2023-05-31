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
    <img src="./assets/logo.svg" width="25"/>
    <span class="">BAND NAME</span>
      
  </header>

  <RouterView />
  <footer>
    <span class="minititle">Follow us on:</span>
    <Socials size="3x"/>
  </footer>
  <Transition name="slide-fade">
    <button v-if="!isTopOfPage" @click="scrollTop" class="fab"><font-awesome-icon class="icon"  :icon="['fas', 'arrow-up']" size="xl"/></button>
  </Transition>
  <button @click="toggleMobileMenu()" class="nav-btn"><font-awesome-icon class="icon" :icon="['fas', 'bars']" size="xl"/></button>
  <Transition name="slide-fade">
      <div v-if="showMobileMenu" class="menu">
        <div class="combo-nav">
          <div class="name-element">
            <img src="./assets/logo.svg" width="25"/>
            <span class="">BAND NAME</span>
          </div>
          <footer>
            <span class="minititle">Follow us on:</span>
            <Socials size="3x"/>
          </footer>
        </div>
        
          <NavBar/>
          
      </div>
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
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.name-element{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav-btn{
  padding: 1em;
  background-color: #3d3d3d;
  z-index: 20;
  min-height: 4em;
  min-width: 4em;
  position: fixed;
  left: 1em;
  top: 1em;
  border-radius: 10px;
  border:0;
  color: yellowgreen;
  scale: 1;
  transition: all .3s;
}

.menu{
  padding: 2em;
  z-index: 10;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #3d3d3d;
  transition: all .3s;
}
.combo-nav{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-right: 2px solid var(--color-border);
  padding: 1em;
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
