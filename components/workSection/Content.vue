<template>
    <div class="custom-scrollbar w-full h-full overflow-y-auto">
        <article class="prose dark:prose-invert max-w-none text-black dark:text-white">
            <!-- Main Section -->
            <section class="bg-gray-200 dark:bg-zinc-900 p-10 pb-20 rounded-2xl shadow-lg">
                <figure>
                    <NuxtImg src="https://drive.google.com/uc?export=view&id=1S6lZ6EB_rCYZSRkCS4md_K9WJ1_N0ALr"
                        alt="Business Analysis" class="w-full h-52 object-cover rounded-xl mb-4" loading="lazy" />
                    <figcaption class="text-xs text-gray-400 mt-1 mb-8">
                        Photo by <a
                            href="https://unsplash.com/@sigmund?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sigmund</a>
                        on <a
                            href="https://unsplash.com/photos/people-sitting-on-chair-in-front-of-computer-monitor-Fa9b57hffnM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </figcaption>
                </figure>

                <h1>Hey, I’m Chandra 👋</h1>
                <p>Welcome to <span class="highlight">Projectacy</span> — a space where ideas, curiosity, and clean code
                    come together.
                </p>
                <br>
                <p>
                    The name’s Chandra Yogi Adhitama, but you can just call me Chandra. Originally from the calm and
                    green lands of Lampung, I’ve been living and building my career in
                    Jakarta since 2019. I came here with big dreams, a backpack full of code (and coffee), and a heart
                    full of curiosity about how tech can solve real-life problems.
                </p>
                <br>
                <p>
                    The journey really began back in college at Brawijaya University, where I studied Computer Science
                    while diving into student organizations and small experimental projects. After graduating in early
                    2019, I dove headfirst into the world of tech professionally — and haven’t looked back since.
                </p>
                <hr style="border: none; border-top: 1px solid #333; margin: 1.5rem 0;" />

                <h4>My Story So Far</h4>

                <p><strong>2023 – Present</strong><br />
                    Currently working with PT Astra Welab Digital Arta (through PT Padepokan Tujuh Sembilan) on a
                    mission to reshape digital finance with <span class="highlight">Maucash</span>. I’ve been helping
                    transition their product from traditional cash loans to more productive financial services —
                    building scalable backend systems, improving compliance, and trimming unused infrastructure to save
                    costs.</p><br>

                <p><strong>2022 – 2023</strong><br />
                    Took the lead as a Fullstack Developer at PT Famindo Kunci Sukses to launch <span
                        class="highlight">Sekolah Kripto Indonesia</span>, an educational platform designed to tackle
                    crypto misinformation and bring clarity to the community. From system architecture to frontend
                    features, we launched the MVP in under 6 months and supported everything from articles to live
                    workshops.</p><br>

                <p><strong>2019 – 2022</strong><br />
                    Spent a few exciting years at AGIT (outsourced to Astra International) developing eCommerce
                    platforms like <span class="highlight">Auto2000 Digiroom</span> and <span
                        class="highlight">Seva</span>. It was a deep dive into enterprise-level architecture, SAP
                    Hybris, and building high-performance systems that support thousands of users across regions.</p>
                <hr style="border: none; border-top: 1px solid #333; margin: 1.5rem 0;" />

                <h4>What I Love Doing</h4>
                <p>
                    Backend development is definitely my sweet spot, but I feel right at home on the frontend too. I
                    work best when I get to design systems that are clean, testable, and future-proof — integrating
                    APIs, managing databases, and collaborating with product teams to bring ideas to life.
                </p>
                <br>
                <p>
                    I care about code quality, user experience, and clarity in communication. Whether I’m deploying
                    services with Docker, tuning performance, or explaining system flows to non-technical folks — I love
                    being the bridge between tech and people.
                </p>
                <hr style="border: none; border-top: 1px solid #333; margin: 1.5rem 0;" />

                <h4>My Tech Toolbox</h4>
                <p><strong>Languages & Frameworks:</strong> Java, Golang, PHP, Node.js, Spring Boot, Next.js, Nuxt.js
                </p>
                <p><strong>Backend & Infra:</strong> REST API, GraphQL, Kafka, RabbitMQ, Redis, MongoDB, MySQL, Docker
                </p>
                <p><strong>DevOps & Tools:</strong> Jenkins, DigitalOcean, Apollo, JumpServer, ElasticJob</p>
                <p><strong>Search & Optimization:</strong> Apache Solr, Elasticsearch, Performance Tuning</p>
                <p><strong>Workflow:</strong> Git, Notion, Confluence, Jira, Agile Scrum</p>
                <hr style="border: none; border-top: 1px solid #333; margin: 1.5rem 0;" />

                <h4>Let’s Connect</h4>
                <p>
                    If you’re curious about what I’m building at <span class="highlight">Projectacy</span> or just want
                    to chat
                    about tech, design, or something else entirely — you can find me here:
                    <br />
                    📨 Email: <a href="mailto:chandra.y.adhitama@gmail.com">chandra.y.adhitama@gmail.com</a> <br />
                    🌐 Website: <a href="https://theprojectacy.com" target="_blank">theprojectacy.com</a> <br />
                    💼 LinkedIn: <a href="https://linkedin.com/in/chandradhitama"
                        target="_blank">linkedin.com/in/chandradhitama</a>
                </p>

                <p>Thanks for stopping by — hope our paths cross soon 🤍</p>

            </section>
        </article>
    </div>
</template>

<script>
</script>

<style scoped>
.box-content-scroll {
    mask-image: linear-gradient(to bottom,
            transparent 5%,
            black 10%,
            black 80%,
            transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom,
            transparent 5%,
            black 10%,
            black 80%,
            transparent 100%);
}

@media (min-width: 768px) {
    .box-content-scroll {
        mask-image: linear-gradient(to bottom,
                transparent 5%,
                black 15%,
                black 75%,
                transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom,
                transparent 5%,
                black 15%,
                black 75%,
                transparent 100%);
    }
}


.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
}

/* Custom Scrollbar untuk Dark Mode */
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* Untuk browser non-WebKit (Firefox) */
.custom-scrollbar {
    scrollbar-width: none;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.dark .custom-scrollbar {
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.section {
    margin-bottom: 2rem;
}

.job-title {
    font-weight: bold;
}

.company {
    font-style: italic;
}

.tools {
    font-size: 0.95em;
    color: #555;
}

ul {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

a {
    color: #0d47a1;
    text-decoration: underline;
}

a:hover {
    color: #1e88e5;
}
.highlight {
      font-weight: bold;
      color: #1f4ca4;
    }
</style>