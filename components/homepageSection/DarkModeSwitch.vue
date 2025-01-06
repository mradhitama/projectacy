<template>
    <label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" :checked="isDarkMode" @change="toggleDarkMode" />
    <div class="w-20 h-12 bg-gray-500 rounded-full border-8 border-gray-500 peer-checked:bg-yellow-500 peer-checked:border-gray-500 transition-all">
    </div>
    <div class="w-8 h-8 bg-yellow-500 rounded-full absolute left-10 peer-checked:left-6 peer-checked:bg-gray-500 peer-checked:w-14 peer-checked:h-10 transition-all flex items-center justify-center">
    </div>
</label>

</template>

<script>
export default {
    data() {
        return {
            isDarkMode: true,
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