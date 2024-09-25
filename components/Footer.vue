<template>
  <v-footer padless color="primary" white>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-white">&copy; 2024 Mi Empresa</p>
        </v-col>
        <v-col cols="12" sm="6" class="text-right">
          <v-btn icon href="https://facebook.com" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://twitter.com" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://instagram.com" target="_blank">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>


<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Exageradamente grande */

</style>