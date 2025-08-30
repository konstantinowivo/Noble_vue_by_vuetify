<template>
    <div 
        class="description-container"
        :class="{ 'visible': isVisible }"
    >
    <h1 class="description-text" :class="{ visible }">
        {{ text }}
    </h1>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>

</style>
