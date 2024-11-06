<!-- /components/WhatsAppButton.vue -->
<template>
<a
    href="https://wa.me/543415325391" 
    target="_blank"
    class="whatsapp-button"
    aria-label="WhatsApp Chat"
>
    <img src="@/assets/wp.icon.png" alt="WhatsApp" />
</a>
</template>

<script setup>
</script>

<style scoped>

.whatsapp-button {
    position: fixed;
    top: 100px; 
    right: 20px;
    z-index: 9999; 
    display: inline-block;
}

.whatsapp-button img {
    width: 70px; 
    height: 70px;
}

</style>
