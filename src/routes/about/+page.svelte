<script lang="ts">
    import sns from "$lib/assets/sns-nav.json"
</script>

<main>
    <div class="base">
        <div class="container">
            <h1 class="heading">Profile</h1>
            <div class="card">

                <div class="intro">
                    <div class="upper">
                        <img src="/images/1745.png" alt="" />
                        <div class="title">
                            <div class="content">
                                <div class="svgSample1">
                                    <svg xmlns="http://www.w3.org/2000/svg">
                                      <defs>
                                        <text dy="0.4em" id="outTextx">InfraEngineer</text>
                                      </defs>
                                      <use x="50%" y="50%" xlink:href="#outTextx"></use>
                                      <use x="50%" y="50%" xlink:href="#outTextx"></use>
                                    </svg>
                                </div>
                                <div class="name">
                                    <h2>haya1007</h2>
                                    <p>(2002/10/07)</p>
                                </div>
                            </div>
                            <div class="description">
                                <p>なんかしてる人です。</p>
                            </div>
                            <nav class="sns">
                                <ul>
                                    {#each sns as item}
                                    <li><a href={item.href} target="_blank"><img class="hover" src={item.path} alt={item.service}></a></li>
                                    {/each}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                </div>
                <div class="job">
                    <h3 class="title">Job</h3>
                    <p>インフラエンジニア</p>
                    <p>わあああああああああああああああああ</p>
                </div>
            </div>
        </div>
    </div>

    <h1>History</h1>
</main>

<style>
    main {
        .base {
            display: flex;
            justify-content: center;
            padding: 0 4rem;

            .container {
                width: 100%;
                max-width: 64rem;

                .heading {
                    margin-bottom: 1rem;
                    color: white;
                    font-size: 4rem;
                    letter-spacing : 4px;                /* 文字間 */
                    text-shadow    : 
                        4px  4px 2px #000000,
                        -4px  4px 2px #000000,
                        4px -4px 2px #000000,
                        -4px -4px 2px #000000,
                        4px  0px 2px #000000,
                        0px  4px 2px #000000,
                        -4px  0px 2px #000000,
                        0px -4px 2px #000000;        /* 文字の影 */
                }

                .card {
                    border: 6px solid #000000;
                    border-radius: 1.5rem;
                    font-size: 1rem;

                    .intro {
                        padding: 4rem 8rem;
                        border-bottom: 6px solid #000000;

                        .upper {
                            display: flex;
                            gap: 4rem;

                            img {
                                width: 100%;
                                max-width: 18rem;
                                height: 100%;
                                max-width: 18rem;
                                border: 2px solid #000000;
                                border-radius: 50%;
                            }

                            .title {
                                padding-bottom: 1rem;

                                .content {
                                    display: flex;
                                    flex-direction: column;

                                    .svgSample1 {
                                        text {
                                            font-weight       : bold;
                                            font-size         : 1.5rem;
                                            font-family       : Meiryo UI;
                                            stroke            : #000000;
                                            fill              : #ffffff;
                                            letter-spacing    : 3px;
                                            text-anchor       : middle;
                                            dominant-baseline : alphabetic;
                                            padding-bottom: 1rem;
                                        }

                                        svg {
                                            
                                        }
                                    }

                                    .svgSample1 > svg > use:nth-of-type(1) {
                                        stroke-width      : 7px;
                                        paint-order       : stroke;
                                        stroke-linejoin   : round ;
                                    }
                                    .svgSample1 > svg > use:nth-of-type(2) {
                                        stroke-width      : 0;
                                    }

                                    .name {
                                        display: flex;
                                        align-items: end;
                                        gap: 1rem;
                                        font-size: 1.5rem;
                                        font-weight: bold;

                                        h2 {
                                            font-size: 4rem;
                                        }
                                    }
                                }

                                .description {
                                    margin: 2rem 0;
                                }

                                .sns {
                                    ul {
                                        display: flex;
                                        gap: 1rem;

                                        li {
                                            background-color: #000;
                                            max-width: 3rem;
                                            max-height: 3rem;
                                            padding: 0.25rem;
                                            border-radius: 50%;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .job {
                        padding: 2rem 8rem;

                        .title {
                            margin-bottom: 1rem;
                            font-size: 3rem;
                            font-weight: bold;

                        }
                    }
                }
            }
        }
    }
</style>