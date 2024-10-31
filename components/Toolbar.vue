<template>
    <v-app-bar color="black" height="80">
        <!-- Logo a la izquierda -->
        <nuxt-link class="nav-button" to="/">
            <img src="../assets/title_nav.png" class="logo-image" alt="Logo" />
        </nuxt-link>

        <v-spacer></v-spacer>

        <!-- Menú hamburguesa para pantallas pequeñas -->
        <div class="d-md-none">
            <v-menu offset-y>
                <template #activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <nuxt-link to="/" class="nav-button">Inicio</nuxt-link>
                    </v-list-item>
                    <v-list-item>
                        <nuxt-link to="/contacto" class="nav-button">Contacto</nuxt-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>

        <!-- Botones visibles en resoluciones grandes -->
        <div class="d-none d-md-flex">
            <nuxt-link to="/" class="nav-button">Inicio</nuxt-link>
            <v-spacer></v-spacer> <!-- Espaciador para separación -->
            <nuxt-link to="/contacto" class="nav-button">Contacto</nuxt-link>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    computed: {
        // No se necesitan funciones simples para el tamaño de la pantalla
    },
};
</script>

<style scoped>
.logo-image {
    max-width: 300px; 
    height: auto;
}

.nav-button {
    display: flex;
    align-items: center;
    font-family: 'Bebas Neue', cursive;
    font-weight: bolder;
    font-style: italic;
    color: yellow;
    font-size: 150%;
    text-decoration: none; /* Elimina el subrayado */
    margin-right: 16px; /* Agrega margen derecho para separación */
}

.v-app-bar-nav-icon {
    margin-right: 16px;
}

.nav-button:deep(.v-btn__overlay) {
    display: none;
}

/* Estilo para los elementos del menú */
.v-list-item {
    padding: 8px 16px; /* Ajusta el padding según tus necesidades */
}
</style>
