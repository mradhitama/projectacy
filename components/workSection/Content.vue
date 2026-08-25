<template>
    <div class="custom-scrollbar w-full h-full overflow-y-auto">
        <article class="prose dark:prose-invert max-w-none text-black dark:text-white">
            <!-- Main Section -->
            <section class="p-6 md:p-10 pb-16">
                <figure class="relative select-none">
                    <NuxtImg
                        src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Business Analysis" class="w-full h-56 object-cover rounded-xl mb-2 shadow-sm" loading="lazy" />
                    <figcaption class="text-xs text-gray-400 dark:text-gray-500 mt-1 mb-8 text-center">
                        Photo by <a class="hover:text-greenOcean transition-colors"
                            href="https://unsplash.com/@afgprogrammer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mohammad
                            Rahmani</a> on <a class="hover:text-greenOcean transition-colors"
                            href="https://unsplash.com/photos/man-in-black-long-sleeve-shirt-using-computer-_Fx34KeqIEw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </figcaption>
                </figure>

                <h1 class="text-3xl font-bold mb-4 text-darkOcean dark:text-white select-none">Hey, I’m Adhitama 👋</h1>
                <p class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                    Welcome to <span class="highlight">Projectacy</span> — a space where ideas, curiosity, and clean code come together.
                </p>
                <div class="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed flex flex-col gap-4">
                    <p>
                        The name’s Chandra Yogi Adhitama, but you can just call me Adhitama or Chandra. Originally from the calm and
                        green lands of Lampung, I’ve been living and building my career in
                        Jakarta since 2019. I came here with big dreams, a backpack full of code (and coffee), and a heart
                        full of curiosity about how tech can solve real-life problems.
                    </p>
                    <p>
                        The journey really began back in college at Brawijaya University, where I studied Computer Science
                        while diving into student organizations and small experimental projects. After graduating in early
                        2019, I dove headfirst into the world of tech professionally — and haven’t looked back since.
                    </p>
                </div>
                
                <div class="border-t border-black/5 dark:border-white/5 my-10"></div>

                <h4 class="text-xl font-bold text-darkOcean dark:text-white mb-8 select-none">My Story So Far</h4>

                <!-- Timeline wrapper -->
                <div class="relative pl-6 border-l border-black/10 dark:border-white/10 flex flex-col gap-12 select-none">
                    
                    <!-- Timeline Node 1 -->
                    <div class="relative">
                        <!-- Node indicator dot -->
                        <span class="absolute -left-[30px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white dark:bg-darkOcean border-2 border-greenOcean shadow-[0_0_8px_rgba(73,113,110,0.5)]"></span>
                        
                        <div class="grid md:grid-cols-12 gap-6 items-start">
                            <div class="md:col-span-4 select-none">
                                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-greenOcean/10 text-greenOcean dark:text-[#7ab0ac] mb-2">
                                    2023 - Present
                                </span>
                                <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">Maucash</h3>
                                <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">PT Astra Welab Digital Arta</p>
                            </div>
                            <div class="md:col-span-8">
                                <p class="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                    Currently working with Astra Welab Digital Arta (through PT Padepokan Tujuh Sembilan) on a mission to reshape digital finance with <span class="highlight">Maucash</span>. I’ve been helping transition their product from traditional cash loans to more productive financial services — building scalable backend systems, improving compliance, and trimming unused infrastructure to save costs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Node 2 -->
                    <div class="relative">
                        <!-- Node indicator dot -->
                        <span class="absolute -left-[30px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white dark:bg-darkOcean border-2 border-greenOcean shadow-[0_0_8px_rgba(73,113,110,0.5)]"></span>
                        
                        <div class="grid md:grid-cols-12 gap-6 items-start">
                            <div class="md:col-span-4 select-none">
                                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-greenOcean/10 text-greenOcean dark:text-[#7ab0ac] mb-2">
                                    2022 - 2023
                                </span>
                                <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">SKI</h3>
                                <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">PT Famindo Kunci Sukses</p>
                            </div>
                            <div class="md:col-span-8">
                                <p class="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                    Took the lead as a Fullstack Developer to launch <span class="highlight">Sekolah Kripto Indonesia</span>, an educational platform designed to tackle crypto misinformation and bring clarity to the community. From system architecture to frontend features, we launched the MVP in under 6 months and supported everything from articles to live workshops.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Node 3 -->
                    <div class="relative">
                        <!-- Node indicator dot -->
                        <span class="absolute -left-[30px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white dark:bg-darkOcean border-2 border-greenOcean shadow-[0_0_8px_rgba(73,113,110,0.5)]"></span>
                        
                        <div class="grid md:grid-cols-12 gap-6 items-start">
                            <div class="md:col-span-4 select-none">
                                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-greenOcean/10 text-greenOcean dark:text-[#7ab0ac] mb-2">
                                    2019 - 2022
                                </span>
                                <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">Auto2000</h3>
                                <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">AGIT (Astra Graphia Information Technology)</p>
                            </div>
                            <div class="md:col-span-8">
                                <p class="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                    Spent a few exciting years developed eCommerce platforms like <span class="highlight">Auto2000 Digiroom</span> and <span class="highlight">Seva</span>. It was a deep dive into enterprise-level architecture, SAP Commerce Cloud/Hybris, and building high-performance systems that support thousands of users across regions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-t border-black/5 dark:border-white/5 my-10"></div>

                <h4 class="text-xl font-bold text-darkOcean dark:text-white mb-4 select-none">What I Love Doing</h4>
                <div class="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed flex flex-col gap-4">
                    <p>
                        Backend development is definitely my sweet spot, but I feel right at home on the frontend too. I
                        work best when I get to design systems that are clean, testable, and future-proof — integrating
                        APIs, managing databases, and collaborating with product teams to bring ideas to life.
                    </p>
                    <p>
                        I care about code quality, user experience, and clarity in communication. Whether I’m deploying
                        services with Docker, tuning performance, or explaining system flows to non-technical folks — I love
                        being the bridge between tech and people.
                    </p>
                </div>

                <div class="border-t border-black/5 dark:border-white/5 my-10"></div>

                <h4 class="text-xl font-bold text-darkOcean dark:text-white mb-4 select-none">Let’s Connect</h4>
                <div class="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    <p class="mb-4">
                        If you’re curious about what I’m building at <span class="highlight">Projectacy</span> or just want
                        to chat about tech, design, or something else entirely — you can find me here:
                    </p>
                    <div class="grid sm:grid-cols-2 gap-4 mt-2 select-text">
                        <div class="bg-gray-100/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl p-4">
                            <span class="text-xs text-gray-400 dark:text-gray-500 uppercase block font-semibold mb-1">Email</span>
                            <a href="mailto:chandra.y.adhitama@gmail.com" class="text-sm text-greenOcean dark:text-[#7ab0ac] font-medium hover:underline">
                                chandra.y.adhitama@gmail.com
                            </a>
                        </div>
                        <div class="bg-gray-100/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl p-4">
                            <span class="text-xs text-gray-400 dark:text-gray-500 uppercase block font-semibold mb-1">LinkedIn</span>
                            <a href="https://linkedin.com/in/chandradhitama" target="_blank" class="text-sm text-greenOcean dark:text-[#7ab0ac] font-medium hover:underline">
                                linkedin.com/in/chandradhitama
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-12 text-center pt-4">
                    <p class="text-sm text-gray-400 dark:text-gray-500 select-none">Thanks for stopping by — hope our paths cross soon!</p>
                </div>
            </section>
        </article>
    </div>
</template>

<script setup>
</script>

<style scoped>
.highlight {
    font-weight: 600;
    color: #49716E;
    background-color: rgba(73, 113, 110, 0.08);
    padding: 0.15rem 0.35rem;
    border-radius: 0.375rem;
}
.dark .highlight {
    color: #8bbbb7;
    background-color: rgba(139, 187, 183, 0.12);
}
</style>