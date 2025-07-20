<template>
  <div class="relative min-h-screen bg-gray-100 dark:bg-darkOcean overflow-hidden transition-colors duration-300">
    <div class="mask-container pointer-events-none">
      <div class="texture-layer"></div>
    </div>

    <Transition 
      name="greeting-fade" 
      mode="out-in"
      @after-leave="onGreetingComplete"
    >
      <Greetings
        v-if="!greetingDone"
        class="fixed inset-0 z-50"
        :dark-mode="isDark"
        @done="onGreetingDone"
      />
    </Transition>

    <Transition name="homepage-fade">
      <component
        :is="AsyncHomepage"
        v-if="showHomepage"
        class="relative z-10 text-black dark:text-white"
      />
    </Transition>
  </div>
</template>

<script setup>
import Greetings from '~/components/Greetings.vue'
import { defineAsyncComponent, ref, watchEffect } from 'vue'

const greetingDone = ref(false)
const showHomepage = ref(false)
const isDark = ref(false)

watchEffect(() => {
  if (process.client) {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})

onMounted(() => {
  if (process.client) {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    isDark.value = darkMediaQuery.matches
    
    darkMediaQuery.addEventListener('change', (e) => {
      isDark.value = e.matches
    })
  }
})

const onGreetingDone = () => {
  greetingDone.value = true
}

const onGreetingComplete = () => {
  showHomepage.value = true
}

const AsyncHomepage = defineAsyncComponent({
  loader: async () => import('~/components/Homepage.vue'),
  delay: 200,
  suspensible: false
})
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

.greeting-fade-enter-active,
.greeting-fade-leave-active {
  transition: opacity 0.4s ease;
}
.greeting-fade-enter-from,
.greeting-fade-leave-to {
  opacity: 0;
}

.homepage-fade-enter-active {
  transition: opacity 0.4s ease 0.4s;
}
.homepage-fade-enter-from {
  opacity: 0;
}
</style>