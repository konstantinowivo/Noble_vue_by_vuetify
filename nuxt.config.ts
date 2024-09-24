// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  imports: {
    dirs: ['store']
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ],


  modules: ['@pinia/nuxt'],

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    googleMapKey: process.env.NUXT_GOOGLE_MAP_KEY
  },

  build: {
    transpile: ['vuetify'] // Puedes incluir el nombre del plugin aquí si es necesario
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
