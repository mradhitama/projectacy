<template>
    <div class="bg-whiteSand dark:bg-darkOcean">
        <LoadingScreen v-if="isLoading" />
        <!-- <ComingSoon v-show="!isLoading" /> -->
        <Hero v-show="!isLoading" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LoadingScreen from "@/components/homepageSection/GreetingsScreen.vue";
// import ComingSoon from "~/components/homepageSection/ComingSoon.vue";
import Hero from "~/components/homepageSection/Hero.vue";

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
});
</script>