<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(brand, i) in brands" :key="i">
      <v-img :src="brand.logo" class="d-flex justify-center align-center"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'BrandCarousel',
  data() {
    return {
      brands: [
        { logo: '/path/to/logo1.png' },
        { logo: '/path/to/logo2.png' },
        { logo: '/path/to/logo3.png' },
      ]
    };
  }
};
</script>

<style scoped>
.v-img {
  height: 200px;
  width: auto;
}
</style>
