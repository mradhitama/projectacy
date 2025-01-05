<template>
  <section class="flex justify-center items-center min-h-screen bg-opacity-50 mx-auto">

    <div
      class="lg:bg-gray-100 dark:bg-darkness lg:bg-opacity-80 lg:backdrop-blur-lg shadow-lg lg:rounded-lg p-3 gap-3 lg:w-screen lg:h-screen">

      <div
        class="grid lg:grid-cols-5 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-4 grid-cols-1 grid-rows-none gap-3 h-full">
        <!-- left section -->
        <div class="md:col-span-4 md:row-span-3 sm:col-span-1 sm:row-span-none flex items-center justify-center h-full">
          <div class="grid md:grid-cols-4 md:grid-rows-3 grid-cols-1 grid-rows-none gap-3 h-full w-full">
            <div
              class="md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full text-container">
              <div>
                <h3 class="text-darkOcean dark:text-white font-bold group">
                  Hi, I'm
                  <span class="text">
                    <span class="a text-greenOcean">A</span><span class="cy text-greenOcean">CY</span>
                    <span class="adhitama">dhitama</span>
                  </span>
                </h3>
                <p class="mt-4 text-gray-500">
                  Software Engineer, Currenly working at AWDA based in Jakarta
                </p>
              </div>
            </div>
            <div
              class="md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Work</h3>
            </div>
            <div
              class="md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <div class="text-center">
                  <DarkModeSwitch />
                </div>
            </div>
            <div
              class="md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-greenOcean dark:bg-deepGreenOcean rounded-lg shadow flex items-center justify-center h-full">
              <img src="/logo.svg" alt="Logo" class="h-32 w-auto" />
            </div>
            <div
              class="md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">About The ProjectACY</h3>
            </div>
            <div
              class="md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Projects</h3>
            </div>
            <div
              class="md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Articles</h3>
            </div>
            <div
              class="md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Stack I use</h3>
            </div>
          </div>
        </div>
        <!-- right section -->
        <div
          class="lg:col-span-1 lg:row-span-3 md:col-span-4 md:row-span-1 col-span-1 row-span-1 flex items-center justify-center h-full">
          <div
            class="grid lg:grid-cols-1 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-1 gap-3 h-full w-full">
            <div
              class="lg:col-span-1 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Let’s amaze the world!</h3>
            </div>
            <div
              class="col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Resources (Template)</h3>
            </div>
            <div
              class="col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-lg shadow flex items-center justify-center h-full">
              <h3 class="text-base font-semibold">Social Media</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>


<script>
import DarkModeSwitch from '~/components/homepageSection/DarkModeSwitch.vue';

export default {
  components: {
    DarkModeSwitch,
  },
};
</script>


<style scoped>
.text-container {
  font-weight: bold;
  cursor: pointer;
}

.text {
  position: relative;
  display: inline-block;
}

.text .cy {
  display: inline-block;
  transition: transform 0.6s ease-in-out;
}

.text .adhitama {
  position: absolute;
  top: 0;
  left: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease-in-out 0.4s;
}

.text-container:hover .cy {
  transform: translateX(8.5rem);
}

.text-container:hover .adhitama {
  opacity: 1;
}

.text-container:not(:hover) .adhitama {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}
</style>