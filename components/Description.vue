<template>
  <div 
    ref="sectionRef"
    class="description-container"
    :class="{ visible: isVisible }"
  >
    <p class="description-text">
      {{ text }}
    </p>
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

.description-container {
  transform: translateY(32px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s;
  margin-bottom: clamp(2rem, 5vw, 6rem); /* Se adapta al tamaño de pantalla */
}

.description-container.visible {
  transform: translateY(0);
  opacity: 1;
}

.description-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: #e5e7eb;
  line-height: 1.7;
  letter-spacing: -0.01em;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
</style>