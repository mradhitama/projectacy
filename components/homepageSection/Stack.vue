<template>
    <div class="w-full max-w-screen-lg mx-auto">
        <h5 class="font-semibold mb-5">Stack I use</h5>
        <div
            class="logos flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none opacity-100 overflow-hidden [mask-image:linear-gradient(to_right,_rgba(0,0,0,0)_0%,_rgb(0,0,0)_25%,_rgb(0,0,0)_75%,_rgba(0,0,0,0)_100%)]">
            <div v-for="(logo, index) in logos" :key="index"
                class="logos-slide flex animate-carousel group-hover:paused">
                <img v-for="(image, idx) in logo.images" :key="idx"
                    class="h-16 p-3 m-2 bg-gray-200 dark:bg-lightBlack rounded-2xl max-w-none" :src="image.src"
                    :alt="image.alt" :title="image.title" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logos: [
                {
                    images: [
                        { src: '/images/stack/java.svg', alt: 'Spring', title: 'SpringBoot' },
                        { src: '/images/stack/notion.svg', alt: 'Notion', title: 'Notion' },
                        { src: '/images/stack/figma.svg', alt: 'Figma', title: 'Figma' },
                        { src: '/images/stack/vue.svg', alt: 'Vue.js', title: 'Vue.js' },
                        { src: '/images/stack/redis.svg', alt: 'Redis', title: 'Redis' },
                        { src: '/images/stack/docker.svg', alt: 'Docker', title: 'Docker' },
                        { src: '/images/stack/jenkins.svg', alt: 'Jenkins', title: 'Jenkins' },
                        { src: '/images/stack/chatgpt.webp', alt: 'ChatGPT', title: 'ChatGPT' },
                        { src: '/images/stack/rabbitmq.svg', alt: 'RabbitMQ', title: 'RabbitMQ' },
                        { src: '/images/stack/mysql.svg', alt: 'MySQL', title: 'MySQL' },
                        { src: '/images/stack/mongo.svg', alt: 'MongoDB', title: 'MongoDB' },
                        { src: '/images/stack/postman.svg', alt: 'Postman', title: 'Postman' },
                        { src: '/images/stack/jira.svg', alt: 'Jira', title: 'Jira' }
                    ]
                },
                {
                    images: [
                        { src: '/images/stack/java.svg', alt: 'Spring', title: 'SpringBoot' },
                        { src: '/images/stack/notion.svg', alt: 'Notion', title: 'Notion' },
                        { src: '/images/stack/figma.svg', alt: 'Figma', title: 'Figma' },
                        { src: '/images/stack/vue.svg', alt: 'Vue.js', title: 'Vue.js' },
                        { src: '/images/stack/redis.svg', alt: 'Redis', title: 'Redis' },
                        { src: '/images/stack/docker.svg', alt: 'Docker', title: 'Docker' },
                        { src: '/images/stack/jenkins.svg', alt: 'Jenkins', title: 'Jenkins' },
                        { src: '/images/stack/chatgpt.webp', alt: 'ChatGPT', title: 'ChatGPT' },
                        { src: '/images/stack/rabbitmq.svg', alt: 'RabbitMQ', title: 'RabbitMQ' },
                        { src: '/images/stack/mysql.svg', alt: 'MySQL', title: 'MySQL' },
                        { src: '/images/stack/mongo.svg', alt: 'MongoDB', title: 'MongoDB' },
                        { src: '/images/stack/postman.svg', alt: 'Postman', title: 'Postman' },
                        { src: '/images/stack/jira.svg', alt: 'Jira', title: 'Jira' }
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped></style>