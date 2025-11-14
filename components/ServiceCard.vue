<template>
  <div
    class="service-card"
    :class="{ visible: isVisible }"
    :style="{ animationDelay: `${animationDelay}ms` }"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <div
      class="card-background"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <div class="card-overlay" />
    <div class="card-glow" :class="{ active: isHovered }" />

    <div class="card-content" :class="{ hovered: isHovered }">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>

      <button class="cta-button" @click="handleButtonClick">
        <span class="button-text">{{ ctaText }}</span>
        <div class="button-glow" />
        <svg class="button-arrow" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

/**
 * Props del componente ServiceCard
 * Refactorizado con TypeScript para type safety
 */
interface Props {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  animationDelay?: number;
  to?: string;
  triggerAnimation?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  ctaText: 'Contactanos',
  animationDelay: 0,
  to: '/contacto',
  triggerAnimation: false,
});

/**
 * Eventos emitidos por el componente
 */
interface Emits {
  (e: 'click', payload: { to: string }): void;
}

const emit = defineEmits<Emits>();

const isVisible = ref(false);
const isHovered = ref(false);

/**
 * Maneja el estado de hover de la tarjeta
 */
const handleHover = (hovering: boolean): void => {
  isHovered.value = hovering;
};

/**
 * Maneja el click del botón CTA
 */
const handleButtonClick = (): void => {
  emit('click', { to: props.to });
};

/**
 * Observa el trigger de animación para mostrar la tarjeta
 */
watch(
  () => props.triggerAnimation,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        isVisible.value = true;
      }, props.animationDelay);
    }
  }
);

/**
 * Muestra la tarjeta al montar si no hay trigger externo
 */
onMounted(() => {
  if (!props.triggerAnimation) {
    setTimeout(() => {
      isVisible.value = true;
    }, props.animationDelay);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

.service-card {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  min-height: 320px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: translateY(32px);
  opacity: 0;
  transition: all var(--transition-duration) var(--transition-easing);
  cursor: pointer;
}

.service-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.7);
}

.card-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.service-card:hover .card-background {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
  transition: background 0.3s ease;
}

.service-card:hover .card-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
}

.card-glow {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(251, 191, 36, 0.2);
  border-radius: var(--radius-xl);
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
  opacity: 0;
  transition: opacity 0.3s;
}

.card-glow.active {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: var(--z-index-particles);
  padding: var(--spacing-md);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  justify-content: center;
  transition: transform 0.3s ease;
}

.card-content.hovered {
  transform: translateY(-4px);
}

.card-title {
  font-family: var(--font-primary);
  font-size: var(--font-size-2xl);
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

.service-card:hover .card-title {
  color: var(--color-primary);
}

.card-description {
  font-family: var(--font-secondary);
  font-size: var(--font-size-base);
  color: #e5e7eb;
  margin-bottom: var(--spacing-sm);
  line-height: 1.5;
  transition: color 0.3s ease;
}

.service-card:hover .card-description {
  color: #f3f4f6;
}

.cta-button {
  position: relative;
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-full);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-family: var(--font-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: auto;
}

.cta-button:hover {
  background: var(--color-primary);
  color: var(--color-bg-darker);
  transform: translateY(-2px);
}

.cta-button:active {
  transform: translateY(0);
}

.button-text {
  position: relative;
  z-index: 2;
}

.button-glow {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-full);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
}

.cta-button:hover .button-glow {
  opacity: 1;
}

.button-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.cta-button:hover .button-arrow {
  transform: translateX(2px);
}

/* Responsive */
@media (max-width: 768px) {
  .service-card {
    min-height: 280px;
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-description {
    font-size: 0.9rem;
  }

  .cta-button {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .service-card {
    min-height: 240px;
  }
}
</style>
