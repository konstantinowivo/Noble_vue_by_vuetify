

<template>
  <v-container fluid class="hero-section" fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
          <h1 class="hero-title text-h1">{{ title }}</h1>
          <p class="hero-subtitle text-h4">{{ subtitle }}</p>
          <v-btn default outlined class="custom-button" @click="ctaAction">{{ ctaText }}</v-btn>
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
      default: 'Contactanos'
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
  font-family: "Bebas Neue", cursive;
  font-weight: bolder;
  font-style: italic;
  color: yellow;
}

.hero-subtitle {
  font-family: "Bebas Neue", cursive;
  font-weight: bolder;
  font-style: italic;
  color: white;
}

.custom-button {
  transition: background-color 0.3s, color 0.3s; /* Añade una transición suave */
}

.custom-button:hover {
  background-color: #ff5722; /* Cambia el color de fondo al pasar el cursor */
  color: #ffffff; /* Cambia el color del texto al pasar el cursor */
}

</style>
