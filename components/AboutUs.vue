<template>
  <v-container class="about-us-section my-10">
    <v-row align="center">
      <v-col cols="12" md="6">
        <v-img src="/path/to/about-us-image.jpg" class="rounded-lg" max-height="400px"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="font-weight-bold mb-4">{{ title }}</h2>
        <p>{{ description }}</p>
        <v-btn color="primary" @click="learnMore">{{ learnMoreText }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {
    title: {
      type: String,
      default: 'Sobre Nosotros'
    },
    description: {
      type: String,
      default: 'Somos una empresa dedicada a brindar soluciones personalizadas para cada cliente, con años de experiencia en el mercado.'
    },
    learnMoreText: {
      type: String,
      default: 'Aprende más'
    }
  },
  methods: {
    learnMore() {
      this.$router.push('/contacto');
    }
  }
};
</script>

<style scoped>
.about-us-section {
  padding: 2rem 0;
}
.rounded-lg {
  border-radius: 8px;
}
</style>
