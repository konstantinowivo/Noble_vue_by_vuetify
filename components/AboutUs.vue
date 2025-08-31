<template>
    <section 
        ref="sectionRef"
        class="about-us-modern fade-edge"
        @mousemove="handleMouseMove"
    >
    <!-- Background with parallax effect -->
    <div 
        class="background-image"
        :style="parallaxStyle"
    />
    
    <!-- Gradient overlay -->
    <!-- <div class="gradient-overlay" /> -->
    
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

    <!-- Aquí usás tus componentes -->
    <MainTitle text="NUESTRA HISTORIA" :visible="true" />
    <SubTitle text="nuestra pasión, su seguridad" :visible="true" />
    <Description text="Desde que fundamos Matafuegos Noble en 2001, siempre tuvimos en claro nuestra misión: Brindar un servicio personalizado y de la mayor calidad posible.
Con más de 30 años de experiencia en el rubro, ofrecemos servicios de recarga de extintores, provisión de gases para consumo y la venta de elementos de seguridad industrial.
Nuestro compromiso es garantizar la seguridad y tranquilidad de cada cliente, respaldados por asesoría especializada y productos que cumplen con las normativas más exigentes, incluyendo IRAM y Bureau Veritas." :visible="true" />
    
    <div class="decorative-line" :class="{ visible: isVisible }">
        <div class="line-left" />
        <div class="center-dot" />
        <div class="line-right" />
    </div>
    </section>
</template>

<script setup>
import MainTitle from '@/components/Title.vue'
import SubTitle from '@/components/Subtitle.vue'
import Description from './Description.vue'

// ⚡️ Si querés animar visibilidad con scroll, podés usar un ref y un observer
</script>

<style scoped>

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
</style>
