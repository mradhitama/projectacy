<template>
  <div id="app" class="h-screen bg-gray-50 dark:bg-darkness text-black dark:text-white transition-colors duration-500">
    <div class="mask-container pointer-events-none">
      <div class="texture-layer"></div>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import "~/assets/css/global.css";
import { useTheme } from "~/composables/useTheme";

const { initTheme } = useTheme();
initTheme();
</script>

<style scoped>
.mask-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
}

.texture-layer {
  width: 100%;
  height: 100%;
  background-image: url('/texture.png');
  background-repeat: repeat;
  opacity: 0.13;
  background-size: 100px;
}
</style>
