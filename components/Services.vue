<template>
  <section 
    ref="sectionRef"
    class="services-section fade-edge"
    @mousemove="handleMouseMove"
  >
    <!-- Background with parallax effect -->
    <div 
      class="background-image"
      :style="parallaxStyle"
    />
    
    <!-- Floating particles animation -->
    <div class="particles-container">
      <div
        v-for="i in 8"
        :key="i"
        class="particle"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }"
      />
    </div>

    <!-- Content Container -->
    <div class="content-container">
      <!-- Header Section -->
      <div class="header-section">
        <h1 class="main-title" :class="{ visible: isVisible }">
          NUESTROS SERVICIOS
        </h1>
        <h2 class="subtitle" :class="{ visible: isVisible }">
          posicionate sobre la imagen y conocé más
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
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          :service="service"
          :cta-text="ctaText"
          :animation-delay="index * 200"
          :trigger-animation="isVisible"
          to="/contacto"
          @click="handleCardClick"
          @hover="handleCardHover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import ServiceCard from '@/components/ServiceCard.vue'

// Assets imports
import matafuegosImage from '@/assets/portada.extintores.jpg'
import sodaStreamImage from '@/assets/soda.stream.2.png'
import instalacionImage from '@/assets/instalaciones.png'
import elemSeguridad from '@/assets/casco-construccion-seguridad-vista-superior-mascara-medica.jpg'

const router = useRouter()
const sectionRef = ref(null)
const isVisible = ref(false)
const mousePosition = ref({ x: 0, y: 0 })
let observer = null

const services = [
  { 
    id: 1, 
    title: 'ELEMENTOS DE SEGURIDAD', 
    description: 'Venta y asesoría en seguridad industrial, equipos de protección personal y elementos de seguridad laboral.', 
    image: elemSeguridad,
  },
  { 
    id: 2, 
    title: 'CÁPSULAS Y SODASTREAM', 
    description: 'Venta y recarga de envases de CO2, cilindros y cápsulas para diferentes aplicaciones.', 
    image: sodaStreamImage,
  },
  { 
    id: 3, 
    title: 'GASES PARA CONSUMO', 
    description: 'Brindamos asesoría, venta y servicio técnico especializado en gases industriales y comerciales.', 
    image: instalacionImage,
  },
  { 
    id: 4, 
    title: 'EXTINTORES', 
    description: 'Venta y recarga anual de extintores, mantenimiento preventivo y asesoría en sistemas contra incendios.', 
    image: matafuegosImage,
  }
]

const ctaText = 'Contactanos'

const handleMouseMove = (event) => {
  const rect = sectionRef.value?.getBoundingClientRect()
  if (rect) {
    mousePosition.value = {
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2
    }
  }
}

const handleCardClick = ({ service, to }) => {
  console.log('Card clicked:', service.title)
  router.push(to)
}

const handleCardHover = ({ service, hovering }) => {
  console.log(`Card ${service.title} ${hovering ? 'hovered' : 'unhovered'}`)
}

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting
  }, { threshold: 0.1 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => observer && observer.disconnect())

const parallaxStyle = ref({
  transform: 'translateY(0px)'
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

.services-section {
  position: relative;
  min-height: 100vh;
  padding: 80px 20px;
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

/* Gradient overlay */
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(255, 193, 7, 0.1) 0%, 
    rgba(33, 37, 41, 0.9) 40%, 
    rgba(0, 0, 0, 0.95) 100%);
  z-index: 1;
}

/* Particles container */
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
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-10px) rotate(180deg); 
  }
}

/* Content */
.content-container {
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.header-section {
  text-align: center;
  margin-bottom: 64px;
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
  0%, 100% { 
    opacity: 1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.5; 
    transform: scale(1.2); 
  }
}

/* Grid de servicios */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  width: 100%;
}

.fade-edge {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .services-section {
    padding: 60px 16px;
  }
  
  .services-grid {
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  
  .header-section {
    margin-bottom: 48px;
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
        margin-bottom: 32px;
    }
}
</style>