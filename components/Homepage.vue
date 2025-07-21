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
              class="box order-2 lg:order-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center h-full">
              <Identity />
            </div>
            <NuxtLink to="https://drive.google.com/file/d/1Yo17cSwMsdO1tbFpbQk5HRtFcroE9Jjc/view?usp=drive_link" target="_blank"
              class="box order-4 lg:order-2 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
              <Works />
            </NuxtLink>
            <div
              class="box order-7 lg:order-3 md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full">
              <Other />
            </div>

            <div
              class="box order-1 lg:order-4 md:col-span-1 md:row-span-2 col-span-1 row-span-1 p-8 bg-greenOcean dark:bg-deepGreenOcean rounded-2xl shadow flex items-center justify-center h-full">
              <Logo />
            </div>
            <NuxtLink to="about"
              class="box order-3 lg:order-5 cursor-pointer md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full group">
              <About />
            </NuxtLink>
            <NuxtLink to="projects"
              class="box order-5 lg:order-6 cursor-pointer relative md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full group overflow-hidden">
              <Projects />
            </NuxtLink>
            <div
              class="box order-8 lg:order-7 md:col-span-1 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full">
              <Switch />
            </div>
            <div
              class="box order-6 lg:order-8 md:col-span-2 md:row-span-1 col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full text-center group">
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
              <Media />
            </div>
            <NuxtLink to="#"
              class="box cursor-pointer col-span-1 row-span-1 p-8 bg-white hover:bg-gray-200 dark:bg-darkOcean dark:hover:bg-deepOcean rounded-2xl shadow flex items-center justify-center h-full group">
              <Resources />
            </NuxtLink>
            <div
              class="box col-span-1 row-span-1 p-8 bg-white dark:bg-darkOcean rounded-2xl shadow flex items-center justify-center h-full">
              <Contact />
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
      const delay = 0.1 + Math.random() * 0.4;
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
