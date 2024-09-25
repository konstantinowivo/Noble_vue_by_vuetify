<template>
    <v-app>
      <Header />
      <v-main>
        <NuxtPage />
      </v-main>
      <Footer />
    </v-app>
</template>
  
<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import { NuxtPage } from '#app/components';

export default {
components: {
    Header,
    Footer,
    NuxtPage
}
}
</script>