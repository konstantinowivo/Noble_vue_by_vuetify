<template>
  <v-container class="about-us-section my-10">
      <!-- Columna de texto, centrada y apilada -->
      <v-col class="text-center">
        <h1 :style="titleStyle">{{ title }}</h1>
        <p :style="subtitleStyle">{{ description }}</p>
      </v-col>

      <!-- Columna de imagen, con fondo y estilos -->
      <v-col class="image-column" cols="12">
        <div :style="aboutUsImg"></div>
        <p class="description-text">{{ descriptionText }}</p>
      </v-col>
  </v-container>
</template>

<script>
import logo_noble from '@/assets/store.jpg'; // Importa la imagen

export default {
  name: 'AboutUs',
  props: {
    title: {
      type: String,
      default: 'Sobre Nosotros'
    },
    description: {
      type: String,
      default: 'Somos una empresa...'
    },
    descriptionText: {
      type: String,
      default: 'Fundada en 2001, nuestra misión...'
    }
  },
  computed: {
    titleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        color: 'yellow',
        fontSize: '4rem' // Tamaño del título aumentado
      };
    },
    subtitleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontStyle: 'italic',
        color: 'white',
        fontSize: '2rem' // Tamaño de la descripción aumentado
      };
    },
    aboutUsImg() {
      return {
        background: `radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.9)), url(${logo_noble})`,
        height: '50vh', // Cambia la altura a 50vh o ajusta según sea necesario
        marginBottom: '1rem' // Espaciado entre la imagen y el texto
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

/* Estilos para pantallas medianas o más pequeñas */
@media (max-width: 960px) {
  .about-us-section {
    padding: 1rem 0; /* Reduce el padding para pantallas más pequeñas */
  }

  .image-column {
    height: auto; /* Permite que la columna de imagen ajuste su altura automáticamente */
  }

  .description-text {
    margin-top: 1rem;
    font-size: 1.5rem; /* Ajusta el tamaño según lo necesites */
    color: white; /* O el color que prefieras */
    text-align: center; /* Asegúrate de que el texto esté centrado */
  }
}
</style>
