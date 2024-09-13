<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      v-model="from_name"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="email_id"
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
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
  data() {
    return {
      valid: false,
      from_name: '',
      email_id: '',
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
        const templateParams = {
          from_name: this.from_name,
          email_id: this.email_id,
          message: this.message,
        };

        emailjs
          .send('service_6slf0ka', 'template_lo3v4hb', templateParams, '8Kp9zy0H--xYV5imf')
          .then(
            response => {
              alert('Correo enviado correctamente');
              console.log('SUCCESS!', response.status, response.text);
            },
            err => {
              alert('Error al enviar el correo');
              console.log('FAILED...', err);
            }
          );
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
