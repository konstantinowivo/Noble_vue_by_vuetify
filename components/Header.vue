<template>
        <!-- Drawer para navegación en pantallas pequeñas -->
        <v-navigation-drawer
            v-model="drawer"
            temporary
            left
        >
            <!-- Drawer para pantallas pequeñas -->
            <v-list>
                <v-list-item link to="/">
                    <v-list-item-content>
                        <v-list-item-title>Inicio</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/contacto">
                    <v-list-item-content>
                        <v-list-item-title>Contacto</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- Barra de navegación -->
        <v-app-bar color="black" height="80">
            <!-- Icono de menú para abrir el drawer en pantallas pequeñas -->
            <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" color="yellow" />

            <!-- Botón de navegación sin overlay -->
            <v-btn class="nav-button" href="/" :overlay="false">
                <img src="../assets/title_nav.png" class="logo-image" alt="Logo" />
            </v-btn>

            <!-- Alinea los botones al extremo derecho -->
            <v-spacer></v-spacer>
            <div class="d-none d-md-flex" >
                <v-btn class="nav-button" href="/" variant="text" :overlay="false">
                    <span class="custom-text">Inicio</span>
                </v-btn>
                <v-btn class="nav-button" href="/contacto" variant="text" :overlay="false">
                    <span class="custom-text">Contacto</span>
                </v-btn>
            </div>
        </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            drawer: false, 
        };
    },
};
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
</style>
