<template>
  <div class="relative min-h-screen bg-gray-100 dark:bg-darkOcean overflow-hidden transition-colors duration-300">
    <Transition 
      name="greeting-fade" 
      mode="out-in"
      @after-leave="onGreetingComplete"
    >
      <Greetings
        v-if="showGreeting"
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
import { defineAsyncComponent, ref, watchEffect, onMounted } from 'vue'

const greetingDone = ref(false)
const showGreeting = ref(false)
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

    const hasSeenGreeting = sessionStorage.getItem('hasSeenGreeting')
    if (!hasSeenGreeting) {
      showGreeting.value = true
    } else {
      greetingDone.value = true
      showHomepage.value = true
    }
  }
})

const onGreetingDone = () => {
  greetingDone.value = true
  showHomepage.value = true
  sessionStorage.setItem('hasSeenGreeting', 'true')
}

const onGreetingComplete = () => {
  showGreeting.value = false
}

const AsyncHomepage = defineAsyncComponent({
  loader: async () => import('~/components/Homepage.vue'),
  delay: 200,
  suspensible: false
})
</script>

<style scoped>
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