<template>
    <div class="mask-container">
        <div class="w-full h-full bg-[url('/texture.png')] bg-repeat opacity-[0.08] rounded-none bg-[length:100px]"></div>
    </div>
    <div class="bg-gray-100 dark:bg-darkOcean text-black dark:text-white">
        <Greetings />
        <Homepage />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Greetings from "~/components/Greetings.vue";
import Homepage from "~/components/Homepage.vue";
</script>

<style scoped>
.mask-container {
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