<script>
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
import NavBar from './components/NavBar.vue'

export default {
    name: 'App',
    components: {
      NavMenu,NavBar
    },
    data(){
      return{
        isTopOfPage:true,
        showNavMenu:false,
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
      toogleNavMenu(){
        this.showNavMenu= !this.showNavMenu;
      }
    }
  }

</script>

<template>
  <header :class="{'header-scroll' : !isTopOfPage}">
    <span class="subtitle">BAND NAME</span>
    <NavBar class="header-navbar" />
  </header>
  <RouterView />
  <Transition name="slide-fade">
    <button v-if="!isTopOfPage" @click="scrollTop" class="fab"><font-awesome-icon class="icon"  :icon="['fas', 'arrow-up']" size="xl"/></button>
  </Transition>
  <button @click="toogleNavMenu()" class="nav-btn"><font-awesome-icon class="icon" :icon="['fas', 'bars']" size="xl"/></button>
  <Transition name="slide-fade">
      <NavMenu v-if="showNavMenu" @closeNavMenu="toogleNavMenu()"/>
  </Transition>
  <footer>
    <Socials size="3x"/>
  </footer>

</template>

<style scoped>

.header-navbar{
    opacity: 1;
    height: 100%;
    display: flex;
  }
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
.nav-btn{
  display: 0;
  height: 0;
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

@media screen and (max-width: 1080px) {
  .header-navbar{
    opacity: 0;
    height: 0;
    display: none;
  }
  .nav-btn{
    padding: 1em;
    background-color: #3d3d3d;
    z-index: 20;
    min-height: 4em;
    min-width: 4em;
    position: fixed;
    right: 1em;
    top: 1em;
    border-radius: 10px;
    border:0;
    color: yellowgreen;
    scale: 1;
    transition: all .3s;
    display: 1;
  }
}

</style>
