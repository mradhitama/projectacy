<template>
    <div>
        <LoadingScreen v-if="isLoading" />
        <ComingSoon v-show="!isLoading"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LoadingScreen from "@/components/homepageSection/GreetingsScreen.vue";
import ComingSoon from "~/components/homepageSection/ComingSoon.vue";

const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 3000);
});
</script>