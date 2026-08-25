<template>
  <section class="page flex justify-center items-center h-screen mx-auto p-3 lg:p-4 select-none">
    <div
      class="lg:bg-white/10 dark:bg-black/20 lg:backdrop-blur-xl shadow-2xl lg:rounded-3xl p-3 gap-3 lg:w-screen lg:h-screen lg:max-h-screen flex items-center justify-center border border-white/5 dark:border-white/5">
      <div
        class="grid lg:grid-cols-5 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-4 grid-cols-1 gap-3 h-full w-full">
        <!-- left section -->
        <div class="md:col-span-4 md:row-span-3 col-span-1 flex items-center justify-center h-full w-full">
          <div class="grid md:grid-cols-4 md:grid-rows-3 grid-cols-1 gap-3 h-full w-full">
            <div id="identity"
              class="box order-2 lg:order-1 md:col-span-2 md:row-span-1 col-span-1 p-8 bg-white/70 hover:bg-white/95 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center h-full group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <Identity />
            </div>
            <NuxtLink to="works"
              class="box order-4 lg:order-2 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <Works />
            </NuxtLink>
            <div
              class="box order-7 lg:order-3 md:col-span-1 md:row-span-1 col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <Other />
            </div>

            <div
              class="box order-1 lg:order-4 md:col-span-1 md:row-span-2 col-span-1 p-8 bg-gradient-to-br from-greenOcean to-deepGreenOcean dark:from-greenOcean/80 dark:to-deepGreenOcean/90 border border-greenOcean/10 dark:border-greenOcean/5 rounded-2xl shadow flex items-center justify-center h-full overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-greenOcean/10 transition-all duration-300">
              <Logo class="animate-float" />
            </div>
            <NuxtLink to="about"
              class="box order-3 lg:order-5 cursor-pointer md:col-span-2 md:row-span-1 col-span-1 p-8 bg-white/70 hover:bg-white/95 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <About />
            </NuxtLink>
            <NuxtLink to="projects"
              class="box order-5 lg:order-6 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full group overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <Projects />
            </NuxtLink>
            <div
              class="box order-8 lg:order-7 md:col-span-1 md:row-span-1 col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <Switch />
            </div>
            <div
              class="box order-6 lg:order-8 md:col-span-2 md:row-span-1 col-span-1 p-8 bg-white/70 dark:bg-darkOcean/60 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full text-center group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 overflow-hidden">
              <Stack />
            </div>
          </div>
        </div>

        <!-- right section -->
        <div
          class="lg:col-span-1 lg:row-span-3 md:col-span-4 col-span-1 flex items-center justify-center h-full w-full">
          <div
            class="grid lg:grid-cols-1 lg:grid-rows-3 md:grid-cols-4 grid-cols-1 gap-3 h-full w-full">
            <div
              class="box lg:col-span-1 md:col-span-2 col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center text-center justify-center h-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <Media />
            </div>
            <NuxtLink to="#"
              class="box cursor-pointer col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <Resources />
            </NuxtLink>
            <div
              class="box col-span-1 p-8 bg-white/70 hover:bg-white/90 dark:bg-darkOcean/60 dark:hover:bg-darkOcean/80 border border-black/[0.03] dark:border-white/[0.03] backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center h-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import About from '~/components/homepageSection/About.vue';
import Contact from '~/components/homepageSection/Contact.vue';
import Identity from '~/components/homepageSection/Identity.vue';
import Logo from '~/components/homepageSection/Logo.vue';
import Media from '~/components/homepageSection/Media.vue';
import Other from '~/components/homepageSection/Other.vue';
import Projects from '~/components/homepageSection/Projects.vue';
import Resources from '~/components/homepageSection/Resources.vue';
import Switch from '~/components/homepageSection/Switch.vue';
import Stack from '~/components/homepageSection/Stack.vue';
import Works from '~/components/homepageSection/Works.vue';

onMounted(() => {
  if (process.client) {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box, index) => {
      box.style.animationDelay = `${index * 60 + 100}ms`
    })
  }
})
</script>

<style scoped>
</style>
