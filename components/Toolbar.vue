<template>
    <v-app-bar color="black" height="80">

        <v-btn class="nav-button" to="/" :overlay="false">
            <img src="../assets/title_nav.png" class="logo-image" alt="Logo" />
        </v-btn>

        <v-spacer></v-spacer>

        <div class="d-none d-md-flex" >
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