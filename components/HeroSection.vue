<template>
  <v-container :style="heroStyle" fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center" :style="contentStyle">
        <v-btn text to="/contacto" flat color="black" @mouseover="hoverButton">
                <span>{{ctaText}}</span>
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
  data() {
    return {
      buttonStyle: {
        transition: 'background-color 0.3s, color 0.3s',
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'black',
      }
    };
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
        position: 'relative'
      };
    },
    // Estilo del botón con la posición
    buttonPositionStyle() {
      return {
        ...this.buttonStyle,
        position: 'absolute',
        top: '400%',  // 50% es el centro, +10% lo desplaza hacia abajo
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px 20px',
        fontSize: '16px',
      };
    },
  },
  methods: {
    hoverButton() {
      this.buttonStyle = {
        backgroundColor: '#ff5722',  // Naranja
        color: '#ffffff',
        borderColor: '#ff5722',
      };
    },
    resetButton() {
      this.buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'black',
      };
    }
  }
};
</script>