<template>
  <v-container :style="heroStyle" fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center" :style="contentStyle">
        <!-- Imagen de carga -->
        <v-img
          v-if="loading"
          :style="bannerLogoStyle"
        ></v-img>

        <!-- Título y subtítulo en el centro -->
        <div v-else>
          <h1 class="hero-title">MATAFUEGOS NOBLE</h1>
          <h2 class="hero-subtitle">ofrecemos soluciones de calidad para tu empresa</h2>
          
          <!-- Botón de llamada a la acción -->
          <v-btn text to="/contacto" rounded="xl" size="x-large" :style="buttonStyle">
            <span>{{ ctaText }}</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import portadaImage from '@/assets/BannerPortada.jpg';
import logoBgRemoved from '@/assets/logo.bg.removed.png'; // Asegúrate de que esta ruta sea correcta

export default {
  name: 'HeroSection',  
  data() {
    return {
      loading: true 
    };
  },
  props: {
    ctaText: {
      type: String,
      default: 'Contáctanos'
    }
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url(${portadaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      };
    },
    bannerLogoStyle(){
      return{
        backgroundImage: `url(${logoBgRemoved})`
      }
    },
    contentStyle() {
      return {
        padding: '20px',
        borderRadius: '10px',
        color: 'white',
        textAlign: 'center',
      };
    },
    buttonStyle() {
      return {
        marginTop: '30px',
        color: 'white',
      };
    }
  },
  mounted() {
    document.documentElement.classList.add('font-loading');

    document.fonts.ready.then(() => {
      document.documentElement.classList.remove('font-loading');
      document.documentElement.classList.add('font-loaded');
      this.loading = false; // Cambiamos el estado de carga cuando se cargan los estilos
    });
  }
};
</script>

<style scoped>
/* Solución al FOUT: oculta el contenido hasta que cargue la fuente */
.font-loading .hero-title, .font-loading .hero-subtitle {
  visibility: hidden;
}

/* Estilos del título y subtítulo */
.hero-title {
  font-size: 7rem; /* Tamaño original */
  font-style: italic;
  font-weight: bold;
  font-family: 'Bebas Neue', cursive;
  color: yellow;
  margin: 0;
}

.hero-subtitle {
  font-size: 2.3rem; /* Tamaño original */
  font-family: 'Bebas Neue', cursive;
  font-weight: 300;
  margin-top: 2px;
  margin-bottom: 20px;
}

.v-btn span {
  font-size: 1.25rem;
}

/* Ajustes para tamaños de pantalla mediano o menores */
@media (max-width: 960px) { /* Ajustar el tamaño según sea necesario */
  .hero-title {
    font-size: 4.9rem; /* 70% del tamaño original */
  }
  
  .hero-subtitle {
    font-size: 1.61rem; /* 70% del tamaño original */
  }
}

/* Estilos adicionales del botón de navegación */
.nav-button {
  display: flex;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-weight: bolder;
  font-style: italic;
  color: yellow;
  font-size: 150%;
  text-decoration: none;
  margin-right: 16px;
}
</style>
