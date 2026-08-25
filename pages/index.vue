<template>
  <div class="relative h-screen bg-gray-50 dark:bg-darkness overflow-hidden transition-colors duration-500">
    <!-- Animated background grid pattern for depth -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>

    <Transition 
      name="greeting-fade" 
      mode="out-in"
      @after-leave="onGreetingComplete"
    >
      <Greetings
        v-if="showGreeting"
        class="fixed inset-0 z-50"
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
import { defineAsyncComponent, ref, onMounted } from 'vue'

const greetingDone = ref(false)
const showGreeting = ref(false)
const showHomepage = ref(false)

onMounted(() => {
  if (process.client) {
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
  transition: opacity 0.6s cubic-bezier(0.76, 0, 0.24, 1);
}
.greeting-fade-enter-from,
.greeting-fade-leave-to {
  opacity: 0;
}

.homepage-fade-enter-active {
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
}
.homepage-fade-enter-from {
  opacity: 0;
}
</style>