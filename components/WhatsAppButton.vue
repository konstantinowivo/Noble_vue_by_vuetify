<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button"
    aria-label="Contactar por WhatsApp"
  >
    <img src="@/assets/wp.icon.png" alt="WhatsApp" />
  </a>
</template>

<script setup lang="ts">
import { WHATSAPP_URL } from '@/constants/contact';

/**
 * Componente de botón flotante de WhatsApp
 * Refactorizado con constantes centralizadas
 */

const whatsappUrl = WHATSAPP_URL;
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: var(--z-index-modal);
  display: inline-block;
  transition: transform 0.3s ease;
}

.whatsapp-button:hover {
  transform: scale(1.1);
}

.whatsapp-button img {
  width: 60px;
  height: 60px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

@media (max-width: 960px) {
  .whatsapp-button {
    right: auto;
    left: 20px;
  }

  .whatsapp-button img {
    width: 50px;
    height: 50px;
  }
}
</style>
