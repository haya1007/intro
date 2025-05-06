<script lang="ts">
    import data from "$lib/assets/global-nav.json"
</script>

<header>
    <div class="container">
        <h1><a class="hover" href="/">haya1007.com</a></h1>
        <nav>
            <ul>
                {#each data as item}
                <li><a class="hover-line hover" href={item.href}>{item.text}</a></li>
                {/each}
            </ul>
        </nav>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        height: 5rem;
        padding: 0 4rem;

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 64rem;
        }

        h1 {
            font-size: 2rem;
            font-weight: bold;
        }

        nav ul {
            display: flex;
            gap: 1rem;
            font-size: 1.5rem;
        }
    }
</style>