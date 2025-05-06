<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../css/global.scss";
</script>

<div class="wrapper">
    <Header />

    <slot />

    <Footer />
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>