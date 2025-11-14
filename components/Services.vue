<template>
  <section
    ref="sectionRef"
    class="services-section fade-edge"
    @mousemove="handleMouseMove"
  >
    <div class="background-image" :style="parallaxStyle" />

    <div class="particles-container">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="particle"
        :style="{
          left: particle.left,
          top: particle.top,
          width: particle.size,
          height: particle.size,
          animationDelay: particle.animationDelay,
          animationDuration: particle.animationDuration,
        }"
      />
    </div>

    <div class="content-container">
      <div class="header-section">
        <h1 class="main-title" :class="{ visible: isVisible }">NUESTROS SERVICIOS</h1>
        <h2 class="subtitle" :class="{ visible: isVisible }">
          posicionate sobre la imagen y conocé más
        </h2>

        <div class="decorative-line" :class="{ visible: isVisible }">
          <div class="line-left" />
          <div class="center-dot" />
          <div class="line-right" />
        </div>
      </div>

      <div class="services-grid">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :image="service.image"
          :animation-delay="index * 200"
          :trigger-animation="isVisible"
          :cta-text="ctaText"
          to="/contacto"
          @click="handleCardClick(service)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import ServiceCard from '@/components/ServiceCard.vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';
import { useParticleEffect } from '@/composables/useParticleEffect';
import { SERVICES, SERVICE_CTA_TEXT } from '@/constants/services';
import type { Service } from '@/types/Service';

/**
 * Componente de sección de servicios
 * Refactorizado siguiendo principios SOLID y Clean Code
 */

const router = useRouter();
const sectionRef = ref<HTMLElement | null>(null);
const mousePosition = ref({ x: 0, y: 0 });

// Usar composables reutilizables (DRY principle)
const { isVisible } = useIntersectionObserver(sectionRef);
const { particles } = useParticleEffect({ count: 8 });

// Usar constantes centralizadas
const services = SERVICES;
const ctaText = SERVICE_CTA_TEXT;

/**
 * Maneja el movimiento del mouse para efectos parallax
 */
const handleMouseMove = (event: MouseEvent): void => {
  const rect = sectionRef.value?.getBoundingClientRect();
  if (rect) {
    mousePosition.value = {
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2,
    };
  }
};

/**
 * Maneja el click en una tarjeta de servicio
 */
const handleCardClick = (service: Service): void => {
  router.push('/contacto');
};

/**
 * Estilo parallax calculado (podría mejorarse aún más)
 */
const parallaxStyle = computed(() => ({
  transform: 'translateY(0px)',
}));
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

.services-section {
  position: relative;
  min-height: 100vh;
  padding: var(--spacing-3xl) var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Background */
.background-image {
  position: absolute;
  inset: 0;
  will-change: transform;
  transition: transform 0.1s ease-out;
}

.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: var(--z-index-particles);
}

.content-container {
  position: relative;
  z-index: var(--z-index-content);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.header-section {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.main-title {
  font-family: var(--font-primary);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  font-style: italic;
  background: var(--gradient-gold);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-md);
  text-shadow: var(--shadow-gold);
  transform: translateY(32px);
  opacity: 0;
  transition: all var(--transition-duration) var(--transition-easing);
}

.main-title.visible {
  transform: translateY(0);
  opacity: 1;
}

.subtitle {
  font-family: var(--font-primary);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-style: italic;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
  text-shadow: var(--shadow-text);
  transform: translateY(32px);
  opacity: 0;
  transition: all var(--transition-duration) var(--transition-easing) 0.3s;
}

.subtitle.visible {
  transform: translateY(0);
  opacity: 1;
}

.decorative-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  transform: translateY(32px);
  opacity: 0;
  transition: all var(--transition-duration) var(--transition-easing) 0.6s;
}

.decorative-line.visible {
  transform: translateY(0);
  opacity: 1;
}

.line-left,
.line-right {
  height: 1px;
  width: 128px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
}

.line-right {
  background: linear-gradient(to left, transparent, var(--color-primary), transparent);
}

.center-dot {
  width: var(--spacing-xs);
  height: var(--spacing-xs);
  background: var(--color-primary);
  border-radius: var(--radius-full);
  animation: pulse 2s infinite;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  width: 100%;
}

.fade-edge {
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

@media (max-width: 768px) {
  .services-section {
    padding: 60px var(--spacing-sm);
  }

  .services-grid {
    gap: var(--spacing-md);
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  .header-section {
    margin-bottom: var(--spacing-xl);
  }
}

@media (max-width: 480px) {
  .services-section {
    padding: 40px 12px;
  }

  .services-grid {
    gap: 20px;
    grid-template-columns: 1fr;
  }

  .header-section {
    margin-bottom: var(--spacing-lg);
  }
}
</style>
