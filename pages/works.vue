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

                <!-- Main Content Card -->
                <div
                    class="box order-3 lg:order-2 relative md:col-span-3 md:row-span-3 col-span-1 bg-white/70 dark:bg-darkOcean/60 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden">
                    <Content />
                </div>

                <!-- Resume Download Card -->
                <NuxtLink to="https://drive.google.com/file/d/1Yo17cSwMsdO1tbFpbQk5HRtFcroE9Jjc/view?usp=drive_link"
                    target="_blank"
                    class="box order-4 lg:order-3 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 p-8 bg-gradient-to-br from-greenOcean to-[#3d5e5a] dark:from-greenOcean/85 dark:to-[#1a3634] border border-greenOcean/15 dark:border-greenOcean/5 rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                    <div class="transition-opacity duration-300 group-hover:opacity-0 flex items-center justify-center">
                        <Download />
                    </div>
                    <span
                        class="absolute text-white text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 select-none">
                        Get Resume
                    </span>
                </NuxtLink>

                <!-- Decorative Card 1 -->
                <div
                    class="box order-5 lg:order-4 relative md:col-span-1 md:row-span-2 col-span-1 p-8 bg-white/40 dark:bg-darkOcean/30 border border-black/[0.02] dark:border-white/[0.02] backdrop-blur-sm rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(73,113,110,0.06),transparent)]"></div>
                </div>

                <!-- Decorative Card 2 -->
                <div
                    class="box order-6 lg:order-5 relative md:col-span-1 md:row-span-1 col-span-1 p-8 bg-white/40 dark:bg-darkOcean/30 border border-black/[0.02] dark:border-white/[0.02] backdrop-blur-sm rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(73,113,110,0.06),transparent)]"></div>
                </div>

                <!-- Switch Card -->
                <div
                    class="box order-2 lg:order-6 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
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
import Content from '~/components/workSection/Content.vue';
import Download from '~/components/workSection/Download.vue';

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