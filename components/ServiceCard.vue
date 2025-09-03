<template>
  <div
    class="service-card"
    :class="{ visible: isVisible }"
    :style="{ animationDelay: `${animationDelay}ms` }"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <div
      class="card-background"
      :style="{ backgroundImage: `url(${service.image})` }"
    ></div>
    <div class="card-overlay"></div>
    <div class="card-glow" :class="{ active: isHovered }"></div>

    <div class="card-content" :class="{ hovered: isHovered }">
      <div v-if="service.icon" class="card-icon">{{ service.icon }}</div>
      <h3 class="card-title">{{ service.title }}</h3>
      <p class="card-description">{{ service.description }}</p>

      <button class="cta-button" @click="handleButtonClick">
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
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  service: {
    type: Object,
    required: true,
    validator: (service) => {
      return service.title && service.description && service.image;
    },
  },
  ctaText: {
    type: String,
    default: "Contactanos",
  },
  animationDelay: {
    type: Number,
    default: 0,
  },
  to: {
    type: String,
    default: "/contacto",
  },
  triggerAnimation: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click", "hover"]);

const isVisible = ref(false);
const isHovered = ref(false);

const handleHover = (hovering) => {
  isHovered.value = hovering;
  emit("hover", { service: props.service, hovering });
};

const handleButtonClick = () => {
  emit("click", { service: props.service, to: props.to });
};

watch(
  () => props.triggerAnimation,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        isVisible.value = true;
      }, props.animationDelay);
    }
  }
);

onMounted(() => {
  if (!props.triggerAnimation) {
    setTimeout(() => {
      isVisible.value = true;
    }, props.animationDelay);
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap");

.service-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  min-height: 320px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: translateY(32px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.service-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.7);
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
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
  transition: background 0.3s ease;
}

.service-card:hover .card-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
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
  height: 100%;
  justify-content: center;
  transition: transform 0.3s ease;
}

.card-content.hovered {
  transform: translateY(-4px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.service-card:hover .card-icon {
  transform: scale(1.1);
}

.card-title {
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

.service-card:hover .card-title {
  color: #fbbf24;
}

.card-description {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #e5e7eb;
  margin-bottom: 16px;
  line-height: 1.5;
  transition: color 0.3s ease;
}

.service-card:hover .card-description {
  color: #f3f4f6;
}

.cta-button {
  position: relative;
  background: transparent;
  color: #fbbf24;
  border: 1px solid #fbbf24;
  border-radius: 9999px;
  padding: 8px 16px;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: auto;
}

.cta-button:hover {
  background: #fbbf24;
  color: black;
  transform: translateY(-2px);
}

.cta-button:active {
  transform: translateY(0);
}

.button-text {
  position: relative;
  z-index: 2;
}

.button-glow {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
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
  transform: translateX(2px);
}

/* Responsive */
@media (max-width: 768px) {
  .service-card {
    min-height: 280px;
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-description {
    font-size: 0.9rem;
  }

  .cta-button {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .service-card {
    min-height: 240px;
  }

  .card-icon {
    font-size: 1.5rem;
  }
}
</style>
