<template>
  <button 
    @click="toggleTheme" 
    class="relative p-4 rounded-full hover:bg-gray-100 dark:hover:bg-deepOcean transition-all duration-300 flex items-center justify-center group overflow-hidden focus:outline-none focus:ring-2 focus:ring-greenOcean/40 shadow-sm border border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/20"
    aria-label="Toggle dark mode"
  >
    <div class="relative w-8 h-8 flex items-center justify-center">
      <!-- Sun Icon -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.8" 
        stroke="currentColor" 
        class="w-7 h-7 text-yellow-500 absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform"
        :class="isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 21v-2.25m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>

      <!-- Moon Icon -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.8" 
        stroke="currentColor" 
        class="w-7 h-7 text-indigo-400 absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform"
        :class="isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </div>
  </button>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
</style>