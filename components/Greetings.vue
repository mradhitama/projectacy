<template>
  <Transition name="greeting-fade">
    <div v-if="!isDone" class="fixed inset-0 z-50 flex items-center justify-center bg-darkness">
      <div class="absolute inset-0 bg-gradient-to-tr from-darkness via-darkOcean to-[#132221] opacity-90"></div>
      
      <!-- Radial background glow -->
      <div class="absolute w-[400px] h-[400px] bg-greenOcean/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

      <div class="relative z-10 text-center flex flex-col items-center justify-center px-4">
        <div class="flex items-center justify-center gap-4 py-6">
          <span class="inline-block w-2.5 h-2.5 rounded-full bg-greenOcean shadow-[0_0_12px_#49716e] animate-ping"></span>
          <h1 class="greeting-text text-white select-none">
            {{ currentGreeting }}
          </h1>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['done'])

const greetings = [
  'Hello', 'مرحبا', 'Bonjour', 'Hola', 'Ciao',
  'Konnichiwa', 'नमस्ते', 'Sugeng Rawuh', 'Halo',
]

const currentGreeting = ref(greetings[0])
const isDone = ref(false)

let intervalId
let greetingIndex = 0

onMounted(() => {
  intervalId = setInterval(() => {
    greetingIndex++
    if (greetingIndex < greetings.length) {
      currentGreeting.value = greetings[greetingIndex]
    } else {
      clearInterval(intervalId)
    }
  }, 200)

  // Give a small pause on the final local greeting "Halo" before fading out
  setTimeout(() => {
    isDone.value = true
    emit('done')
  }, greetings.length * 200 + 350)
})

onUnmounted(() => clearInterval(intervalId))
</script>

<style scoped>
.greeting-fade-enter-active,
.greeting-fade-leave-active {
  transition: opacity 0.8s cubic-bezier(0.76, 0, 0.24, 1),
              filter 0.8s cubic-bezier(0.76, 0, 0.24, 1),
              transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
}

.greeting-fade-leave-to {
  opacity: 0;
  filter: blur(16px);
  transform: scale(1.08);
}

.greeting-text {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
  animation: glowPulse 1.5s infinite alternate ease-in-out;
}

@media (min-width: 768px) {
  .greeting-text {
    font-size: 4rem;
  }
}

@keyframes glowPulse {
  0% {
    text-shadow: 0 0 8px rgba(73, 113, 110, 0.2);
    transform: scale(0.99);
  }
  100% {
    text-shadow: 0 0 25px rgba(73, 113, 110, 0.6);
    transform: scale(1.01);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s infinite ease-in-out;
}
</style>