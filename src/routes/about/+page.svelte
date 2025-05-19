<script lang="ts">
    import sns from "$lib/assets/sns-nav.json"
    import histories from "$lib/assets/history.json"
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
                                <p class="job-name">Beginner InfraEngineer</p>
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
                <div class="history">
                    <h2 class="title">History</h2>
                    {#each histories as history}
                        <div class="history-container">
                            <div class="history-title">
                                <p class="history-date">{history.date}</p>
                                <p class="history-heading">{history.heading}</p>
                            </div>
                            <p class="history-content">{history.content}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        .base {
            display: flex;
            justify-content: center;
            padding: 4rem;

            .container {
                width: 100%;
                max-width: 64rem;

                .heading {
                    margin-bottom: 1rem;
                    font-size: 4rem;
                    font-weight: bold;
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

                                    .job-name {
                                        font-size: 1.5rem;
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

                    .history {
                        margin: 2rem 8rem;

                        .title {
                            margin-bottom: 1rem;
                            font-size: 4rem;
                            font-weight: bold;

                        }

                        .history-container {
                            margin: 2rem 0;

                            .history-title {
                                display: flex;
                                align-items: center;
                                gap: 1rem;

                                .history-date {
                                    font-size: 2.25rem;
                                    font-weight: bold;

                                }

                                .history-heading {
                                    font-size: 1.75rem;
                                    font-weight: bold;
                                }
                            }

                            .history-content {
                                padding-top: 0.5rem;
                                font-size: 1.25rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>