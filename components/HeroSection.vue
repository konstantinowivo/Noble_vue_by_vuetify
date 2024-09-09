<template>
  <v-container fluid class="hero-section" fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
          <h1 class="hero-title text-h1">{{ title }}</h1>
          <p class="subtitle-1 text-h4">{{ subtitle }}</p>
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
      default: 'Matafuegos Noble'
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
  background-image: url('../assets/portada.index.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro semitransparente para mayor legibilidad */
  padding: 20px;
  border-radius: 10px;
}

.hero-title {
    color: yellow;
}
</style>
