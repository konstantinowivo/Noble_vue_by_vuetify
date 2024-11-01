<template>
  <v-container :style="heroStyle" fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center" :style="contentStyle">

        <v-img
          v-if="loading"
          :style="bannerLogoStyle"
        ></v-img>

        <div v-else>
          <h1 class="hero-title">MATAFUEGOS NOBLE</h1>
          <h2 class="hero-subtitle">ofrecemos soluciones de calidad para tu empresa</h2>
          
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
import logoBgRemoved from '@/assets/logo.bg.removed.png'; 

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
      this.loading = false; 
    });
  }
};
</script>

<style scoped>

.font-loading .hero-title, .font-loading .hero-subtitle {
  visibility: hidden;
}


.hero-title {
  font-size: 7rem; 
  font-style: italic;
  font-weight: bold;
  font-family: 'Bebas Neue', cursive;
  color: yellow;
  margin: 0;
}

.hero-subtitle {
  font-size: 2.3rem;
  font-family: 'Bebas Neue', cursive;
  font-weight: 300;
  margin-top: 2px;
  margin-bottom: 20px;
}

.v-btn span {
  font-size: 1.25rem;
}


@media (max-width: 960px) { 
  .hero-title {
    font-size: 4.5rem; 
  }
  
  .hero-subtitle {
    font-size: 1.61rem; 
  }
}

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
