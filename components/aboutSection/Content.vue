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

                <h1 class="text-3xl font-bold mb-8">What I'm About?</h1>
                <!-- Story -->
                <div class="mb-10">
                    <h4 class="text-2xl font-semibold mb-4">My Story</h4>
                    <p class="text-lg text-gray-800 dark:text-zinc-200 mb-4">
                        I didn’t grow up chasing tech. I grew up chasing questions—why things work, how people think,
                        and what makes something truly meaningful. In a quiet town filled with second-hand books and
                        endless wondering, I found comfort in systems, not just the mechanical kind, but the invisible
                        ones that shape how we live and connect.
                    </p>
                    <p class="text-lg text-gray-800 dark:text-zinc-200 mb-4">
                        Tech found me later, not as a goal, but as a language. One that helped me turn curiosity into
                        something tangible. Over time, what started as code became conversation—between humans and
                        machines, between habits and change.
                    </p>
                    <p class="text-lg text-gray-800 dark:text-zinc-200 mb-4">
                        Now, I don’t just build systems. I try to understand them. To design with care, to question what
                        we automate, and to always ask: is this making someone’s life a little easier, a little
                        brighter?
                    </p>
                    <p class="text-lg text-gray-800 dark:text-zinc-200">
                        The story’s still unfolding. And maybe that’s the best part.
                    </p>
                </div>

                <h2 class="text-2xl font-semibold mb-8">What I Care About</h2>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Card 1 -->
                    <div>
                        <figure>
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1617228679684-890412dc57a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Simple yet deep system sketch" class="w-full h-52 object-cover rounded-xl mb-2"
                                loading="lazy" />
                            <figcaption class="text-xs text-gray-400 mb-3">
                                Photo by <a
                                    href="https://unsplash.com/@sajadnori?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sajad
                                    Nori</a> on <a
                                    href="https://unsplash.com/photos/person-holding-black-and-white-round-ornament-21mJd5NUGZU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                            </figcaption>
                        </figure>
                        <p>
                            <strong>Simplicity with depth</strong>: I believe in building systems that feel effortless
                            on the
                            surface,
                            but are thoughtfully designed underneath—like a well-crafted book that’s easy to read yet
                            leaves you
                            thinking long after.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div>
                        <figure>
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1470&q=80"
                                alt="Tech listening and adapting" class="w-full h-52 object-cover rounded-xl mb-2"
                                loading="lazy" />
                            <figcaption class="text-xs text-gray-400 mb-3">
                                Photo by <a
                                    href="https://unsplash.com/@ffstop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fotis
                                    Fotopoulos</a> on <a
                                    href="https://unsplash.com/photos/black-remote-control-on-red-table-6sAl6aQ4OWI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                            </figcaption>
                        </figure>
                        <p>
                            <strong>Tech that listens</strong>: Good tech should adapt to human needs, not the other way
                            around.
                            It should reduce friction, understand the context, and quietly support without being
                            intrusive.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div>
                        <figure>
                            <NuxtImg
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Prototyping ideas through hands-on learning"
                                class="w-full h-52 object-cover rounded-xl mb-2" loading="lazy" />
                            <figcaption class="text-xs text-gray-400 mb-3">
                                Photo by <a
                                    href="https://unsplash.com/@alvarordesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alvaro
                                    Reyes</a> on <a
                                    href="https://unsplash.com/photos/person-working-on-blue-and-white-paper-on-board-qWwpHwip31M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                            </figcaption>
                        </figure>
                        <p>
                            <strong>Learning by making</strong>: For me, learning sticks best when it's messy, hands-on,
                            and
                            full of discovery.
                            Prototypes and side projects are my way of thinking out loud and testing what works.
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
</style>