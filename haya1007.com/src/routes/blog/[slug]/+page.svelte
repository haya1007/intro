<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<article>
    <div class="base">
        <div class="container">
            <div class="button hover">
                <a href="/blog">back</a>
            </div>
            <div class="top-content">
                <h1 class="title">{data.title}</h1>
                <time class="date">{data.date}</time>
            </div>
            <img class="thumbnail" src={data.image} alt="" >
            <div class="main-content">
                <svelte:component this={data.content} />
            </div>
            <div class="button hover">
                <a href="/blog">back</a>
            </div>
        </div>
    </div>
</article>

<style>
    .base {
        display: flex;
        justify-content: center;
        padding: 0 4rem;
        margin-bottom: 2rem;
    }

    .container {
        width: 100%;
        max-width: 64rem;

    }

    .button {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        font-size: 1.5rem;
        border: 2px solid #000000;
        border-radius: 1rem;
        background-color: rgb(240, 79, 79);

    }

    .top-content {
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin: 1rem 0;
        border-bottom: 1px solid #000000;
    }

    .main-content {
        margin-bottom: 1rem;
    }

    .title {
        font-size: 2rem;
    }

    .date {
        font-size: 1rem;
    }

    .thumbnail {
        width: 100%;
        border: 1px solid #000000;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    :global(.main-content) {
        :global(h1) {
            margin: 1rem 0;
            font-size: 2rem;
        }

        :global(h2) {
            margin: 1rem 0;
            font-size: 1.75rem;
            border-bottom: 1px solid #5b5b5b;
        }

        :global(h3) {
            margin: 1rem 0;
            font-size: 1.5rem;
        }

        :global(h4) {
            margin: 1rem 0;
            font-size: 1.25rem;
        }

        :global(h5) {
            margin: 1rem 0;
            font-size: 1rem;
        }

        :global(p) {
            margin: 1rem 0;
        }

        :global(li) {
            margin-left: 2rem;
            line-height: 1.75;
            list-style: disc;
        }

        :global(li) {
            :global(ul) {
                :global(li) {
                    list-style: circle;
                }
            }
        }

        :global(ol) {
            :global(li) {
                list-style: decimal;
            }
        }

        :global(pre) {
            width: 100%;
            margin: 0.5rem 0;

            :global(code) {
                display: block;
                width: 100%;
                padding: 0.5rem;
                color: white;
                background-color: rgb(40, 40, 40);
                border-radius: 0.5rem;
            }
        }

        :global(p) {
            width: 100%;
            margin: 0.5rem 0;

            :global(code) {
                width: 100%;
                padding: 0.25rem 0.5rem;
                margin: 0 0.25rem;
                color: white;
                background-color: rgb(40, 40, 40);
                border-radius: 0.5rem;
            }
        }

        :global(.image_c) {
            display: block;
            margin: auto;
        }

        :global(a) {
            color: rgb(80, 80, 232);
            text-decoration: underline;
        }

        :global(blockquote) {
            border-left: 4px solid grey;
            padding: 0.5rem;
            margin: 1rem 0;

            :global(p) {

                color: rgb(103, 103, 103);
                
            }
        }

        :global(table) {
            margin: 0 auto;
        }

        :global(th) {
            padding: 0.25rem 0.5rem;
            border: 1px solid #000000;
            background-color: rgb(195, 195, 195);
        }

        :global(td) {
            padding: 0.25rem;
            border: 1px solid #000000;
        }
    }
</style>
