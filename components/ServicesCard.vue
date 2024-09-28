<template>
  <v-container>
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
                <span>{{ctaText}}</span>
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import matafuegosImage from '@/assets/portada.extintores.jpg'
import sodaStreamImage from '@/assets/soda.stream.2.png'
import tubosImage from '@/assets/co2_tubos.jpg'
import elemSeguridad from '@/assets/casco-construccion-seguridad-vista-superior-mascara-medica.jpg'

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
        { id: 1, title: 'ELEMENTOS DE SEGURIDAD', description: 'Venta y recarga de extintores para la industria, comercio y hogar', image: elemSeguridad },
        { id: 2, title: 'SODASTREAM', description: 'Venta y recarga de envases de sodastream y capsulas para sifones', image: sodaStreamImage },
        { id: 3, title: 'GASES NO INFLAMABLES', description: 'Venta y recarga de gases para consumo o medicinal', image: tubosImage },
        { id: 4, title: 'EXTINTORES', description: 'Venta y recarga de extintores para la industria, comercio y hogar', image: matafuegosImage },
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
        color: 'yellow'
      };
    },
    descriptionStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        color: 'white'
      };
    }
  },
}
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
  position: relative;
  overflow: hidden; /* Para ocultar el contenido fuera del área del card */
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
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra horizontalmente */
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0; /* Oculta el contenido por defecto */
  background: rgba(0, 0, 0, 0.5); /* Fondo oscuro para contraste */
  transition: opacity 0.3s ease;
}

.hover-card:hover .card-content {
  opacity: 1; /* Muestra el contenido al pasar el cursor */
}

.card-title,
.card-text {
  color: white; /* Color del texto para contraste con el fondo oscuro */
  text-align: center; /* Alinea el texto en el centro */
}
</style>
