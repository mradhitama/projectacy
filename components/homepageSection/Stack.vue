<template>
    <div class="w-full max-w-screen-lg mx-auto flex flex-col justify-center">
        <h6 class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4 text-left select-none">Stack I use</h6>
        <div
            class="logos flex w-full place-items-center m-0 p-0 overflow-hidden relative [mask-image:linear-gradient(to_right,_rgba(0,0,0,0)_0%,_rgb(0,0,0)_12%,_rgb(0,0,0)_88%,_rgba(0,0,0,0)_100%)]">
            <div v-for="(logo, index) in logos" :key="index"
                class="logos-slide flex items-center animate-carousel">
                <NuxtImg v-for="(image, idx) in logo.images" :key="idx"
                    class="h-14 w-auto p-2.5 m-1.5 bg-gray-100/80 hover:bg-gray-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-black/5 dark:border-white/5 rounded-xl max-w-none transition-all duration-300 hover:scale-105"
                    :src="image.src"
                    :alt="image.alt"
                    :title="image.title"
                    format="webp"
                    sizes="80px"
                    loading="lazy"
                />
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

<style scoped>
.logos:hover .logos-slide {
    animation-play-state: paused;
}
</style>