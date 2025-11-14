<template>
  <v-app-bar color="black" height="80" app class="custom-toolbar">
    <nuxt-link class="nav-button-logo" to="/">
      <img src="../assets/title_nav.png" class="logo-image" alt="Matafuegos Noble Logo" />
    </nuxt-link>

    <v-spacer />

    <!-- Menu móvil -->
    <div class="d-md-none">
      <v-menu v-model="menuOpen" offset-y>
        <template #activator="{ props }">
          <v-btn icon v-bind="props" aria-label="Abrir menú">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in navigationItems" :key="item.title">
            <nuxt-link :to="item.to" class="nav-button" @click="closeMenu">
              {{ item.title }}
            </nuxt-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Menu desktop -->
    <div class="d-none d-md-flex">
      <nuxt-link
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        class="nav-button"
      >
        {{ item.title }}
      </nuxt-link>
    </div>

    <!-- Partículas decorativas -->
    <div class="particles-toolbar">
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
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useParticleEffect } from '@/composables/useParticleEffect';
import { NAVIGATION_ITEMS } from '@/constants/navigation';

/**
 * Componente Toolbar
 * Refactorizado con Composition API, TypeScript y Clean Code
 */

// Estado del menú móvil
const menuOpen = ref(false);

// Usar composable para partículas (DRY principle)
const { particles } = useParticleEffect({
  count: 6,
  minSize: 4,
  maxSize: 6,
});

// Usar constantes centralizadas
const navigationItems = NAVIGATION_ITEMS;

/**
 * Cierra el menú móvil
 */
const closeMenu = (): void => {
  menuOpen.value = false;
};

/**
 * Verifica el tamaño de la pantalla y cierra el menú si es necesario
 */
const checkScreenSize = (): void => {
  const isMediumOrLarger = window.matchMedia('(min-width: 960px)').matches;
  if (isMediumOrLarger) {
    menuOpen.value = false;
  }
};

// Lifecycle hooks
onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.custom-toolbar {
  position: relative;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  padding: 0 var(--spacing-md);
}

.custom-toolbar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.logo-image {
  max-width: 250px;
  height: auto;
}

.nav-button-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.nav-button {
  display: flex;
  align-items: center;
  font-family: var(--font-primary);
  font-weight: 900;
  font-style: italic;
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  margin-right: var(--spacing-sm);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-button:hover {
  color: var(--color-primary-hover);
  transform: scale(1.1);
}

.particles-toolbar {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particles-toolbar .particle {
  position: absolute;
  background: rgba(251, 191, 36, 0.4);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-5px) rotate(90deg);
  }
  50% {
    transform: translateY(-2px) rotate(180deg);
  }
  75% {
    transform: translateY(-8px) rotate(270deg);
  }
}

@media (max-width: 960px) {
  .logo-image {
    max-width: 180px;
  }
}
</style>
