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

  build:{
    transpile: ['vuetify']
  },
  
})