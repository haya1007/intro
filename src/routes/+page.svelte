<script lang="ts">
    import data from '$lib/assets/global-nav.json';
    import images from '$lib/assets/first-view.json';

    import Splide from '@splidejs/splide';
    import '@splidejs/svelte-splide/css';

    // @ts-ignore
    function carousel(node) {
        const splide = new Splide('.splide', {
            type: 'loop'
        });
        splide.mount();

        splide.options = {
            rewind: true,
            rewindByDrag: true,
            speed: 800,
            pauseOnHover: false,
            pauseOnFocus: false,
            resetProgress: false,
            interval: 1000
        };

        const { Autoplay } = splide.Components;
        Autoplay.play();
    }
</script>

<svelte:head>
    <title>haya1007's Portfolio</title>
    <meta name="description" content="haya1007の簡易ポートフォリオです。" />
</svelte:head>

<main>
    <div class="first-view">
        <div class="splide" use:carousel>
            <div class="splide__track">
                <ul class="splide__list">
                    {#each images as image}
                        <li class="splide__slide">
                            <a href={image.map} target="_blank"><img src={image.path} alt={image.text} /></a>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="splideprogress">
                <div class="splideprogress__bar">
                </div>
          </div>
        </div>
    </div>

    <div class="base">
        <div class="container">
            {#each data as item}
                <div class="card {item.text}">
                    <h2>{item.text}</h2>
                    <div class="card-content">
                        <img src="/images/haikei.jpg" alt="" />
                        <p>{item.description}</p>
                    </div>
                    <div class="button hover">
                        <a href={item.href}>view all</a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    .first-view {
        img {
            width: 100%;
        }
    }

    main {
        margin-bottom: 4rem;

        .base {
            display: flex;
            justify-content: center;
            padding: 0 4rem;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            width: 100%;
            max-width: 64rem;
            margin-top: 4rem;
        }

        .card {
            width: 100%;
            padding: 2rem;
            border: 2px solid;
            border-radius: 1rem;

            h2 {
                font-size: 2rem;
                font-weight: bold;
                text-decoration: underline;
                margin-bottom: 1rem;
            }

            .card-content {
                display: flex;
                gap: 1.5rem;

                img {
                    width: 50%;
                    height: 16rem;
                    border: 1px solid;
                    border-radius: 1rem;
                }
            }

            .button {
                display: flex;
                justify-content: center;
                margin-top: 1rem;

                a {
                    padding: 0.5rem 1rem;
                    border: 1px solid;
                    border-radius: 1rem;
                    background-color: orange;
                }
            }
        }
    }
</style>
