<template>
  <section
    ref="sectionRef"
    class="about-us-modern fade-edge"
    @mousemove="handleMouseMove"
  >
    <div class="background-image" :style="parallaxStyle" />

    <div class="particles-container">
      <div
        v-for="i in 6"
        :key="i"
        class="particle"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }"
      />
    </div>

    <div class="About-header">
      <MainTitle text="NOSOTROS" />
      <Subtitle text="NUESTRA PASIÓN, SU SEGURIDAD" />
    </div>

    <Description
      text="Desde que fundamos Matafuegos Noble en 2001, siempre tuvimos en claro nuestra misión: Brindar un servicio personalizado y de la mayor calidad posible.
        Con más de 30 años de experiencia en el rubro, ofrecemos servicios de recarga de extintores, provisión de gases para consumo y la venta de elementos de seguridad industrial.
        Nuestro compromiso es garantizar la seguridad y tranquilidad de cada cliente, respaldados por asesoría especializada y productos que cumplen con las normativas más exigentes, incluyendo IRAM y Bureau Veritas."
      :visible="true"
    />
  </section>
</template>

<script setup>
import MainTitle from "~/components/MainTitle.vue";
import SubTitle from "@/components/Subtitle.vue";
import Description from "./Description.vue";
import { ref, onMounted, onUnmounted } from "vue";

const parallaxStyle = ref({
  transform: "translateY(0px)",
});
</script>

<style scoped>
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 193, 7, 0.1) 0%,
    rgba(33, 37, 41, 0.9) 40%,
    rgba(0, 0, 0, 0.95) 100%
  );
}

.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.about-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
  margin: 0 auto;
  border-radius: 2px;
  position: relative;
  animation: shimmer 3s ease-in-out infinite;
}

.about-underline::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.4), transparent);
  border-radius: 2px;
  animation: slide 2s ease-in-out infinite;
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
</style>
