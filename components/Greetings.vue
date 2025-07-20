<template>
  <Transition name="fade">
    <div v-if="!isDone" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-darkOcean"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-darkOcean to-darkness transition-opacity duration-1000" :class="{'opacity-0': slideClass === 'slide-out'}"></div>
      <div class="relative flex items-center justify-center h-full" :class="slideClass">
        <div class="text-center">
          <p class="text-4xl font-bold text-white">{{ currentGreeting }}</p>
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
const slideClass = ref('slide-in')
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
  }, 222)

  setTimeout(() => {
    slideClass.value = 'slide-out'
    setTimeout(() => {
      isDone.value = true
      emit('done')
    }, 1000)
  }, greetings.length * 222)
})

onUnmounted(() => clearInterval(intervalId))
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-size: 3rem;
  font-weight: 400;
}
</style>