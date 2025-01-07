<template>
  <section class="flex justify-center items-center min-h-screen bg-opacity-50 mx-auto">

    <div
      class="lg:bg-gray-100 dark:bg-darkness lg:bg-opacity-80 lg:backdrop-blur-lg shadow-lg lg:rounded-2xl p-3 gap-3 lg:w-screen lg:h-screen">

      <div
        class="grid lg:grid-cols-5 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-4 grid-cols-1 grid-rows-none gap-3 h-full">
        <!-- left section -->
        <div class="md:col-span-4 md:row-span-3 sm:col-span-1 sm:row-span-none flex items-center justify-center h-full">
          <div class="grid md:grid-cols-4 md:grid-rows-3 grid-cols-1 grid-rows-none gap-3 h-full w-full">
            <div
              class="md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center h-full text-container">
              <div>
                <h5 class="text-darkOcean dark:text-white font-bold group">
                  Hi, I'm
                  <span class="text">
                    <span class="a text-greenOcean">A</span><span class="cy text-greenOcean">CY</span>
                    <span class="adhitama">dhitama</span>
                  </span>
                </h5>
                <p class="mt-1 text-gray-500">
                  Software Engineer, Currenly working at AWDA based in Jakarta
                </p>
              </div>
            </div>
            <div
              class="relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
              <img src="/images/work.png" alt="Background"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-300 lg:scale-100 lg:group-hover:scale-105 scale-105 lg:opacity-100 lg:group-hover:opacity-30 opacity-30">
              <h5
                class="relative font-semibold lg:opacity-0 lg:group-hover:opacity-100 opacity-100 transition-opacity duration-300 text-black dark:text-white z-10 flex items-start justify-between">
                <span class="mr-2">Works</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="size-9 -rotate-45 group-hover:rotate-0 duration-700 transition-all">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </h5>
            </div>
            <div
              class="md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full">
              <div class="text-center">
                <DarkModeSwitch />
              </div>
            </div>
            <div
              class="md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-greenOcean dark:bg-deepGreenOcean rounded-2xl shadow flex items-center justify-center h-full">
              <img src="/logo.svg" alt="Logo" class="h-32 w-auto" />
            </div>
            <div
              class="md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full group">
              <div>
                <h5 class="font-semibold flex">
                  <span class="mr-2">About Me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="size-9 -rotate-45 group-hover:rotate-0 duration-700 transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </h5>
                <p class="mt-4 text-gray-500">
                  As a Software Engineer passionate about crafting efficient and innovative solutions, I excel
                  at bridging creativity with cutting-edge technology. With a strong focus on clean code, seamless
                  functionality, and user-centric development, I deliver software that is both reliable and impactful.
                </p>
              </div>
            </div>
            <div
              class="relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
              <img src="/images/project.png" alt="Background"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-300 lg:scale-100 lg:group-hover:scale-105 scale-105 lg:opacity-100 lg:group-hover:opacity-30 opacity-30">
              <h5
                class="relative font-semibold lg:opacity-0 lg:group-hover:opacity-100 opacity-100 transition-opacity duration-300 text-black dark:text-white z-10 flex items-start justify-between">
                <span class="mr-2">Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="size-9 -rotate-45 group-hover:rotate-0 duration-700 transition-all">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </h5>
            </div>
            <div
              class="md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Articles</h3>
            </div>
            <div
              class="md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full text-center group">
              <div class="w-full max-w-screen-lg mx-auto">
                <h5 class="font-semibold mb-5">Stack I use</h5>
                <IconCarousel />
              </div>
            </div>
          </div>
        </div>
        <!-- right section -->
        <div
          class="lg:col-span-1 lg:row-span-3 md:col-span-4 md:row-span-1 col-span-1 row-span-1 flex items-center justify-center h-full">
          <div
            class="grid lg:grid-cols-1 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-1 gap-3 h-full w-full">
            <div
              class="lg:col-span-1 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center text-center justify-center h-full">
              <div>
                <h5 class="font-semibold">Media</h5>
                <div class="flex items-center justify-center gap-5 mt-5">
                  <a href="#" target="_blank"
                    class="p-2 rounded-2xl bg-gray-200 hover:filter hover:invert hover:brightness-200 transition-all duration-500 ease-in-out">
                    <img class="h-12 w-12" src="/images/contact/linkedin-black.svg" alt="LinkedIn" title="LinkedIn">
                  </a>
                  <a href="#" target="_blank"
                    class="p-2 rounded-2xl bg-gray-200 hover:filter hover:invert hover:brightness-200 transition-all duration-500 ease-in-out">
                    <img class="h-12 w-12" src="/images/contact/github-black.svg" alt="GitHub" title="GitHub">
                  </a>
                  <a href="#" target="_blank"
                    class="p-2 rounded-2xl bg-gray-200 hover:filter hover:invert hover:brightness-200 transition-all duration-500 ease-in-out">
                    <img class="h-12 w-12" src="/images/contact/medium-black.svg" alt="Medium" title="Medium">
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Resources (Template)</h3>
            </div>
            <div
              class="col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full group">
              <div class="flex flex-col items-center justify-center text-center">
                <h5 class="font-semibold mb-5">Project in mind?</h5>
                <button
                  class="flex items-center gap-2 px-4 py-3 bg-darkness text-white rounded-2xl group-hover:bg-gray-500 transition-colors duration-300"
                  onclick="window.location.href='mailto:chandra.y.adhitama@gmail.com'">
                  <span class="font-medium">Let's Talk</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 -rotate-45 group-hover:rotate-0 duration-700 transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>


<script>
import DarkModeSwitch from '~/components/homepageSection/DarkModeSwitch.vue';
import IconCarousel from '~/components/homepageSection/IconCarousel.vue';

export default {
  components: {
    DarkModeSwitch,
    IconCarousel,
  },
};
</script>


<style scoped>
.text-container {
  cursor: pointer;
}

.text {
  position: relative;
  display: inline-block;
}

.text .cy {
  display: inline-block;
  transition: transform 0.35s ease-in-out;
}

.text .adhitama {
  position: absolute;
  top: 0;
  left: 1.1rem;
  opacity: 0;
  transition: opacity 0.25s ease-in-out 0.25s;
}

.text-container:hover .cy {
  transform: translateX(6rem);
}

.text-container:hover .adhitama {
  opacity: 1;
}

.text-container:not(:hover) .adhitama {
  opacity: 0;
  transition: opacity 0.25s ease-out;
}
</style>