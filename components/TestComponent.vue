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
    <MainTitle text="NUESTROS SERVICIOS" :visible="true" />
    <SubTitle text="Deslizá el mouse sobre las tarjetas y conocé más" :visible="true" />
    <DescriptionText text="Aquí puedes agregar una descripción más detallada sobre los servicios que ofrecemos." :visible="true" />
    <DecorativeLine :visible="true" />
    </section>
</template>

<script setup>
import MainTitle from '@/components/Title.vue'
import SubTitle from '@/components/Subtitle.vue'
import DecorativeLine from '@/components/DecorativeLine.vue'
import DescriptionText from './DescriptionText.vue'

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
</style>
