<template>
    <section class="services-section fade-edge" ref="sectionRef">
        <div class="content-container">
        <h1 class="title" :class="{ visible: isVisible }">
            {{ text }}
        </h1>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
        isVisible.value = entry.isIntersecting
        },
        { threshold: 0.1 }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<style scoped>
.content-container {
    position: relative;
    z-index: 5;
    text-align: center;
    margin-bottom: 48px;
}

.title {
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    font-style: italic;
    background: linear-gradient(45deg, #fbbf24, #fcd34d, #f59e0b);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 24px;
    text-shadow: 0 4px 20px rgba(255, 193, 7, 0.3);
    transform: translateY(32px);
    opacity: 0;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.title.visible {
    transform: translateY(0);
    opacity: 1;
}
</style>
