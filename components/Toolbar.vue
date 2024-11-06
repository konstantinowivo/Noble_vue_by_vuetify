<template>
<v-app-bar color="black" height="80" app>
    <nuxt-link class="nav-button" to="/">
    <img src="../assets/title_nav.png" class="logo-image" alt="Logo" />
    </nuxt-link>

    <v-spacer></v-spacer>

    <div class="d-md-none">
    <v-menu v-model="menuOpen" offset-y>
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

    <div class="d-none d-md-flex">
    <nuxt-link to="/" class="nav-button">Inicio</nuxt-link>
    <nuxt-link to="/contacto" class="nav-button">Contacto</nuxt-link>
    </div>
</v-app-bar>
</template>

<script>
export default {
    data() {
        return {
        menuOpen: false,
        };
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        checkScreenSize() {
        const isMediumOrLarger = window.matchMedia('(min-width: 960px)').matches;
        if (isMediumOrLarger) {
            this.menuOpen = false;
        }
        },
    },
};
</script>

<style scoped>
/* Ajustes para corregir márgenes y padding */
html, body {
margin: 0;
padding: 0;
}

.v-app-bar {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

/* Estilo de la imagen */
.logo-image {
    max-width: 300px;
    height: auto;
}

/* Estilo de los botones de navegación */
.nav-button {
    display: flex;
    align-items: center;
    font-family: 'Bebas Neue', cursive;
    font-weight: bolder;
    font-style: italic;
    color: yellow;
    font-size: 150%;
    text-decoration: none;
    margin-right: 16px;
}

/* Eliminar márgenes extras de los iconos */
.v-app-bar-nav-icon {
    margin-right: 16px;
}

/* Ocultar overlay de botones */
.nav-button:deep(.v-btn__overlay) {
    display: none;
}

.v-list-item {
    padding: 8px 16px;
}

/* Asegurarse de que no haya margen adicional en la página de inicio */
@media (max-width: 960px) {
    
.v-app-bar {
    margin-bottom: 0 !important; /* Evitar márgenes innecesarios */
}
.v-main {
    padding-top: 0 !important;
}
}
</style>
