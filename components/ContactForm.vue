<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>

    <v-textarea
      v-model="message"
      :rules="messageRules"
      label="Mensaje"
      rows="4"
      required
    ></v-textarea>

    <v-btn :disabled="!valid" @click="submit">
      Enviar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      message: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 50) || 'El nombre debe tener menos de 50 caracteres',
      ],
      emailRules: [
        v => !!v || 'El email es requerido',
        v => /.+@.+\..+/.test(v) || 'Introduce un email válido',
      ],
      messageRules: [
        v => !!v || 'El mensaje es requerido',
        v => (v && v.length <= 500) || 'El mensaje debe tener menos de 500 caracteres',
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Lógica para enviar el formulario
        alert('Formulario enviado correctamente');
        // Aquí puedes hacer una llamada HTTP para enviar los datos, por ejemplo:
        // this.$axios.post('/api/contact', { name: this.name, email: this.email, message: this.message });
      }
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin-top: 1rem;
}
</style>
