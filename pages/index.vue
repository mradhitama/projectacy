<template>
    <div>
        <LoadingScreen v-if="isLoading" />
        <section v-show="!isLoading">
            <div class="content">
                <h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>
                <p class="mt-2">Explore my projects and experiences.</p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LoadingScreen from "@/components/homepageSection/GreetingsScreen.vue";

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
});
</script>