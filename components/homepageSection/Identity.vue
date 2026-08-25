<template>
  <div class="flex flex-col gap-3 w-full">
    <!-- Status badge -->
    <div class="flex items-center gap-2 self-start px-3 py-1 text-xs font-medium rounded-full bg-greenOcean/10 text-greenOcean dark:text-[#65918e]">
      <span class="relative flex h-2 w-2">
        <span class="status-dot absolute inline-flex h-full w-full rounded-full bg-greenOcean opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-greenOcean"></span>
      </span>
      <span>Available for select projects</span>
    </div>

    <div>
      <h3 class="text-darkOcean dark:text-white font-semibold tracking-tight text-3xl">
        Hi, I'm
        <span class="text cursor-default">
          <span class="a text-greenOcean font-bold">A</span><span class="cy text-greenOcean font-bold">CY</span>
          <span class="adhitama font-semibold text-greenOcean dark:text-greenOcean">dhitama</span>
        </span>
      </h3>
      <p class="mt-2 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
        Software Engineer, currently working at Maucash (Astra Welab Digital Arta) based in Jakarta.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.text {
  position: relative;
  display: inline-block;
}

.text .cy {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.text .adhitama {
  position: absolute;
  top: 0;
  left: 1.05rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0.1s;
}

:global(#identity:hover) .cy {
  transform: translateX(5.5rem);
}

:global(#identity:hover) .adhitama {
  opacity: 1;
}

:global(#identity:not(:hover)) .adhitama {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}
</style>