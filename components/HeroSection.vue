<template>
  <v-container :style="heroStyle" fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center" :style="contentStyle">
        <v-btn text to="/contacto" rounded="xl" size="x-large" :style="buttonStyle">
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
        position: 'relative',
        '@media (max-width: 768px)': {
          height: '70vh',
        }
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
        marginTop: '70px'
      };
    }
  }
};
</script>

<style scoped>

.hero-container {
  background-repeat: no-repeat;
}
</style>
