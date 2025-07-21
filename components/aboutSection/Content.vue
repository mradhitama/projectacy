<template>
    <div class="box-content-scroll custom-scrollbar w-full h-full overflow-y-auto">
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

                <h1 class="text-3xl font-bold mb-8">What I'm About?</h1>
                <!-- Story -->
                <div class="mb-10">
                    <h4 class="text-2xl font-semibold mb-4">My Story</h4>
                    <p class="text-base leading-relaxed">
                        Raised in a small town full of noise, curiosity, and second-hand books, I grew
                        up fascinated by how things work—
                        especially systems, stories, and the way people interact with both. That led me
                        to tech, and eventually into software engineering,
                        where logic meets creativity.
                    </p>
                    <p class="mt-4 text-base leading-relaxed">
                        Over time, my journey expanded from just writing code to understanding how
                        systems serve people better.
                        From designing sustainable backend services and delving into business analysis,
                        to experimenting with smart farming and educational platforms—
                        everything I do comes from the same desire: to build things that actually help.
                    </p>
                </div>

                <!-- What I Do Now -->
                <div class="mb-10">
                    <h4 class="text-2xl font-semibold mb-4">What I Do Now</h4>
                    <p class="text-base leading-relaxed">
                        Currently working as a Software Engineer with an eye for system design and
                        future scalability.
                        My day-to-day spans backend architecture, DevOps, API security, and clean
                        code—but beyond that,
                        I explore the intersection between engineering and empathy through business
                        analysis.
                    </p>
                </div>

                <!-- Visual Bento Box Layout -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md flex flex-col">
                        <NuxtImg src="https://drive.google.com/uc?export=view&id=1N22Ibhh0MZMywCD0pUB2t_g0p7g9bMUw"
                            alt="Coding and Architecture" class="w-full h-48 object-cover rounded-xl mb-4" />
                        <h5 class="text-xl font-semibold mb-2">System-Focused Engineer</h5>
                        <p class="text-base leading-relaxed">
                            Building secure, scalable, and maintainable systems using best practices and
                            clean architecture—because great code should last.
                        </p>
                    </div>

                    <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md flex flex-col">
                        <NuxtImg src="https://drive.google.com/uc?export=view&id=149KfZRHdsn_8oikzjAkvni6TknMp0GF_"
                            alt="Business Analysis" class="w-full h-48 object-cover rounded-xl mb-4" />
                        <h5 class="text-xl font-semibold mb-2">Business & System Analyst</h5>
                        <p class="text-base leading-relaxed">
                            Mapping requirements and refining processes to help teams align business
                            goals with the right technical direction.
                        </p>
                    </div>
                </div>
                <div class="mt-12 text-center">
                    <p class="italic text-lg">
                        “We craft our creations, then our creations craft us.”
                    </p>
                </div>
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
}</style>