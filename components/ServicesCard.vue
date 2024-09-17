<template>
  <v-container>
    <v-row> 
      <v-col v-for="service in services" :key="service.id" cols="12" md="4">
        <v-card
          class="mx-auto card-height" 
          color="surface-variant"
          :image="service.image"
          :subtitle="service.subtitle"
          :title="service.title"
          max-width="340"
        >
          <template v-slot:actions>
            <v-btn
              append-icon="mdi-chevron-right"
              color="red-lighten-2"
              text="Book Activity"
              variant="outlined"
              block
            ></v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import matafuegosImage from '@/assets/portada.extintores.jpg'
import sodaStreamImage from '@/assets/soda.stream.2.png'
import tubosImage from '@/assets/co2_tubos.jpg'

export default {
  name: 'ServiceList',
  data() {
    return {
      services: [
        { id: 1, title: 'Servicio 1', subtitle: 'Subtítulo 1', image: matafuegosImage },
        { id: 2, title: 'Servicio 2', subtitle: 'Subtítulo 2', image: sodaStreamImage },
        { id: 3, title: 'Servicio 3', subtitle: 'Subtítulo 3', image: tubosImage },
      ]
    };
  }
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}

.card-height {
  min-height: 300px;  
}
</style>
