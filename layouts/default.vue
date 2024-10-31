<template>
    <v-app>
      <Toolbar />
      <v-main>
        <NuxtPage />
      </v-main>
      <Footer />
    </v-app>
</template>
  
<script>
import Toolbar from '~/components/Toolbar.vue';
import Footer from '~/components/Footer.vue';

export default {
components: {
    Toolbar,
    Footer,
}
}

</script>