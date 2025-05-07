<script lang="ts">
    import data from '$lib/assets/global-nav.json';

    const images = [
        {
            path: '/images/first-view/1.jpg',
            text: '背景',
        },
        {
            path: '/images/first-view/2.jpg',
            text: '背景',
        },
        {
            path: '/images/first-view/3.jpg',
            text: '背景',
        },
        {
            path: '/images/first-view/4.jpg',
            text: '背景',
        },
        {
            path: '/images/first-view/5.jpg',
            text: '背景',
        },
        {
            path: '/images/first-view/6.jpg',
            text: '背景',
        },
    ];
</script>

<main>
    <div class="first-view">
        <img src="/images/haikei.jpg" alt="">
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
                    <div class="button">
                        <a class="hover" href={item.href}>view all</a>
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
