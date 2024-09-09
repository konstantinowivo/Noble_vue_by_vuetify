<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="image" height="200px"></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn text color="primary">Más información</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: String,
    subtitle: String,
    description: String,
  }
};
</script>

<style scoped>
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
