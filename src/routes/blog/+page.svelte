<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<main>
    <div class="base">
        <div class="container">
            <h1 class="heading">Blog</h1>
            <ul class="list">
                {#each data.blog as post}
                    <a class="hover" href={post.path}>
                        <li class="item">
                            <img class="thumbnail" src={post.image} alt="" />
                            <div class="content">
                                <h2>
                                    {post.title}
                                </h2>
                                <time>
                                    最終更新日：{post.date}
                                </time>
                            </div>
                        </li>
                    </a>
                {/each}
            </ul>
        </div>
    </div>
</main>

<style>
    main {
        .heading {
            font-size: 2rem;
        }

        .base {
            display: flex;
            justify-content: center;
            padding: 0 4rem;

            .container {
                width: 100%;
                max-width: 64rem;

                .list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
                    gap: 1rem;
                    justify-content: center;

                    .item {
                        margin: 1rem 0;
                        border: 2px solid #000000;
                        border-radius: 1rem;
                        transition: border .05s;

                        &:hover {
                            border: 5px solid #000000;
                        }

                        .thumbnail {
                            width: 100%;
                            border-radius: 1rem 1rem 0 0;
                            border-bottom: 1px solid #000;
                        }

                        .content {
                            padding: 1rem;

                            h2 {
                                font-size: 1.1rem;
                                font-weight: bold;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
