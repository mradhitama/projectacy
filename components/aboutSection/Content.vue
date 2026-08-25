<template>
    <div class="custom-scrollbar w-full h-full overflow-y-auto">
        <article class="prose dark:prose-invert max-w-none text-black dark:text-white">
            <!-- Main Section -->
            <section class="p-6 md:p-10 pb-16">
                <figure>
                    <NuxtImg src="https://drive.google.com/uc?export=view&id=1S6lZ6EB_rCYZSRkCS4md_K9WJ1_N0ALr"
                        alt="Business Analysis" class="w-full h-56 object-cover rounded-xl mb-2 shadow-sm" loading="lazy" />
                    <figcaption class="text-xs text-gray-400 dark:text-gray-500 mt-1 mb-8 text-center select-none">
                        Photo by <a class="hover:text-greenOcean transition-colors"
                            href="https://unsplash.com/@sigmund?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sigmund</a>
                        on <a class="hover:text-greenOcean transition-colors"
                            href="https://unsplash.com/photos/people-sitting-on-chair-in-front-of-computer-monitor-Fa9b57hffnM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </figcaption>
                </figure>

                <h2 class="text-3xl font-bold mb-6 text-darkOcean dark:text-white select-none">What I'm About?</h2>
                <!-- Story -->
                <div class="mb-10 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed flex flex-col gap-4">
                    <h4 class="text-xl font-semibold mb-2 text-darkOcean dark:text-white select-none">My Story</h4>
                    <p>
                        I didn’t grow up chasing tech. I grew up chasing questions—why things work, how people think,
                        and what makes something truly meaningful. In a quiet town filled with second-hand books and
                        endless wondering, I found comfort in systems, not just the mechanical kind, but the invisible
                        ones that shape how we live and connect.
                    </p>
                    <p>
                        Tech found me later, not as a goal, but as a language. One that helped me turn curiosity into
                        something tangible. Over time, what started as code became conversation—between humans and
                        machines, between habits and change.
                    </p>
                    <p>
                        Now, I don’t just build systems. I try to understand them. To design with care, to question what
                        we automate, and to always ask: is this making someone’s life a little easier, a little
                        brighter?
                    </p>
                    <p>
                        The story’s still unfolding. And maybe that’s the best part.
                    </p>
                </div>

                <h3 class="text-2xl font-bold mb-6 text-darkOcean dark:text-white select-none">What I Care About</h3>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
                    <!-- Card 1 -->
                    <div class="bg-gray-100/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                        <figure>
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1617228679684-890412dc57a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Simple yet deep system sketch" class="w-full h-40 object-cover rounded-xl mb-2"
                                loading="lazy" />
                            <figcaption class="text-2xs text-gray-400 mb-2">
                                Photo by <a class="hover:text-greenOcean"
                                    href="https://unsplash.com/@sajadnori?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sajad Nori</a>
                            </figcaption>
                        </figure>
                        <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                            <strong class="text-darkOcean dark:text-white">Simplicity with depth</strong>: I believe in building systems that feel effortless
                            on the surface, but are thoughtfully designed underneath—like a well-crafted book that’s easy to read yet leaves you thinking long after.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-gray-100/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                        <figure>
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1470&q=80"
                                alt="Tech listening and adapting" class="w-full h-40 object-cover rounded-xl mb-2"
                                loading="lazy" />
                            <figcaption class="text-2xs text-gray-400 mb-2">
                                Photo by <a class="hover:text-greenOcean"
                                    href="https://unsplash.com/@ffstop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fotis Fotopoulos</a>
                            </figcaption>
                        </figure>
                        <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                            <strong class="text-darkOcean dark:text-white">Tech that listens</strong>: Good tech should adapt to human needs, not the other way around. It should reduce friction, understand context, and support without being intrusive.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div class="bg-gray-100/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                        <figure>
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Prototyping ideas through hands-on learning"
                                class="w-full h-40 object-cover rounded-xl mb-2" loading="lazy" />
                            <figcaption class="text-2xs text-gray-400 mb-2">
                                Photo by <a class="hover:text-greenOcean"
                                    href="https://unsplash.com/@alvarordesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alvaro Reyes</a>
                            </figcaption>
                        </figure>
                        <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                            <strong class="text-darkOcean dark:text-white">Learning by making</strong>: For me, learning sticks best when it's messy, hands-on, and full of discovery. Prototypes and side projects are my way of testing what works.
                        </p>
                    </div>
                </div>

                <div class="mt-12 text-center border-t border-black/5 dark:border-white/5 pt-8">
                    <p class="italic text-base text-gray-500 dark:text-gray-400 select-none">
                        “We craft our creations, then our creations craft us.”
                    </p>
                </div>
            </section>
        </article>
    </div>
</template>

<script setup>
</script>

<style scoped>
.text-2xs {
    font-size: 0.7rem;
}
</style>