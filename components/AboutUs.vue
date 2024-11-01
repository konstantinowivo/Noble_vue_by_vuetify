<template>
  <v-container class="about-us-section my-10">
    <v-row align="center">
      <!-- Columna de imagen, con altura completa y centrado de contenido -->
      <v-col :style="aboutUsImg" fluid fill-height cols="12" md="6">
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <h1 :style="titleStyle" class="text-center">{{ title }}</h1>
        <p :style="subtitleStyle" class="text-center">{{ description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

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
  },
  computed: {
    titleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        color: 'yellow'
      }
    },
    subtitleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontStyle: 'italic',
        color: 'white'
      };
    },
    aboutUsImg() {
      return {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: '5px solid rgba(0, 0, 0, 0.9)'
      };
    }
  },
  methods: {
    learnMore() {
      this.$router.push('/contacto');
    }
  }
}
</script>

<style scoped>
.about-us-section {
  padding: 2rem 0;
}

.text-center {
  text-align: center;
}
</style>
