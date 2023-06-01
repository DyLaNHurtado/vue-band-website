<script>
import NavBar from './NavBar.vue'
import Socials from './Socials.vue'
import LogoAndName from './LogoAndName.vue'
export default {
    name: 'NavMenu',
    methods:{
        closeNavMenu(){
            this.$emit('closeNavMenu');
        }
    },
    components:{
        NavBar,LogoAndName,Socials
    }
  }
</script>

<template>
    <div class="menu">
        <div class="combo-nav">
          <LogoAndName name="BAND NAME" img="/src/assets/logo.svg" :isColumn="true" />
          <footer>
            <Socials size="3x"/>
          </footer>
        </div>
        <NavBar @navClicked="closeNavMenu()"/>
    </div>
</template>

<style scoped>
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
</style>
