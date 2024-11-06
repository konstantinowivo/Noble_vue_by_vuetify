<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 :style="titleStyle">CONTACTANOS</h1>
        <h2 :style="subtitleStyle">PEDÍ TU PRESUPUESTO SIN CARGO!</h2> 
      </v-col>
    </v-row>

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

      <v-dialog v-model="showModal" max-width="400">
        <v-card>
          <v-card-title class="headline">Correo enviado</v-card-title>
          <v-card-text>Tu correo ha sido enviado correctamente.</v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="showModal = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </v-container>
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
      showModal: false,
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
  computed: {
    titleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        color: 'yellow',
        fontSize: '3.9rem' 
      };
    },
    subtitleStyle() {
      return {
        fontFamily: '"Bebas Neue", cursive',
        fontStyle: 'italic',
        color: 'white',
        fontSize: '2rem',
        marginBottom: '3rem', 
      };
    }
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
              this.clearForm();
              this.showModal = true;
              console.log('SUCCESS!', response.status, response.text);
            },
            err => {
              alert('Error al enviar el correo');
              console.log('FAILED...', err);
            }
          );
      }
    },
    clearForm() {
      this.from_name = '';
      this.email_id = '';
      this.message = '';
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin-top: 1rem;
}
</style>
