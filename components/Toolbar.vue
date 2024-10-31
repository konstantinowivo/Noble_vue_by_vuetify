<template>
    <v-app-bar color="black" height="80">
        <!-- Logo -->
        <v-btn class="nav-button" to="/" :overlay="false">
            <img src="../assets/title_nav.png" class="logo-image" alt="Logo" />
        </v-btn>

        <v-spacer></v-spacer>

        <!-- Botones visibles en resoluciones grandes -->
        <div class="d-none d-md-flex">
            <v-btn class="nav-button" to="/" variant="text" :overlay="false">
                <span class="custom-text">Inicio</span>
            </v-btn>
            <v-btn class="nav-button" to="/contacto" variant="text" :overlay="false">
                <span class="custom-text">Contacto</span>
            </v-btn>
        </div>

        <!-- Botones alineados con el logo para resoluciones pequeñas -->
        <div class="d-md-none inline-buttons">
            <v-btn class="nav-button" to="/" variant="text" :overlay="false">
                <span class="custom-text">Inicio</span>
            </v-btn>
            <v-btn class="nav-button" to="/contacto" variant="text" :overlay="false">
                <span class="custom-text">Contacto</span>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.custom-text {
    font-family: 'Bebas Neue', cursive;
    font-weight: bolder;
    font-style: italic;
    color: yellow;
    font-size: 150%;
}

.logo-image {
    max-width: 300px;
    height: auto;
}

.nav-button {
    display: flex;
    align-items: center;
}

.v-app-bar-nav-icon {
    margin-right: 16px;
}

.nav-button:deep(.v-btn__overlay) {
    display: none;
}

/* Estilos para alinear los botones con la imagen en resoluciones pequeñas */
.inline-buttons {
    display: flex;
    gap: 16px; /* Espacio entre el logo y los botones */
    align-items: center;
    margin-left: 16px; /* Ajusta el margen para alinearlos al logo */
}
</style>
