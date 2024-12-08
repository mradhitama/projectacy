// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/global.css'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
