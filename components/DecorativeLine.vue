<template>
    <div class="decorative-line" :class="{ visible }">
        <div class="line-left" />
        <div class="center-dot" />
        <div class="line-right" />
    </div>
</template>

<script setup>
defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.decorative-line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 48px;
    transform: translateY(32px);
    opacity: 0;
    transition: all 1s cubic-bezier(0.4,0,0.2,1) 0.6s;
}
.decorative-line.visible {
    transform: translateY(0);
    opacity: 1;
}
.line-left, .line-right {
    height: 1px;
    width: 128px;
    background: linear-gradient(to right, transparent, #fbbf24, transparent);
}
.line-right {
    background: linear-gradient(to left, transparent, #fbbf24, transparent);
}
.center-dot {
    width: 8px;
    height: 8px;
    background: #fbbf24;
    border-radius: 50%;
    animation: pulse 2s infinite;
}
@keyframes pulse {
    0%,100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
}
</style>
