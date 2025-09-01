<template>
    <section class="services-section fade-edge" ref="sectionRef">
        <div class="content-container">
            <h2 class="subtitle" :class="{ visible: isVisible }">
                {{ text }}
            </h2>
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


.subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-style: italic;
    color: white;
    margin-bottom: 32px;
    text-shadow: 0 2px 10px rgba(255,255,255,0.1);
    transform: translateY(32px);
    opacity: 0;
    transition: all 1s cubic-bezier(0.4,0,0.2,1) 0.3s;
}

.subtitle.visible {
    transform: translateY(0);
    opacity: 1;
}
</style>
