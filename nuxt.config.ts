// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  imports: {
    dirs: ['store']
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/styles/variables.css'
  ],

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    }
  },

  build: {
    transpile: ['vuetify'] 
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
        }
      ]
    }
  }
});
