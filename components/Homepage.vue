<template>
  <section class="page flex justify-center items-center min-h-screen bg-opacity-50 mx-auto">
    <div
      class="lg:bg-gray-100 dark:bg-darkness lg:bg-opacity-80 lg:backdrop-blur-lg shadow-lg lg:rounded-2xl p-3 gap-3 lg:w-screen lg:h-screen">
      <div
        class="grid lg:grid-cols-5 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-4 grid-cols-1 grid-rows-none gap-3 h-full">
        <!-- left section -->
        <div class="md:col-span-4 md:row-span-3 sm:col-span-1 sm:row-span-none flex items-center justify-center h-full">
          <div class="grid md:grid-cols-4 md:grid-rows-3 grid-cols-1 grid-rows-none gap-3 h-full w-full">
            <div id="identity"
              class="box md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center h-full cursor-pointer">
              <Identity />
            </div>
            <div
              class="box cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
              <Works />
            </div>
            <div
              class="box cursor-pointer md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full">
              <Other />
            </div>
            
            <div
              class="box md:col-span-1 md:row-span-2 col-span-1 row-span-1 p-8 bg-greenOcean dark:bg-deepGreenOcean rounded-2xl shadow flex items-center justify-center h-full">
              <Logo />
            </div>
            <div
              class="box cursor-pointer md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full group">
              <About />
            </div>
            <div
              class="box cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
              <Projects />
            </div>
            <div
              class="box md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full">
              <Switch />
            </div>
            <div
              class="box md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full text-center group">
              <Stack />
            </div>
          </div>
        </div>
        
        <!-- right section -->
        <div
          class="lg:col-span-1 lg:row-span-3 md:col-span-4 md:row-span-1 col-span-1 row-span-1 flex items-center justify-center h-full">
          <div
            class="grid lg:grid-cols-1 lg:grid-rows-3 md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-1 gap-3 h-full w-full">
            <div
              class="box lg:col-span-1 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center text-center justify-center h-full">
              <Media/>
            </div>
            <div
              class="box cursor-pointer col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full group">
              <Resources/>
            </div>
            <div
              class="box col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full">
              <Contact/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import About from '~/components/homepageSection/About.vue';
import Services from '~/components/homepageSection/Services.vue';
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

export default {
  components: {
    About,
    Services,
    Contact,
    Identity,
    Logo,
    Media,
    Other,
    Projects,
    Resources,
    Stack,
    Switch,
    Works,
  },
  mounted() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      const delay = Math.random() * 2 + 1;
      box.style.animationDelay = `${delay}s`;
    });
  }
};
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.box {
  opacity: 0;
  animation: fadeInUp 0.5s ease-in forwards;
}
</style>
