<template>
  <v-footer padless color="black">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-white">&copy; 2024 Matafuegos Noble</p>
        </v-col>
        <v-col cols="12" sm="6" class="text-right">
          <v-btn icon href="https://facebook.com/MatafuegosNoble" target="_blank" class="social-btn">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://instagram.com/MatafuegosNoble" target="_blank" class="social-btn">
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
.social-btn {
  margin-left: 8px;
}
</style>
