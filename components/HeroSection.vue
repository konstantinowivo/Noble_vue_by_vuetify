<template>
  <v-container fluid fill-height class="hero-container">
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        md="8"
        class="text-center"
        :style="contentStyle"
      >
        <v-btn
          text
          to="/contacto"
          rounded="xl"
          size="x-large"
          :style="buttonStyle"
        >
          <span>{{ ctaText }}</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import portadaImage from '@/assets/HeaderNoble.png';

export default {
  name: 'HeroSection',
  props: {
    ctaText: {
      type: String,
      default: 'Contactanos'
    }
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url(${portadaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      };
    },
    contentStyle() {
      return {
        padding: '20px',
        borderRadius: '10px',
        position: 'relative',
        transform: 'translateY(50%)'
      };
    },
    buttonStyle() {
      return {
        marginTop: '70px',
        fontSize: '1.5rem', 
      };
    }
  }
};
</script>

<style scoped>
.hero-container {
  background-repeat: no-repeat;
}


@media (max-width: 768px) {
  .hero-container {
    height: 70vh; 
  }

  .hero-container .v-btn {
    font-size: 1.2rem; 
    margin-top: 30px; 
  }

  .hero-container .v-col {
    padding: 10px; 
  }
}

@media (max-width: 480px) {
  .hero-container {
    height: 60vh; 
  }

  .hero-container .v-btn {
    font-size: 1rem; 
  }
}
</style>
