<template>
  <v-container class="about-us-section my-10">
    <v-row>
      <v-col class="text-center">
        <h1 :style="titleStyle">{{ title }}</h1>
        <p :style="subtitleStyle">{{ description }}</p>
      </v-col>

      <v-col class="image-column">
        <div :style="aboutUsImg"></div>
        <p :style="descriptionTextStyle" class="description-text">{{ descriptionText }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo_noble from '@/assets/store.jpg'; 
export default {
  name: 'AboutUs',
  props: {
    title: {
      type: String,
      default: 'Sobre Nosotros'
    },
    description: {
      type: String,
      default: 'Tu confianza, nuestra empresa'
    },
    descriptionText: {
      type: String,
      default: 'En Matafuegos Noble, empresa fundada en 2001, nuestra misión es proporcionar servicios de recarga de extintores, gases para consumo y venta de elementos de seguridad industrial de la más alta calidad. Con más de 30 años de experiencia en el rubro, nos comprometemos a garantizar la seguridad y tranquilidad de nuestros clientes, ofreciendo asesoría personalizada y especializada, junto con productos que cumplen con los estándares de regulación, IRAM y Bureau Veritas.'
    }
  },
  computed: {
    titleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        color: 'yellow',
        fontSize: '4rem' 
      };
    },
    subtitleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontStyle: 'italic',
        color: 'white',
        fontSize: '2rem'
      };
    },
    descriptionTextStyle() {
      return {
        fontFamily: '"Alumni Sans Pinstripe", sans-serif',
        fontWeight: '400',
        fontStyle: 'normal',
        color: 'white',
        fontSize: '1.3rem',
        textAlign: 'center',
        maxWidth: '80%', 
        margin: 'auto', 
        padding: '1rem' 
      };
    },
    aboutUsImg() {
      return {
        background: `radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.9)), url(${logo_noble})`,
        height: '50vh',
        marginBottom: '3rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
  },
}
</script>

<style scoped>
.about-us-section {
  padding: 2rem 0;
}

.text-center {
  text-align: center;
}

@media (max-width: 960px) {
  .about-us-section {
    padding: 1rem 0; 
  }

  .image-column {
    height: auto; 
  }

  .description-text {
    margin-top: 1rem;
    font-size: 1.5rem; 
    color: white; 
    text-align: center; 
    max-width: 90%; 
  }
}
</style>
