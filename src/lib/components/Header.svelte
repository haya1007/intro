<script lang="ts">
    import data from '$lib/assets/global-nav.json';
    import { Hamburger } from 'svelte-hamburgers';
    import { fly } from 'svelte/transition';
    import { writable } from 'svelte/store';

    const open = writable(false);

    function toggleMenu() {
        open.update(v => !v);
    }
</script>

<header class="p-4 shadow-md bg-white">
    <div class="container mx-auto flex justify-between items-center">
        <a class="flex items-center space-x-2" href="/">
            <img src="/images/icon2.jpg" alt="icon" class="w-10 h-10 rounded-full" />
            <h1 class="text-xl font-bold">haya1007.com</h1>
        </a>

        <!-- PC nav -->
        <nav class="hidden md:block">
            <ul class="flex space-x-6">
                {#each data as item}
                    <li><a href={item.href} class="hover-line text-lg">{item.text}</a></li>
                {/each}
            </ul>
        </nav>

        <!-- Mobile hamburger -->
        <div class="flex md:hidden items-center">
            <Hamburger open={$open} onclick={toggleMenu} />
        </div>
    </div>

    <!-- Mobile menu -->
    {#if $open}
        <div class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50"
             transition:fly={{ x: 100, duration: 200 }}>
             <Hamburger open={true} onclick={toggleMenu} />
            <nav class="flex flex-col mt-20 space-y-6 px-6">
                {#each data as item}
                    <a href={item.href} class="text-lg" on:click={() => open.set(false)}>
                        {item.text}
                    </a>
                {/each}
            </nav>
        </div>
    {/if}
</header>
