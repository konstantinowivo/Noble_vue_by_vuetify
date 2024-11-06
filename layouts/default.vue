<template>
    <v-app>
      <v-main>
        <Toolbar />
        <WhatsAppButton />
        <NuxtPage />
        <Footer />
      </v-main>
    </v-app>
</template>
  
<script>
import Toolbar from '~/components/Toolbar.vue';
import Footer from '~/components/Footer.vue';
import WhatsAppButton from '~/components/WhatsAppButton.vue';

export default {
components: {
    Toolbar,
    WhatsAppButton,
    Footer,
}
}

</script>