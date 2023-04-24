<script setup>

</script>

<template>
    <nav>
        <RouterLink to="/"><font-awesome-icon class="icon" :icon="['fas', 'home']" :size="size"/>&nbsp;Home</RouterLink>
        <RouterLink to="/band"><font-awesome-icon class="icon" :icon="['fas', 'rainbow']" :size="size"/>&nbsp;The Band</RouterLink>
        <RouterLink to="/music"><font-awesome-icon class="icon" :icon="['fas', 'music']" :size="size"/>&nbsp;Music</RouterLink>
        <RouterLink to="/gallery"><font-awesome-icon class="icon" :icon="['fas', 'photo-film']" :size="size"/>&nbsp;Gallery</RouterLink>
        <RouterLink to="/contact"><font-awesome-icon class="icon" :icon="['fas', 'comment-dots']" :size="size"/>&nbsp;Contact</RouterLink>
    </nav>
</template>
<style scoped>
    nav {
        font-size: 16px;
        text-align: center;
        height: 100%;
        display: flex;
        align-items: center;
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
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        height: 70%;
    }

    nav a:first-of-type {
        border: 0;
    }

    @media screen and (max-width: 1080px) {
        nav{
            flex-direction: column;
            width: 100%;
        }
        nav a{
            width: 100%;
            justify-content: center;
            border:0;
            border-top: 1px solid var(--color-border);
            padding: 30px;
        }
        nav a:first-of-type {
        border: 0;
        }
    }
</style>
