<template>
  <v-container>

    <v-row class="text-center">
      <v-col cols="12">
        <h1 :style="titleStyle">NUESTROS SERVICIOS</h1>
        <p :style="subtitleStyle">deslizá el mouse sobre las imágenes y conocé más</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="service in services" :key="service.id" cols="12" md="3">
        <v-card
          class="mx-auto card-height hover-card"
          color="surface-variant"
          :image="service.image"
          max-width="340"
        >
          <div class="card-content">
            <v-card-title :style="cardTitleStyle">{{ service.title }}</v-card-title>
            <v-card-text :style="descriptionStyle">{{ service.description }}</v-card-text>
            <v-card-actions>
              <v-btn text to="/contacto" rounded="xl" :style="buttonStyle">
                <span>{{ ctaText }}</span>
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import matafuegosImage from '@/assets/portada.extintores.jpg';
import sodaStreamImage from '@/assets/soda.stream.2.png';
import tubosImage from '@/assets/co2_tubos.png';
import elemSeguridad from '@/assets/casco-construccion-seguridad-vista-superior-mascara-medica.jpg';

export default {
  name: 'ServiceList',
  props: {
    ctaText: {
      type: String,
      default: 'Contactanos'
    }
  },
  data() {
    return {
      services: [
        { id: 1, title: 'ELEMENTOS DE SEGURIDAD', description: 'Venta y asesoría en seguridad, cartelería y equipos para habilitaciones comerciales.', image: elemSeguridad },
        { id: 2, title: 'CAPSULAS Y SODASTREAM', description: 'Venta y recarga de envases de SodaStream y cápsulas para sifones. Trabajamos todas las marcas.', image: sodaStreamImage },
        { id: 3, title: 'GASES PARA CONSUMO', description: 'Brindamos asesoria, venta y servicio de post-venta para tus instalaciones de maquinas de cerveza, gaseosa o soda.', image: tubosImage },
        { id: 4, title: 'EXTINTORES', description: 'Venta y recarga anual de extintores. Atención a empresas, comercios y particulares. ', image: matafuegosImage },
      ],
      buttonStyle: {
        backgroundColor: 'black',
        color: 'white',
        borderColor: 'black'
      }
    };
  },
  computed: {
  cardTitleStyle() {
    return {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 'bolder',
      fontStyle: 'italic',
      color: 'yellow',
      fontSize: '1.8rem'
    };
  },
  descriptionStyle() {
    return {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 'bolder',
      fontStyle: 'italic',
      color: 'white',
      fontSize: '1.4rem' 
    };
  },
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
    }
  },
}
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
  position: relative;
  overflow: hidden; 
}

.card-height {
  min-height: 300px;
}

.hover-card {
  transition: transform 0.3s ease;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0; 
  background: rgba(0, 0, 0, 0.5); 
  transition: opacity 0.3s ease;
}

.hover-card:hover .card-content {
  opacity: 1; 
}

.card-title,
.card-text {
  color: white; 
  text-align: center; 
}
</style>
