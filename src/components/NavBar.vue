<script>
export default {
    name: 'NavBar',
    methods:{
        navClicked(){
            this.$emit('navClicked');
        }
    }
  }
</script>

<template>
    <nav>
        <RouterLink to="/" @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'home']" :size="size"/>&nbsp;Home</RouterLink>
        <RouterLink to="/band"  @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'rainbow']" :size="size"/>&nbsp;The Band</RouterLink>
        <RouterLink to="/music"  @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'music']" :size="size"/>&nbsp;Music</RouterLink>
        <RouterLink to="/gallery"  @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'photo-film']" :size="size"/>&nbsp;Gallery</RouterLink>
        <RouterLink to="/contact"  @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'comment-dots']" :size="size"/>&nbsp;Contact</RouterLink>
    </nav>
</template>
<style scoped>
    nav {
        font-size: 16px;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
    }

    nav a.router-link-exact-active {
        color: yellowgreen;
        background-color: rgba(153, 205, 50, 0.353);
    }

    nav a.router-link-exact-active:hover {
        background-color: rgba(153, 205, 50, 0.353);

    }

    nav a {
        display: inline-block;
        padding: 1rem;
        border-top: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        font-size: large;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    nav a:first-of-type {
        border: 0;
    }

</style>
