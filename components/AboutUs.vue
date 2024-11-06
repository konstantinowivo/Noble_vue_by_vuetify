<template>
  <v-container class="about-us-section my-10">
    <v-row no-gutters class="text-center">
      <v-col cols="12">
        <h1 :style="titleStyle" class="fade-in">{{ title }}</h1>
        <h2 :style="subtitleStyle" class="slide-in">{{ description }}</h2>
        <div :style="aboutUsImg" class="parallax-bg"></div>
        <p :style="descriptionTextStyle" class="description-text fade-in-delay">{{ descriptionText }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import frente_noble from '@/assets/frente_noble2.jpg'; 
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
        fontSize: '3.9rem',
      };
    },
    subtitleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontStyle: 'italic',
        color: 'white',
        fontSize: '2rem',
        marginBottom: '3rem',
      };
    },
    descriptionTextStyle() {
      return {
        fontFamily: '"Alumni Sans Pinstripe", sans-serif',
        fontWeight: '400',
        color: 'white',
        fontSize: '1.3rem',
        textAlign: 'center',
        maxWidth: '80%',
        margin: 'auto',
        padding: '1rem',
      };
    },
    aboutUsImg() {
      return {
        background: `radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.7)), url(${frente_noble})`,
        height: '100vh',  
        width: '80%',      
        margin: '0 auto',  
        marginBottom: '3rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        transition: 'transform 0.3s ease-out',
        borderRadius: '10px' 
      };
    }
  }
};
</script>

<style scoped>
.about-us-section {
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
}


.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.fade-in-delay {
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}


.slide-in {
  opacity: 0;
  transform: translateY(20px);
  animation: slideIn 1s forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.parallax-bg {
  will-change: transform;
}

@media (max-width: 960px) {
  .description-text {
    font-size: 1.5rem;
    max-width: 90%;
  }


  .parallax-bg {
    height: 80vh;  
  }
}
</style>
