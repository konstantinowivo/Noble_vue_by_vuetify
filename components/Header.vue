<template>
    <nav>
        <v-toolbar color="black">
            <v-btn to="/" flat color="white">
                <span class="custom-text">Logo</span>
            </v-btn>
            <v-toolbar-title>
                <router-link to="/" class="custom-text">Matafuegos Noble</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn to="/" flat color="white">
                <span class="custom-text">Inicio</span>
            </v-btn>
            <v-btn to="/contacto" flat color="white">
                <span class="custom-text">Contacto</span>
            </v-btn>
        </v-toolbar>
    </nav>
</template>


<style scoped>

.custom-text {
    font-family: 'Bebas Neue';
    color: yellow;
    font-size: 150%; 
}

</style>

