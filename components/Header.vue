<template>
    <nav>
        <v-toolbar color="black" height="80"> <!-- Ajusta la altura del toolbar si es necesario -->
            <!-- Botón de navegación sin estilo -->
            <v-btn class="nav-button" to="/" overlay="false">
                <img src="../assets/title_nav.png" class="logo-image">
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn to="/" variant="text">
                <span class="custom-text">Inicio</span>
            </v-btn>
            <v-btn to="/contacto" variant="text">
                <span class="custom-text">Contacto</span>
            </v-btn>
        </v-toolbar>
    </nav>
</template>

<style scoped>
.custom-text {
    font-family: 'Bebas Neue', cursive;
    font-weight: bolder;
    font-style: italic;
    color: yellow;
    font-size: 150%;
}

/* Ajusta el tamaño de la imagen del logo */
.logo-image {
    max-width: 300px; /* Ajusta el tamaño de la imagen del logo */
    height: auto;
}

/* Ajusta el botón para centrarlo */
.nav-button {
    margin: 0 auto; /* Centra el botón horizontalmente */
    display: flex; /* Usa flex para centrar verticalmente */
    align-items: center; /* Alinea verticalmente el contenido del botón */
}

/* Para ocultar el overlay del botón (opcional) */
.nav-button:deep(.v-btn__overlay) {
    opacity: 0;
}
</style>
