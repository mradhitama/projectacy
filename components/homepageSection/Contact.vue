<template>
    <div class="flex flex-col items-center justify-center text-center w-full h-full">
        <h6 class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4 select-none">Have a project?</h6>
        <button 
            class="relative flex items-center justify-center gap-2 px-5 py-3 w-full max-w-[200px] bg-gradient-to-r from-greenOcean to-[#3c5e5b] text-white rounded-xl shadow-md hover:shadow-lg hover:shadow-greenOcean/15 overflow-hidden group/btn transition-all duration-300 active:scale-95 cursor-pointer"
            onclick="window.location.href='mailto:chandra.y.adhitama@gmail.com'"
        >
            <span class="relative z-10 font-semibold text-sm">Let's talk!</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <!-- Shining reflection overlay -->
            <div class="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none"></div>
        </button>
    </div>
</template>

<script setup>
</script>

<style scoped></style>