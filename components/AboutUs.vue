<template>
  <section 
    ref="sectionRef"
    class="about-us-modern"
    @mousemove="handleMouseMove"
  >
    <!-- Background with parallax effect -->
    <div 
      class="background-image"
      :style="parallaxStyle"
    />
    
    <!-- Gradient overlay -->
    <div class="gradient-overlay" />
    
    <!-- Floating particles animation -->
    <div class="particles-container">
      <div
        v-for="i in 6"
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

    <!-- Content container -->
    <div class="content-container">
      <!-- Title -->
      <h1 
        class="main-title"
        :class="{ 'visible': isVisible }"
      >
        {{ title }}
      </h1>

      <!-- Subtitle -->
      <h2 
        class="subtitle"
        :class="{ 'visible': isVisible }"
      >
        {{ description }}
      </h2>

      <!-- Hero image section -->
      <div 
        class="hero-image-container"
        :class="{ 'visible': isVisible }"
      >
        <img 
          :src="imageUrl"
          alt="Matafuegos Noble"
          class="hero-image"
        />
        <div class="image-overlay" />
        <div class="glowing-border" />
      </div>

      <!-- Description text -->
      <div 
        class="description-container"
        :class="{ 'visible': isVisible }"
      >
        <p class="description-text">
          {{ descriptionText }}
        </p>
        
        <!-- Decorative line -->
        <div class="decorative-line">
          <div class="line-left" />
          <div class="center-dot" />
          <div class="line-right" />
        </div>
      </div>

      <!-- Call to action hint -->
      <div 
        class="cta-hint"
        :class="{ 'visible': isVisible }"
      >
        <span>Scroll para conocer más</span>
        <div class="scroll-arrow" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import frente_noble from '@/assets/frente_noble2.jpg'

export default {
  name: 'AboutUs',
  props: {
    title: {
      type: String,
      default: 'Sobre Nosotros'
    },
    description: {
      type: String,
      default: 'Tu confianza, nuestra empresa'
    },
    descriptionText: {
      type: String,
      default: 'En Matafuegos Noble, empresa fundada en 2001, nuestra misión es proporcionar servicios de recarga de extintores, gases para consumo y venta de elementos de seguridad industrial de la más alta calidad. Con más de 30 años de experiencia en el rubro, nos comprometemos a garantizar la seguridad y tranquilidad de nuestros clientes, ofreciendo asesoría personalizada y especializada, junto con productos que cumplen con los estándares de regulación, IRAM y Bureau Veritas.'
    },
    imageUrl: {
      type: String,
      default: frente_noble
    }
  },
  setup() {
    const sectionRef = ref(null)
    const isVisible = ref(false)
    const mousePosition = reactive({ x: 0, y: 0 })
    let observer = null

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mousePosition.x = x
      mousePosition.y = y
    }

    const parallaxStyle = reactive({
      get transform() {
        return `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
      }
    })

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
      mousePosition,
      parallaxStyle,
      handleMouseMove
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

/* Main container */
.about-us-modern {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1f2937 0%, #000000 40%, #111827 100%);
}

/* Background image with parallax */
.background-image {
  position: absolute;
  inset: 0;
  background-image: v-bind('`url(${imageUrl})`');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease-out;
}

/* Gradient overlay */
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(255, 193, 7, 0.1) 0%, 
    rgba(33, 37, 41, 0.9) 40%, 
    rgba(0, 0, 0, 0.95) 100%);
}

/* Particles container */
.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
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

/* Content container */
.content-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

/* Main title */
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

/* Subtitle */
.subtitle {
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: bold;
  font-style: italic;
  color: white;
  margin-bottom: 48px;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
  transform: translateY(32px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.subtitle.visible {
  transform: translateY(0);
  opacity: 1;
}

/* Hero image container */
.hero-image-container {
  position: relative;
  max-width: 800px;
  height: 400px;
  margin: 0 auto 48px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(0.95);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.hero-image-container.visible {
  transform: scale(1);
  opacity: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.glowing-border {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 2px solid rgba(255, 193, 7, 0.2);
  box-shadow: 0 0 30px rgba(255, 193, 7, 0.3);
}

/* Description container */
.description-container {
  transform: translateY(32px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s;
}

.description-container.visible {
  transform: translateY(0);
  opacity: 1;
}

.description-text {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #e5e7eb;
  line-height: 1.7;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* Decorative line */
.decorative-line {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  gap: 16px;
}

.line-left,
.line-right {
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

/* Call to action hint */
.cta-hint {
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(251, 191, 36, 0.7);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transform: translateY(32px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s;
}

.cta-hint.visible {
  transform: translateY(0);
  opacity: 1;
}

.scroll-arrow {
  width: 16px;
  height: 16px;
  border-right: 2px solid rgba(251, 191, 36, 0.7);
  border-bottom: 2px solid rgba(251, 191, 36, 0.7);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

/* Animations */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-10px) rotate(180deg); 
  }
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

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: rotate(45deg) translateY(0);
  }
  40%, 43% {
    transform: rotate(45deg) translateY(-8px);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-image-container {
    height: 300px;
    margin-bottom: 32px;
  }
  
  .content-container {
    padding: 0 16px;
  }
  
  .description-text {
    font-size: 1rem;
    padding: 0 8px;
  }
  
  .decorative-line {
    gap: 12px;
  }
  
  .line-left,
  .line-right {
    width: 64px;
  }
}

@media (max-width: 480px) {
  .hero-image-container {
    height: 250px;
  }
  
  .main-title {
    margin-bottom: 16px;
  }
  
  .subtitle {
    margin-bottom: 32px;
  }
}
</style>