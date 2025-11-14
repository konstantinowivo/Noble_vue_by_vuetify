<template>
  <v-footer padless class="custom-footer">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" sm="6">
          <p class="footer-text">&copy; {{ currentYear }} Matafuegos Noble</p>
        </v-col>
        <v-col cols="12" sm="6" class="social-container">
          <v-btn
            v-for="social in socialLinks"
            :key="social.name"
            icon
            :href="social.url"
            target="_blank"
            class="social-btn"
            :aria-label="`Visitar ${social.name}`"
          >
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <div class="particles-footer">
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
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useParticleEffect } from '@/composables/useParticleEffect';
import { SOCIAL_LINKS } from '@/constants/contact';

/**
 * Componente Footer
 * Refactorizado con Composition API y Clean Code
 */

// Usar composable para partículas (DRY principle)
const { particles } = useParticleEffect({
  count: 6,
  minSize: 4,
  maxSize: 6,
});

// Usar constantes centralizadas
const socialLinks = SOCIAL_LINKS;

// Año actual dinámico
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.custom-footer {
  background: #111;
  color: var(--color-text-primary);
  padding: var(--spacing-lg) 0;
  position: relative;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.footer-text {
  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: var(--font-size-base);
  letter-spacing: 0.5px;
}

.social-container {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-xs);
}

.social-btn {
  color: var(--color-primary);
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.1);
  color: var(--color-primary-hover);
}

.particles-footer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particles-footer .particle {
  position: absolute;
  background: rgba(251, 191, 36, 0.4);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(90deg);
  }
  50% {
    transform: translateY(-5px) rotate(180deg);
  }
  75% {
    transform: translateY(-15px) rotate(270deg);
  }
}

@media (max-width: 600px) {
  .social-container {
    justify-content: center;
    margin-top: var(--spacing-sm);
  }
}
</style>
