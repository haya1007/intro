<script lang="ts">
    import data from "$lib/assets/global-nav.json"
</script>

<footer>
    <div class="base">
        <div class="container">

            <a class="hover" href="/"><img src="/images/icon.png" alt=""></a>

            <div class="footer-nav">
                <nav class="global">
                    <ul>
                        {#each data as item}
                            <li><a class="hover" href={item.href}>{item.text}</a></li>
                        {/each}
                    </ul>
                </nav>
                
                <nav class="sns">
                    <ul>
                        <li><img class="hover" src="/images/sns/youtube.svg" alt="YouTube"></li>
                        <li><img class="hover" src="/images/sns/x.svg" alt="X"></li>
                        <li><img class="hover" src="/images/sns/github.svg" alt="GitHub"></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <p class="copyright">Copyright <span>&copy;</span> haya1007 all rights reserved.</p>
</footer>

<style>
    footer {
        margin-top: auto;
        padding: 4rem;
        background-color: rgb(47, 47, 47);
        color: white;

        .base {
            display: flex;
            justify-content: center;
        }

        .container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 64rem;
            height: 15rem;

            img {
                width: 15rem;
                height: 15rem;
            }

            .footer-nav {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 10rem;

                .global {
                    font-size: 1.5rem;
                    
                    ul {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                    }
                }

                .sns {
                    ul {
                        display: flex;
                        justify-content: space-between;

                        img {
                            width: 2rem;
                            height: 2rem;
                        }
                    }
                }
            }
        }

        .copyright {
            text-align: center;
            margin-top: 2rem;

            span {
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }
</style>