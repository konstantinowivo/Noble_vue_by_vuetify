import VueGoogleMaps from '@fawmi/vue-google-maps';

export default defineNuxtPlugin((nuxtApp) => {
nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
        key: process.env.GOOGLE_MAPS_API_KEY, 
        libraries: 'maps,marker', 
    },
});
});