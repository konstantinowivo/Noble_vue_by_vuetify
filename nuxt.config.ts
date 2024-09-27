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
    googleMapKey: process.env.NUXT_GOOGLE_MAP_KEY,
    firebaseKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_BUCKET_STORAGE,
    firebaseMessagingSenderId: process.env.FIREBASE_SENDER_MESSAGIN_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID
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
