<template>
  <v-container :style="heroStyle" fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center" :style="contentStyle">

        <div  class="hero-content">
          <h1 class="main-title">{{ titleText }}</h1>
          <h2 class="subtitle">{{ subtitleText }}</h2>
          
          <v-btn text to="/contacto" rounded="xl" size="x-large" class="cta-button">
            <span>{{ ctaText }}</span>
            <div class="button-glow"></div>
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
      loading: true,
      titleText: 'MATAFUEGOS NOBLE',
      subtitleText: 'ofrecemos soluciones de calidad para tu empresa'
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

        /* Fade al final del componente */
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
        maskRepeat: 'no-repeat',
        maskSize: '100% 100%',
      };
    },
    bannerLogoStyle(){
      return{
        backgroundImage: `url(${logoBgRemoved})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '300px',
        height: '150px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 5
      }
    },
    contentStyle() {
      return {
        padding: '20px',
        borderRadius: '10px',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10 // fuerza que esté sobre la imagen
      };
    }
  },
  mounted() {
    document.fonts.ready.then(() => {
      this.loading = false; 
    });
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

.hero-content {
  position: relative;
  z-index: 10; /* contenido por encima del fondo */
}

.main-title {
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  font-style: italic;
  background: linear-gradient(45deg, #fbbf24, #fcd34d, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(255, 193, 7, 0.3);
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(32px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.main-title.visible {
  transform: translateY(0);
  opacity: 1;
}

.subtitle {
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-style: italic;
  color: white;
  margin-bottom: 32px;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
  opacity: 0;
  transform: translateY(32px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}
.subtitle.visible {
  transform: translateY(0);
  opacity: 1;
}

/* Botón glow */
.cta-button {
  position: relative;
  border: 1px solid #fbbf24;
  border-radius: 9999px;
  padding: 12px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #fbbf24;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 10;
}
.cta-button:hover {
  background: #fbbf24;
  color: black;
}
.button-glow {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}
.cta-button:hover .button-glow {
  opacity: 1;
}

/* Fade final */
.v-container {
  position: relative;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 960px) { 
  .main-title { font-size: 4.5rem; }
  .subtitle { font-size: 1.61rem; }
}
</style>
