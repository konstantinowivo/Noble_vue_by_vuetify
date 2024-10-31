<template>
    <v-app>
      <v-main>
        <Toolbar />
        <NuxtPage />
        <Footer />
      </v-main>
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