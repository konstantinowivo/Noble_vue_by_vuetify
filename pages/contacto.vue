<template>
<v-container class="my-5">
    <v-row justify="center">
    <v-col cols="12" md="8">
        <h1 class="text-center mb-4">Contáctanos</h1>

        <ContactForm />

        <v-card class="mt-5">
        <v-card-title>Información de Contacto</v-card-title>
        <v-card-text>
            <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad, País</p>
            <p><strong>Teléfono:</strong> +123 456 7890</p>
            <p><strong>Email:</strong> contacto@empresa.com</p>
        </v-card-text>
        </v-card>
    </v-col>
    </v-row>
</v-container>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
components: {
    ContactForm
}
}
</script>

<style scoped>
.text-center {
text-align: center;
}
.mb-4 {
margin-bottom: 1.5rem;
}
</style>
