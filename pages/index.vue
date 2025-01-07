<template>
    <div class="mask-container"><div style="width:100%;height:100%;background-size:100px;background-repeat:repeat;background-image:url('/texture.png');opacity:0.08;border-radius:0"></div></div>
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
<style scoped>
.mask-container{
    flex: none;
    height: 100%;
    left: calc(50.00000000000002% - 100% / 2);
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
}
</style>