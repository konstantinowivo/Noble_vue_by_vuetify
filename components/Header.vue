<template>
    <nav>
        <v-toolbar>
            <v-btn text to="/" flat color="white">
                <span>Logo</span>
            </v-btn>
            <v-toolbar-title>
                <router-link to="/" class="text-white">Matafuegos Noble</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text to="/" flat color="white">
                <span>Inicio</span>
            </v-btn>
            <v-btn text to="/contacto" flat color="white">
                <span>Contacto</span>
            </v-btn>
        </v-toolbar>
    </nav>
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

.buttons-container {
    display: flex;
    align-items: center; /* Asegura que los botones estén alineados verticalmente */
    justify-content: flex-end; /* Alinea los botones a la derecha */
}
</style>  