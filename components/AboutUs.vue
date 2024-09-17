<template>
  <v-container class="about-us-section my-10">
    <v-row align="center">
      <v-col :style="aboutUsImg" fluid fill-height cols="12" md="6">
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="font-weight-bold mb-4">{{ title }}</h2>
        <p>{{ description }}</p>
        <v-btn color="primary" @click="learnMore">{{ learnMoreText }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo_noble from '@/assets/logo.png'; // Importa la imagen

export default {
  name: 'AboutUs',
  props: {
    title: {
      type: String,
      default: 'Sobre Nosotros'
    },
    description: {
      type: String,
      default: 'Somos una empresa dedicada a brindar soluciones personalizadas para cada cliente, con años de experiencia en el mercado.'
    },
    learnMoreText: {
      type: String,
      default: 'Aprende más'
    }
  },
  computed: {
    aboutUsImg() {
      return {
        background: `radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.9) 100%), url(${logo_noble})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: '5px solid rgba(0, 0, 0, 0.9)'
      };
    },
  },
  methods: {
    learnMore() {
      this.$router.push('/contacto');
    }
  }
};
</script>

<style scoped>
.about-us-section {
  padding: 2rem 0;
}
</style>