<template>
  <v-container fluid class="hero-section" fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-1 font-weight-bold text-white">{{ title }}</h1>
        <p class="subtitle-1 text-white">{{ subtitle }}</p>
        <v-btn large color="primary" @click="ctaAction">{{ ctaText }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      default: 'Bienvenido a Nuestra Empresa'
    },
    subtitle: {
      type: String,
      default: 'Ofrecemos soluciones de calidad para tu negocio'
    },
    ctaText: {
      type: String,
      default: 'Conoce más'
    }
  },
  methods: {
    ctaAction() {
      this.$router.push('/contacto');
    }
  }
};
</script>

<style scoped>
.hero-section {
  background-image: url('/path/to/hero-background.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-white {
  color: white;
}
</style>
