<template>
    <section class="page flex justify-center items-center min-h-screen bg-opacity-50 mx-auto">
        <div
            class="lg:bg-gray-100 dark:bg-darkness lg:bg-opacity-80 lg:backdrop-blur-lg shadow-lg lg:rounded-2xl p-3 gap-3 lg:w-screen lg:h-screen">
            <div
                class="grid lg:grid-cols-5 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-4 grid-cols-1 grid-rows-1 gap-3 h-full">
                <div @click="$router.go(-1)"
                    class="box order-1 sm:order-1 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-greenOcean dark:bg-deepGreenOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden"
                    role="button" tabindex="0" @keyup.enter="$router.go(-1)">
                    <Back />
                </div>
                <div
                    class="box order-3 lg:order-2 relative md:col-span-3 md:row-span-3 col-span-1 row-span-1 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                    <Content />
                </div>
                <NuxtLink to="https://drive.google.com/file/d/1Yo17cSwMsdO1tbFpbQk5HRtFcroE9Jjc/view?usp=drive_link"
                    target="_blank"
                    class="box order-4 lg:order-3 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-greenOcean dark:bg-deepGreenOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                    <Download />
                </NuxtLink>
                <div
                    class="box order-5 lg:order-4 cursor-pointer relative md:col-span-1 md:row-span-2 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box order-6 lg:order-5 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box order-2 lg:order-6 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                    <Switch />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Switch from '~/components/homepageSection/Switch.vue';
import Back from '~/components/aboutSection/Back.vue';
import Content from '~/components/workSection/Content.vue';
import Download from '~/components/workSection/Download.vue';
defineProps(['error'])
</script>

<style scoped>
@keyframes fadeInUp {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.box {
    opacity: 0;
    animation: fadeInUp 0.5s ease-in forwards;
}

@media (min-width: 768px) and (orientation: portrait) {
    .portrait\:md-row-span-1 {
        grid-row: span 1 / span 1;
    }
}

@media (min-width: 768px) and (orientation: landscape) {
    .landscape\:md-row-span-2 {
        grid-row: span 2 / span 2;
    }
}

@media (max-width: 767px) and (orientation: portrait) {
    .portrait\:sm-row-span-1 {
        grid-row: span 1 / span 1;
    }
}

@media (max-width: 767px) and (orientation: landscape) {
    .landscape\:sm-row-span-2 {
        grid-row: span 2 / span 2;
    }
}
</style>