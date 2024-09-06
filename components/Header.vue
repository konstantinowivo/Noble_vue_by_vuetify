<template>
<v-app-bar app color="primary" dark>
    <v-container>
    <v-toolbar-title>
        <router-link to="/" class="text-white">Mi Empresa</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/" class="text-white">Inicio</v-btn>
    <v-btn text to="/contacto" class="text-white">Contacto</v-btn>
    </v-container>
</v-app-bar>
</template>

<script>
export default {
name: 'Header',
};
</script>

<style scoped>
.text-white {
color: white;
}
</style>