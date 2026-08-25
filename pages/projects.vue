<template>
    <section class="page flex justify-center items-center h-screen mx-auto p-3 lg:p-4 select-none">
        <div
            class="lg:bg-white/10 dark:bg-black/20 lg:backdrop-blur-xl shadow-2xl lg:rounded-3xl p-3 gap-3 lg:w-screen lg:h-screen lg:max-h-screen flex items-center justify-center border border-white/5 dark:border-white/5">
            <div
                class="grid lg:grid-cols-5 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-4 grid-cols-1 gap-3 h-full w-full">
                <!-- Back Card -->
                <div @click="$router.go(-1)"
                    class="box order-1 sm:order-1 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 p-8 bg-gradient-to-br from-greenOcean to-deepGreenOcean dark:from-greenOcean/80 dark:to-deepGreenOcean/90 border border-greenOcean/15 dark:border-greenOcean/5 rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                    role="button" tabindex="0" @keyup.enter="$router.go(-1)">
                    <Back />
                </div>

                <!-- Main Construction Card -->
                <div
                    class="box order-3 lg:order-2 relative md:col-span-3 md:row-span-3 col-span-1 bg-white/70 dark:bg-darkOcean/60 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden">
                    <div class="text-center text-black dark:text-white p-6 max-w-md flex flex-col items-center justify-center">
                        <div class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-greenOcean/15 text-greenOcean dark:text-[#7db2ae] mb-6 select-none animate-pulse">
                            🚧 Under Construction
                        </div>
                        <h2 class="text-3xl font-extrabold mb-4 text-darkOcean dark:text-white select-none">
                            We’re building something great
                        </h2>
                        <p class="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-8 select-none leading-relaxed">
                            This page is currently under construction. Stay tuned for a showcase of select projects, code snippets, and engineering experiments!
                        </p>
                        <NuxtLink to="/"
                            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-greenOcean to-[#3d5e5b] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-greenOcean/15 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer select-none">
                            <span>Back to Homepage</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Decorative Panel 1 -->
                <div
                    class="box order-4 lg:order-3 relative md:col-span-1 md:row-span-2 col-span-1 p-8 bg-white/40 dark:bg-darkOcean/30 border border-black/[0.02] dark:border-white/[0.02] backdrop-blur-sm rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(73,113,110,0.06),transparent)]"></div>
                </div>

                <!-- Decorative Panel 2 -->
                <div
                    class="box order-5 lg:order-4 relative md:col-span-1 md:row-span-2 col-span-1 p-8 bg-white/40 dark:bg-darkOcean/30 border border-black/[0.02] dark:border-white/[0.02] backdrop-blur-sm rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(73,113,110,0.06),transparent)]"></div>
                </div>

                <!-- Switch Card -->
                <div
                    class="box order-2 lg:order-5 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                    <Switch />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Switch from '~/components/homepageSection/Switch.vue';
import Back from '~/components/aboutSection/Back.vue';

defineProps(['error'])

onMounted(() => {
  if (process.client) {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box, index) => {
      box.style.animationDelay = `${index * 60 + 100}ms`
    })
  }
})
</script>

<style scoped>
</style>