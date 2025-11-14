<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="contact-title">CONTACTANOS</h1>
        <h2 class="contact-subtitle">PEDÍ TU PRESUPUESTO SIN CARGO!</h2>
      </v-col>
    </v-row>

    <v-form v-model="valid" ref="formRef" lazy-validation>
      <v-text-field
        v-model="formData.name"
        :rules="[validation.required(), validation.maxLength(50)]"
        label="Nombre"
        required
      />

      <v-text-field
        v-model="formData.email"
        :rules="[validation.required(), validation.email()]"
        label="Email"
        required
      />

      <v-text-field
        v-model="formData.phone"
        :rules="[validation.phone()]"
        label="Teléfono (opcional)"
      />

      <v-textarea
        v-model="formData.message"
        :rules="[validation.required(), validation.maxLength(500)]"
        label="Mensaje"
        rows="4"
        required
      />

      <v-btn
        :disabled="!valid || isSubmitting"
        :loading="isSubmitting"
        color="primary"
        @click="handleSubmit"
      >
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

<script setup lang="ts">
import { ref, reactive } from 'vue';
import emailjs from 'emailjs-com';
import { useFormValidation } from '@/composables/useFormValidation';
import type { ContactFormData } from '@/types/Contact';

/**
 * Componente de formulario de contacto
 * Refactorizado con Composition API, TypeScript y Clean Code
 */

const runtimeConfig = useRuntimeConfig();

// Composables
const validation = useFormValidation();

// Referencias
const formRef = ref<any>(null);
const valid = ref(false);
const showModal = ref(false);
const isSubmitting = ref(false);

// Datos del formulario
const formData = reactive<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  message: '',
});

/**
 * Servicio de envío de email usando EmailJS
 * Separación de concerns: lógica de negocio separada de la UI
 */
const sendEmail = async (data: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: data.name,
    email_id: data.email,
    phone: data.phone,
    message: data.message,
  };

  await emailjs.send(
    runtimeConfig.public.emailjsServiceId,
    runtimeConfig.public.emailjsTemplateId,
    templateParams,
    runtimeConfig.public.emailjsPublicKey
  );
};

/**
 * Limpia el formulario después de enviar
 */
const clearForm = (): void => {
  formData.name = '';
  formData.email = '';
  formData.phone = '';
  formData.message = '';
  formRef.value?.resetValidation();
};

/**
 * Maneja el envío del formulario
 */
const handleSubmit = async (): Promise<void> => {
  if (!formRef.value?.validate()) {
    return;
  }

  isSubmitting.value = true;

  try {
    await sendEmail(formData);
    clearForm();
    showModal.value = true;
  } catch (error) {
    alert('Error al enviar el correo. Por favor, intenta de nuevo.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-style: italic;
  color: var(--color-primary);
  font-size: clamp(2.5rem, 6vw, 3.9rem);
}

.contact-subtitle {
  font-family: var(--font-primary);
  font-style: italic;
  color: var(--color-text-primary);
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: var(--spacing-3xl);
}

.v-btn {
  margin-top: var(--spacing-md);
}
</style>
