<template>
  <section class="services-section" ref="sectionRef">
    <!-- Header Section -->
    <div class="header-container">
      <div class="title-wrapper" :class="{ 'visible': isVisible }">
        <h1 class="main-title">
          NUESTROS SERVICIOS
          <div class="title-glow"></div>
        </h1>
        <p class="subtitle">
          <span class="subtitle-icon">✨</span>
          Deslizá el mouse sobre las tarjetas y conocé más
          <span class="subtitle-icon">✨</span>
        </p>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="services-grid">
      <div
        v-for="(service, index) in services"
        :key="service.id"
        class="service-card"
        :class="{ 'visible': isVisible }"
        :style="{ animationDelay: `${index * 0.2}s` }"
        @mouseenter="handleCardHover(index, true)"
        @mouseleave="handleCardHover(index, false)"
      >
        <!-- Background Image -->
        <div 
          class="card-background"
          :style="{ backgroundImage: `url(${service.image})` }"
        ></div>
        
        <!-- Gradient Overlay -->
        <div class="card-overlay"></div>
        
        <!-- Glow Effect -->
        <div class="card-glow" :class="{ 'active': hoveredCard === index }"></div>
        
        <!-- Content -->
        <div class="card-content" :class="{ 'hovered': hoveredCard === index }">
          <div class="card-icon">
            {{ service.icon }}
          </div>
          
          <h3 class="card-title">
            {{ service.title }}
          </h3>
          
          <p class="card-description">
            {{ service.description }}
          </p>
          
          <!-- CTA Button -->
          <button 
            class="cta-button"
            @click="navigateToContact"
          >
            <span class="button-text">{{ ctaText }}</span>
            <div class="button-glow"></div>
            <svg class="button-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <!-- Floating particles -->
        <div class="card-particles">
          <div 
            v-for="i in 3" 
            :key="i" 
            class="particle"
            :style="{ animationDelay: `${i * 0.5}s` }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import matafuegosImage from '@/assets/portada.extintores.jpg'
import sodaStreamImage from '@/assets/soda.stream.2.png'
import tubosImage from '@/assets/co2_tubos.png'
import elemSeguridad from '@/assets/casco-construccion-seguridad-vista-superior-mascara-medica.jpg'

export default {
  name: 'ServiceList',
  props: {
    ctaText: {
      type: String,
      default: 'Contactanos'
    }
  },
  setup(props) {
    const router = useRouter()
    const sectionRef = ref(null)
    const isVisible = ref(false)
    const hoveredCard = ref(-1)
    let observer = null

    const services = [
      { 
        id: 1, 
        title: 'ELEMENTOS DE SEGURIDAD', 
        description: 'Venta y asesoría en seguridad, cartelería y equipos para habilitaciones comerciales.', 
        image: elemSeguridad,
        icon: '🛡️'
      },
      { 
        id: 2, 
        title: 'CÁPSULAS Y SODASTREAM', 
        description: 'Venta y recarga de envases de SodaStream y cápsulas para sifones. Trabajamos todas las marcas.', 
        image: sodaStreamImage,
        icon: '💧'
      },
      { 
        id: 3, 
        title: 'GASES PARA CONSUMO', 
        description: 'Brindamos asesoría, venta y servicio de post-venta para tus instalaciones de máquinas de cerveza, gaseosa o soda.', 
        image: tubosImage,
        icon: '🍺'
      },
      { 
        id: 4, 
        title: 'EXTINTORES', 
        description: 'Venta y recarga anual de extintores. Atención a empresas, comercios y particulares.', 
        image: matafuegosImage,
        icon: '🧯'
      }
    ]

    const handleCardHover = (index, isHovering) => {
      hoveredCard.value = isHovering ? index : -1
    }

    const navigateToContact = () => {
      router.push('/contacto')
    }

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
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      sectionRef,
      isVisible,
      hoveredCard,
      services,
      handleCardHover,
      navigateToContact
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

/* Main Section */
.services-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
}

.services-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* Header Section */
.header-container {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 10;
}

.title-wrapper {
  transform: translateY(40px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.title-wrapper.visible {
  transform: translateY(0);
  opacity: 1;
}

.main-title {
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  font-style: italic;
  background: linear-gradient(45deg, #ffff00, #ffd700, #ffff99, #ffff00);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  position: relative;
  animation: gradientShift 3s ease-in-out infinite;
}

.title-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #ffff00, #ffd700);
  filter: blur(30px);
  opacity: 0.3;
  z-index: -1;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #e2e8f0;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.subtitle-icon {
  font-size: 1.2em;
  animation: sparkle 2s ease-in-out infinite;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

/* Service Card */
.service-card {
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transform: translateY(60px) scale(0.9);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card.visible {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-10px) scale(1.02);
}

/* Card Background */
.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.6s ease;
}

.service-card:hover .card-background {
  transform: scale(1.1);
}

/* Card Overlay */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  transition: background 0.4s ease;
}

.service-card:hover .card-overlay {
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

/* Card Glow */
.card-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ffff00, #ffd700, #ffff00);
  border-radius: 22px;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.4s ease;
  z-index: -1;
}

.card-glow.active {
  opacity: 0.7;
}

/* Card Content */
.card-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
  z-index: 10;
  transition: all 0.4s ease;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  transform: translateY(10px);
  opacity: 0.7;
  transition: all 0.4s ease;
}

.card-content.hovered .card-icon {
  transform: translateY(0) scale(1.2);
  opacity: 1;
}

.card-title {
  font-family: 'Bebas Neue', cursive;
  font-size: 1.8rem;
  font-weight: 900;
  font-style: italic;
  color: #ffff00;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transform: translateY(10px);
  opacity: 0.8;
  transition: all 0.4s ease;
}

.card-content.hovered .card-title {
  transform: translateY(0);
  opacity: 1;
  color: #ffd700;
}

.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #e2e8f0;
  line-height: 1.6;
  margin-bottom: 25px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease 0.1s;
}

.card-content.hovered .card-description {
  transform: translateY(0);
  opacity: 1;
}

/* CTA Button */
.cta-button {
  position: relative;
  background: linear-gradient(45deg, #1f2937, #374151);
  border: 2px solid #ffff00;
  border-radius: 50px;
  padding: 12px 30px;
  color: #ffff00;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 10px;
  transform: translateY(20px) scale(0.9);
  opacity: 0;
  transition: all 0.4s ease 0.2s;
}

.card-content.hovered .cta-button {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.cta-button:hover {
  background: linear-gradient(45deg, #ffff00, #ffd700);
  color: #1f2937;
  border-color: #ffff99;
  transform: translateY(0) scale(1.05);
}

.button-text {
  z-index: 2;
  position: relative;
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #ffff00, #ffd700);
  opacity: 0;
  transition: opacity 0.3s ease;
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
  transform: translateX(5px);
}

/* Card Particles */
.card-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card-content.hovered ~ .card-particles {
  opacity: 1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #ffff00;
  border-radius: 50%;
  animation: float 3s ease-in-out infinite;
}

.particle:nth-child(1) { top: 20%; left: 20%; }
.particle:nth-child(2) { top: 60%; right: 20%; }
.particle:nth-child(3) { bottom: 30%; left: 50%; }

/* Animations */
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-section {
    padding: 60px 15px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .service-card {
    height: 350px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .header-container {
    margin-bottom: 50px;
  }
  
  .subtitle {
    flex-direction: column;
    gap: 8px;
  }
  
  .service-card {
    height: 320px;
  }
}
</style>