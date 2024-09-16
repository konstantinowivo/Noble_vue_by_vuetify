<template>
  <v-container :style="heroStyle" fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center" :style="contentStyle">
        <h1 class="text-h1" :style="titleStyle">{{ title }}</h1>
        <p class="text-h4" :style="subtitleStyle">{{ subtitle }}</p>
        <v-btn outlined :style="buttonStyle" @mouseover="hoverButton" @mouseleave="resetButton" @click="ctaAction">
          {{ ctaText }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import portadaImage from '@/assets/portada.index.jpg';

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
  data() {
    return {
      buttonStyle: {
        transition: 'background-color 0.3s, color 0.3s',
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'black' // También ajusta el color del borde
      }
    };
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url(${portadaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      };
    },
    contentStyle() {
      return {
        padding: '20px',
        borderRadius: '10px'
      };
    },
    titleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        color: 'yellow'
      };
    },
    subtitleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        color: 'white'
      };
    }
  },
  methods: {
    ctaAction() {
      this.$router.push('/contacto');
    },
    hoverButton() {
      this.buttonStyle = {
        ...this.buttonStyle,
        backgroundColor: '#ff5722',
        color: '#ffffff',
        borderColor: '#ff5722'
      };
    },
    resetButton() {
      this.buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'black'
      };
    }
  }
};
</script>
