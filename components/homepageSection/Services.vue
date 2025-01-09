<template>
    <section class="relative w-full py-10">
        <!-- Layanan Section -->
        <div class="relative flex items-center overflow-hidden">
            <div class="w-full max-w-md">
                <div v-for="(service, index) in services" :key="index" v-show="currentIndex === index"
                    class="text-left transition-opacity duration-500">
                    <h5 class="mb-4">{{ service.title }}</h5>
                    <p class="text-gray-500">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    title: "Web Design",
                    description:
                        "We create visually appealing and user-friendly designs that help your brand stand out online, enhancing user experience and engagement across all devices.",
                },
                {
                    title: "Web Development",
                    description:
                        "We build responsive, fast, and secure websites tailored to your business needs, ensuring optimal performance and robust data protection.",
                },

            ],
            currentIndex: 0,
            autoPlayInterval: null,
        };
    },
    methods: {
        nextService() {
            this.currentIndex = (this.currentIndex + 1) % this.services.length;
        },
        prevService() {
            this.currentIndex =
                (this.currentIndex - 1 + this.services.length) % this.services.length;
        },
        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.nextService();
            }, 3000);
        },
        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
        },
    },
    mounted() {
        this.startAutoPlay();
    },
    beforeDestroy() {
        this.stopAutoPlay();
    },
};
</script>

<style>
[v-cloak] {
    display: none;
}
</style>