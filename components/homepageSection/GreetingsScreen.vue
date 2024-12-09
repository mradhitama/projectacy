<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black z-50"
    :class="slideClass"
  >
    <div class="text-center">
      <p class="text-4xl font-bold text-white">{{ currentGreeting }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const greetings = [
  "Hello",
  "Hola",
  "مرحبا",
  "Bonjour",
  "Ciao",
  "Konnichiwa",
  "नमस्ते",
  "Sugeng Rawuh",
  "Halo",
];

const currentGreeting = ref(greetings[0]);
const slideClass = ref("slide-in");

let intervalId;
let greetingIndex = 0;

onMounted(() => {
  intervalId = setInterval(() => {
    greetingIndex++;
    if (greetingIndex < greetings.length) {
      currentGreeting.value = greetings[greetingIndex];
    } else {
      clearInterval(intervalId);
    }
  }, 222);

  setTimeout(() => {
    slideClass.value = "slide-out"; 
    setTimeout(() => {
      emit("loading-complete");
    }, 2000);
  }, greetings.length * 222);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.fixed {
  background-color: #0E1C1C;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 100;
}

.slide-in {
  opacity: 0;
  transform: translateY(-100%);
  animation: slideIn 0.5s forwards;
}

.slide-out {
  opacity: 1;
  transform: translateY(0);
  animation: slideOut 1s forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}

p {
  color: #E9E3E7;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-size: 3rem;
}
</style>
