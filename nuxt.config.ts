// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '@/assets/css/global.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxt/image'],
  image: {
    domains: ['drive.google.com'],
  },
  sitemap: {
    exclude: [
      '/template',
    ]
  },
  app: {
    head: {
      title: "The ProjectAcy | Discover Limitless Creativity",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Welcome to The ProjectAcy. Dive into a world of exploration, creativity, and limitless possibilities. Stay tuned for something extraordinary!",
        },
        {
          name: "keywords",
          content:
            "Acy, The ProjectAcy, creativity, innovation, exploration, adaptable, projects, coming soon",
        },
        { name: "author", content: "Acy" },

        { property: "og:title", content: "The ProjectAcy | Discover Limitless Creativity" },
        {
          property: "og:description",
          content:
            "Explore The ProjectAcy - a space for creative minds and limitless innovation. Get ready for a transformative experience.",
        },
        { property: "og:image", content: "/coming-soon.webp" },
        { property: "og:url", content: "https://theprojectacy.com" },
        { property: "og:type", content: "website" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "The ProjectAcy | Discover Limitless Creativity" },
        {
          name: "twitter:description",
          content:
            "Unveiling The ProjectAcy: a creative platform where innovation and adaptability meet. Coming soon!",
        },
        { name: "twitter:image", content: "/coming-soon.webp" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' }
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: {enabled: process.env.NODE_ENV === "development" }
})
