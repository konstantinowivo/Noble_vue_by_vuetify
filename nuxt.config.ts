// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },


  imports:{
    dirs:['store']
  },

  css:[
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ],

  modules: ['@pinia/nuxt'],

  plugins: [
    '~/plugins/googleMaps.client.js',
  ],

  runtimeConfig:{
    MONGO_URI: process.env.MONGO_URI,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  },

  build:{
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
  
})