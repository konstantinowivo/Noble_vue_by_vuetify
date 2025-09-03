<template>
  <a
    href="https://wa.me/543413052530"
    target="_blank"
    class="whatsapp-button"
    aria-label="WhatsApp Chat"
  >
    <img src="@/assets/wp.icon.png" alt="WhatsApp" />
  </a>
</template>

<script setup></script>

<style scoped>
.whatsapp-button {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 9999;
  display: inline-block;
}

.whatsapp-button img {
  width: 60px;
  height: 60px;
}

@media (max-width: 960px) {
  .whatsapp-button {
    right: auto;
    left: 20px;
  }
}
</style>
