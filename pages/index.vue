<template>
    <div class="bg-gray-100 dark:bg-darkOcean text-black dark:text-white">
        <LoadingScreen v-if="isLoading" />
        <!-- <ComingSoon v-show="!isLoading" /> -->
        <Hero v-show="!isLoading" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LoadingScreen from "~/components/GreetingsScreen.vue";
// import ComingSoon from "~/components/homepageSection/ComingSoon.vue";
import Hero from "~/components/homepageSection/Hero.vue";

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
});
</script>