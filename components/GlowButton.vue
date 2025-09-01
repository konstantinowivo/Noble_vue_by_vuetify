<template>
    <button 
        class="glow-button"
        :class="{ visible: isVisible }"
        @click="handleClick"
    >
        <span>{{ text }}</span>
        <div class="button-glow"></div>
    </button>
</template>

<script>
export default {
    name: 'GlowButton',
    props: {
        text: {
        type: String,
        required: true
        },
        to: {
        type: String,
        default: null
        },
        delay: {
        type: Number,
        default: 600 // delay por defecto para la animación
        }
    },
    data() {
        return {
        isVisible: false
        };
    },
    methods: {
        handleClick() {
        if (this.to) {
            this.$router.push(this.to);
        }
        this.$emit('click');
        }
    },
    mounted() {
        // Animación de entrada del botón
        setTimeout(() => {
        this.isVisible = true;
        }, this.delay);
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.glow-button {
    position: relative;
    border: 1px solid #fbbf24;
    border-radius: 9999px;
    padding: 12px 32px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #fbbf24;
    background: transparent;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 10;
  /* Animación de entrada */
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.glow-button.visible {
    opacity: 1;
    transform: translateY(0);
}

.glow-button:hover {
    background: #fbbf24;
    color: black;
    transform: translateY(-2px);
}

.glow-button:active {
    transform: translateY(0);
}

.glow-button span {
    position: relative;
    z-index: 2;
}

.button-glow {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1;
}

.glow-button:hover .button-glow {
    opacity: 1;
}

/* Variante para botones más grandes */
.glow-button.large {
    padding: 16px 40px;
    font-size: 1.125rem;
}

/* Responsive */
@media (max-width: 768px) {
    .glow-button {
        padding: 10px 24px;
        font-size: 0.9rem;
    }
}
</style>