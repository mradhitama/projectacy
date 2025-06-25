<template>
    <div class="relative">
        <!-- Mask Container dengan texture -->
        <div class="mask-container">
            <div class="texture-layer"></div>
        </div>

        <!-- Konten utama -->
        <div class="bg-gray-100 dark:bg-darkOcean text-black dark:text-white relative z-10">
            <Greetings />
            <Homepage />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Greetings from "~/components/Greetings.vue";
import Homepage from "~/components/Homepage.vue";
</script>

<style scoped>
.mask-container {
    position: fixed; /* Ganti dari absolute ke fixed untuk memastikan texture selalu menutupi seluruh viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Pastikan tinggi mengisi viewport */
    pointer-events: none;
    z-index: 100;
}

.texture-layer {
    width: 100%;
    height: 100%;
    background-image: url('/texture.png');
    background-repeat: repeat;
    opacity: 0.08;
    background-size: 100px;
}
</style>