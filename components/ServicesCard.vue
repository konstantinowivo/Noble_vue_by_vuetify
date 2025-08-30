<template>
  <section class="services-section fade-edge" ref="sectionRef">
    <!-- Background -->
    <div class="background-overlay"></div>
    <div class="particles-container">
      <div
        v-for="i in 10"
        :key="i"
        class="particle"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }"
      ></div>
    </div>

    <!-- Header Section -->
    <div class="content-container">
      <h1 class="main-title" :class="{ visible: isVisible }">
        NUESTROS SERVICIOS
      </h1>
      <h2 class="subtitle" :class="{ visible: isVisible }">
        Deslizá el mouse sobre las tarjetas y conocé más
      </h2>

      <!-- Decorative line -->
      <div class="decorative-line" :class="{ visible: isVisible }">
        <div class="line-left" />
        <div class="center-dot" />
        <div class="line-right" />
      </div>
    </div>

    <!-- Services Grid -->
    <div class="services-grid">
      <div
        v-for="(service, index) in services"
        :key="service.id"
        class="service-card"
        :class="{ visible: isVisible }"
        :style="{ animationDelay: `${index * 0.2}s` }"
        @mouseenter="handleCardHover(index, true)"
        @mouseleave="handleCardHover(index, false)"
      >
        <div
          class="card-background"
          :style="{ backgroundImage: `url(${service.image})` }"
        ></div>
        <div class="card-overlay"></div>
        <div class="card-glow" :class="{ active: hoveredCard === index }"></div>

        <div class="card-content" :class="{ hovered: hoveredCard === index }">
          <div class="card-icon">{{ service.icon }}</div>
          <h3 class="card-title">{{ service.title }}</h3>
          <p class="card-description">{{ service.description }}</p>

          <button class="cta-button" @click="navigateToContact">
            <span class="button-text">{{ ctaText }}</span>
            <div class="button-glow"></div>
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import matafuegosImage from '@/assets/portada.extintores.jpg'
import sodaStreamImage from '@/assets/soda.stream.2.png'
import instalacionImage from '@/assets/instalaciones.png'
import elemSeguridad from '@/assets/casco-construccion-seguridad-vista-superior-mascara-medica.jpg'

const router = useRouter()
const sectionRef = ref(null)
const isVisible = ref(false)
const hoveredCard = ref(-1)
let observer = null

const services = [
  { id: 1, title: 'ELEMENTOS DE SEGURIDAD', description: 'Venta y asesoría en seguridad...', image: elemSeguridad},
  { id: 2, title: 'CÁPSULAS Y SODASTREAM', description: 'Venta y recarga de envases...', image: sodaStreamImage},
  { id: 3, title: 'GASES PARA CONSUMO', description: 'Brindamos asesoría, venta y servicio...', image: instalacionImage},
  { id: 4, title: 'EXTINTORES', description: 'Venta y recarga anual de extintores...', image: matafuegosImage}
]

const ctaText = 'Contactanos'

const handleCardHover = (index, isHovering) => {
  hoveredCard.value = isHovering ? index : -1
}

const navigateToContact = () => {
  router.push('/contacto')
}

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting
  }, { threshold: 0.1 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => observer && observer.disconnect())
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

.services-section {
  position: relative;
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #1f2937 0%, #000000 40%, #111827 100%);

  /* Fade solo para el contenido que no son cards */
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  overflow: visible; /* permite que las cards queden fuera del fade */
}
/* Fondo */
.background-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 193, 7, 0.1) 0%,
    rgba(33, 37, 41, 0.9) 40%,
    rgba(0, 0, 0, 0.95) 100%
  );
  z-index: 1;
}

/* Partículas */
.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
}
.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fbbf24;
  border-radius: 50%;
  opacity: 0.2;
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%,100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
}

/* Contenido */
.content-container {
  position: relative;
  z-index: 5;
  text-align: center;
  margin-bottom: 48px;
}

.main-title {
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
.main-title.visible {
  transform: translateY(0);
  opacity: 1;
}

.subtitle {
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-style: italic;
  color: white;
  margin-bottom: 32px;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
  transform: translateY(32px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}
.subtitle.visible {
  transform: translateY(0);
  opacity: 1;
}

/* Línea decorativa */
.decorative-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
  transform: translateY(32px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
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

/* Grid de servicios */
.services-grid {
  position: relative;
  z-index: 10; /* más alto que el fade */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1200px;
}

.service-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  min-height: 320px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: translateY(32px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.service-card.visible {
  transform: translateY(0);
  opacity: 1;
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
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3));
}
.card-glow {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(251, 191, 36, 0.2);
  border-radius: 16px;
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
  opacity: 0;
  transition: opacity 0.3s;
}
.card-glow.active {
  opacity: 1;
}
.card-content {
  position: relative;
  z-index: 2;
  padding: 24px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}
.card-title {
  font-family: 'Bebas Neue', cursive;
  font-size: 1.5rem;
  margin-bottom: 12px;
}
.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #e5e7eb;
  margin-bottom: 16px;
}

/* Botón */
.cta-button {
  position: relative;
  background: transparent;
  color: #fbbf24;
  border: 1px solid #fbbf24;
  border-radius: 9999px;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.cta-button:hover {
  background: #fbbf24;
  color: black;
}
.button-glow {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}
.cta-button:hover .button-glow {
  opacity: 1;
}
.button-arrow {
  width: 16px;
  height: 16px;
}

.fade-edge {
  /* Aplica un fade al inicio y final de la sección */
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;

  /* Para navegadores que no soportan mask, fallback */
  background-clip: content-box;
}
</style>
