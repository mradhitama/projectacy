<template>
    <section class="page flex justify-center items-center min-h-screen bg-opacity-50 mx-auto">
        <div
            class="lg:bg-gray-100 dark:bg-darkness lg:bg-opacity-80 lg:backdrop-blur-lg shadow-lg lg:rounded-2xl p-3 gap-3 lg:w-screen lg:h-screen">
            <div
                class="grid lg:grid-cols-5 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-4 grid-cols-1 grid-rows-none gap-3 h-full">
                <div
                    class="box cursor-pointer relative md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box cursor-pointer relative md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box cursor-pointer relative md:col-span-3 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                    <div class="text-center text-black dark:text-white">
                        <h1>{{ error.statusCode }}</h1>
                        <p class="text-gray-500">
                            {{ error.message }}
                        </p>
                        <button class="mt-4 rounded-2xl bg-greenOcean p-3 text-white">
                            <NuxtLink to="/">
                                Back to Homepage
                            </NuxtLink>
                        </button>
                    </div>
                </div>
                <div
                    class="box cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box cursor-pointer relative md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
                <div
                    class="box cursor-pointer relative md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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
</style>