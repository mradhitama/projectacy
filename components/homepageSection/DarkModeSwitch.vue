<template>
    <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" :checked="isDarkMode" @change="toggleDarkMode" />
    <div class="w-20 h-10 bg-greenOcean rounded-full border-8 border-greenOcean peer-checked:bg-gray-500 peer-checked:border-white transition-all">
    </div>
    <div class="w-6 h-6 bg-yellow-500 rounded-full absolute left-12 peer-checked:left-5 peer-checked:bg-white peer-checked:w-14 peer-checked:h-8 transition-all flex items-center justify-center">
    </div>
</label>

</template>

<script>
export default {
    data() {
        return {
            isDarkMode: false,
        };
    },
    mounted() {
        this.isDarkMode = localStorage.getItem("theme") === "dark";
        if (this.isDarkMode) {
            document.documentElement.classList.add("dark");
        }
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            if (this.isDarkMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        },
    },
};
</script>

<style scoped></style>