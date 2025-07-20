<template>
    <div class="w-full max-w-screen-lg mx-auto">
        <h5 class="font-semibold mb-5">Stack I use</h5>
        <div
            class="logos flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none opacity-100 overflow-hidden [mask-image:linear-gradient(to_right,_rgba(0,0,0,0)_0%,_rgb(0,0,0)_25%,_rgb(0,0,0)_75%,_rgba(0,0,0,0)_100%)]">
            <div v-for="(logo, index) in logos" :key="index"
                class="logos-slide flex animate-carousel group-hover:paused">
                <template v-if="loading">
                    <!-- Skeleton Loading -->
                    <div v-for="n in 5" :key="`skeleton-${n}`"
                        class="h-16 w-24 p-3 m-2 bg-gray-200 dark:bg-lightBlack rounded-2xl flex items-center justify-center">
                        <div class="h-10 w-20 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>
                </template>

                <template v-else>
                    <!-- Actual Content -->
                    <NuxtImg v-for="(image, idx) in logo.images" :key="idx"
                        class="h-16 p-3 m-2 bg-gray-200 dark:bg-lightBlack rounded-2xl max-w-none" :src="image.src"
                        :alt="image.alt" :title="image.title" format="webp" sizes="100px" loading="lazy" />
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
const logos = [
    {
        images: [
            { src: 'https://drive.google.com/uc?export=view&id=1VwuetKF8l9DB5YWtpojb8QVMLrhE5Xkb', alt: 'Spring', title: 'SpringBoot' },
            { src: 'https://drive.google.com/uc?export=view&id=1MuHqLP368ld2CClv1CqRvwjMYDJ2Tq-E', alt: 'Notion', title: 'Notion' },
            { src: 'https://drive.google.com/uc?export=view&id=1furg1slyhPnkZjo15GKbu9d2pXKc5bGg', alt: 'Figma', title: 'Figma' },
            { src: 'https://drive.google.com/uc?export=view&id=1YdHsc0yzNqP2zsNkH3IPtjxvOpdfE1y4', alt: 'Vue.js', title: 'Vue.js' },
            { src: 'https://drive.google.com/uc?export=view&id=1ZGUiEOB3rltozwaxmTIP1Qf9s04h3uII', alt: 'Redis', title: 'Redis' },
            { src: 'https://drive.google.com/uc?export=view&id=162vjscRqPLtCxUsjEBlhd56oIdAyMdcm', alt: 'Docker', title: 'Docker' },
            { src: 'https://drive.google.com/uc?export=view&id=1MG9xTVF1mkokEqPLowXcaBdl0_wPw5X-', alt: 'Jenkins', title: 'Jenkins' },
            { src: 'https://drive.google.com/uc?export=view&id=1Mg5zTS-XGDihqLkJueItfWZx3QIS_NP4', alt: 'ChatGPT', title: 'ChatGPT' },
            { src: 'https://drive.google.com/uc?export=view&id=1o_OCjTA_fSA13NHDD0nZlWeiwX4BYBzE', alt: 'RabbitMQ', title: 'RabbitMQ' },
            { src: 'https://drive.google.com/uc?export=view&id=1fTb4Ac4V_EiG_fLas_P9_1if-8YYNF_h', alt: 'MySQL', title: 'MySQL' },
            { src: 'https://drive.google.com/uc?export=view&id=15DtrGdd2Je_s0Tdt0mVj-2P2I729nARW', alt: 'MongoDB', title: 'MongoDB' },
            { src: 'https://drive.google.com/uc?export=view&id=1IGAJV-gQ6R9coo2p28Ik7IjkTmgGVWg-', alt: 'Postman', title: 'Postman' },
            { src: 'https://drive.google.com/uc?export=view&id=1wfK0vvfqyGYqJwwDbJuLqJBoLOVe4qSS', alt: 'Git', title: 'Git' }
        ]
    },
    {
        images: [
            { src: 'https://drive.google.com/uc?export=view&id=1VwuetKF8l9DB5YWtpojb8QVMLrhE5Xkb', alt: 'Spring', title: 'SpringBoot' },
            { src: 'https://drive.google.com/uc?export=view&id=1MuHqLP368ld2CClv1CqRvwjMYDJ2Tq-E', alt: 'Notion', title: 'Notion' },
            { src: 'https://drive.google.com/uc?export=view&id=1furg1slyhPnkZjo15GKbu9d2pXKc5bGg', alt: 'Figma', title: 'Figma' },
            { src: 'https://drive.google.com/uc?export=view&id=1YdHsc0yzNqP2zsNkH3IPtjxvOpdfE1y4', alt: 'Vue.js', title: 'Vue.js' },
            { src: 'https://drive.google.com/uc?export=view&id=1ZGUiEOB3rltozwaxmTIP1Qf9s04h3uII', alt: 'Redis', title: 'Redis' },
            { src: 'https://drive.google.com/uc?export=view&id=162vjscRqPLtCxUsjEBlhd56oIdAyMdcm', alt: 'Docker', title: 'Docker' },
            { src: 'https://drive.google.com/uc?export=view&id=1MG9xTVF1mkokEqPLowXcaBdl0_wPw5X-', alt: 'Jenkins', title: 'Jenkins' },
            { src: 'https://drive.google.com/uc?export=view&id=1Mg5zTS-XGDihqLkJueItfWZx3QIS_NP4', alt: 'ChatGPT', title: 'ChatGPT' },
            { src: 'https://drive.google.com/uc?export=view&id=1o_OCjTA_fSA13NHDD0nZlWeiwX4BYBzE', alt: 'RabbitMQ', title: 'RabbitMQ' },
            { src: 'https://drive.google.com/uc?export=view&id=1fTb4Ac4V_EiG_fLas_P9_1if-8YYNF_h', alt: 'MySQL', title: 'MySQL' },
            { src: 'https://drive.google.com/uc?export=view&id=15DtrGdd2Je_s0Tdt0mVj-2P2I729nARW', alt: 'MongoDB', title: 'MongoDB' },
            { src: 'https://drive.google.com/uc?export=view&id=1IGAJV-gQ6R9coo2p28Ik7IjkTmgGVWg-', alt: 'Postman', title: 'Postman' },
            { src: 'https://drive.google.com/uc?export=view&id=1wfK0vvfqyGYqJwwDbJuLqJBoLOVe4qSS', alt: 'Git', title: 'Git' }
        ]
    }
];
</script>

<style scoped></style>