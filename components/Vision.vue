<template>
    <section 
        ref="sectionRef"
        class="about-us-modern fade-edge"
        @mousemove="handleMouseMove"
    >
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

        <!-- Vision Section Header -->
        <div class="vision-header">
            <MainTitle text="VISIÓN" />
            <div class="vision-underline"></div>
        </div>

        <!-- Contenedor adaptativo con imagen de fondo en móvil -->
        <div class="content-section">
            <!-- Wrapper de contenido con overlay para móvil -->
            <div class="content-wrapper">
                <!-- Imagen visible solo en desktop -->
                <div class="image-desktop">
                    <img src="~/assets/control_extintor.png" alt="Historia de Matafuegos" />
                </div>
                
                <!-- Contenido de texto con fondo adaptativo -->
                <div class="description-container">
                    <div class="description-content">
                        <p class="description-text">
                            Desde que fundamos Matafuegos Noble en 2001, siempre tuvimos en claro nuestra misión: Brindar un servicio personalizado y de la mayor calidad posible.
                            Con más de 30 años de experiencia en el rubro, ofrecemos servicios de recarga de extintores, provisión de gases para consumo y la venta de elementos de seguridad industrial.
                            Nuestro compromiso es garantizar la seguridad y tranquilidad de cada cliente, respaldados por asesoría especializada y productos que cumplen con las normativas más exigentes, incluyendo IRAM y Bureau Veritas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const parallaxStyle = ref({
    transform: 'translateY(0px)'
})

const handleMouseMove = (event) => {
    // Lógica del mouse move si es necesaria
}
</script>

<style scoped>
/* Vision Header Styles */
.vision-header {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
}

.vision-main-title {
    font-family: 'Poppins', 'Inter', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    color: #1e293b;
    letter-spacing: 3px;
    margin: 0 0 1rem 0;
    position: relative;
    display: inline-block;
    background: linear-gradient(135deg, #1e293b 0%, #475569 50%, #64748b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.vision-subtitle {
    font-family: 'Poppins', 'Inter', sans-serif;
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    font-weight: 400;
    color: #64748b;
    letter-spacing: 1.5px;
    margin: 0 0 2rem 0;
    text-transform: uppercase;
    opacity: 0.8;
}

.vision-underline {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
    margin: 0 auto;
    border-radius: 2px;
    position: relative;
    animation: shimmer 3s ease-in-out infinite;
}

.vision-underline::after {
    content: '';
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

@keyframes shimmer {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

@keyframes slide {
    0% { transform: translate(-150%, -50%); }
    50% { transform: translate(-50%, -50%); }
    100% { transform: translate(50%, -50%); }
}

.content-section {
    margin-top: 3rem;
    position: relative;
}

.content-wrapper {
    display: flex;
    gap: 2rem;
    min-height: 500px;
    border-radius: 24px;
    overflow: hidden;
    background: linear-gradient(135deg, 
        rgba(255, 193, 7, 0.1) 0%, 
        rgba(33, 37, 41, 0.9) 40%, 
        rgba(0, 0, 0, 0.95) 100%);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Imagen para desktop */
.image-desktop {
    flex: 1;
    position: relative;
    overflow: hidden;
    display: flex;
}

.image-desktop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
    
    /* Fade elegante */
    -webkit-mask-image: radial-gradient(ellipse 120% 100% at right center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: cover;
    
    mask-image: radial-gradient(ellipse 120% 100% at right center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: cover;
}

.image-desktop:hover img {
    transform: scale(1.03);
}

/* Contenedor de descripción */
.description-container {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    padding: 3rem;
}

.description-content {
    position: relative;
    z-index: 2;
}

.description-text {
    font-family: 'Poppins', 'Inter', sans-serif;
    font-weight: 400;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    line-height: 1.8;
    color: #e2e8f0;
    letter-spacing: 0.3px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
    margin: 0;
    text-align: justify;
}

/* Partículas */
.particles-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
}

.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: linear-gradient(45deg, #fbbf24, #f59e0b);
    border-radius: 50%;
    opacity: 0.15;
    animation: float 8s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
}

/* Vision responsive */
@media (max-width: 768px) {
    .vision-header {
        margin-bottom: 3rem;
    }
    
    .vision-main-title {
        font-size: clamp(2rem, 8vw, 3rem);
        letter-spacing: 2px;
    }
    
    .vision-subtitle {
        font-size: clamp(0.8rem, 3vw, 1rem);
        margin-bottom: 1.5rem;
    }
    
    .vision-underline {
        width: 60px;
        height: 3px;
    }
}

/* Tablet */
@media (max-width: 1024px) {
    .content-wrapper {
        min-height: 400px;
        gap: 1.5rem;
    }
    
    .description-container {
        padding: 2rem;
    }
    
    .description-text {
        font-size: clamp(0.95rem, 2vw, 1.1rem);
    }
}

/* Mobile - Transformación elegante */
@media (max-width: 768px) {
    .content-wrapper {
        flex-direction: column;
        min-height: auto;
        gap: 0;
        background: linear-gradient(135deg, 
            rgba(255, 193, 7, 0.1) 0%, 
            rgba(33, 37, 41, 0.9) 40%, 
            rgba(0, 0, 0, 0.95) 100%);
        position: relative;
    }
    
    /* Imagen como fondo sutil en móvil */
    .content-wrapper::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('~/assets/control_extintor.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.08;
        z-index: 1;
    }
    
    /* Ocultar imagen desktop en móvil */
    .image-desktop {
        display: none;
    }
    
    .description-container {
        padding: 2.5rem 1.5rem;
        position: relative;
        z-index: 2;
        background: linear-gradient(135deg, 
            rgba(255, 193, 7, 0.1) 0%, 
            rgba(33, 37, 41, 0.9) 40%, 
            rgba(0, 0, 0, 0.95) 100%);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        margin: 1rem;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }
    
    .description-text {
        font-size: clamp(0.9rem, 3.5vw, 1.05rem);
        line-height: 1.7;
        color: #e2e8f0;
        text-align: justify;
    }
}

/* Mobile pequeño */
@media (max-width: 480px) {
    .content-section {
        margin-top: 2rem;
    }
    
    .description-container {
        padding: 2rem 1.2rem;
        margin: 0.5rem;
    }
    
    .description-text {
        font-size: clamp(0.85rem, 4vw, 1rem);
        line-height: 1.65;
    }
    
    .particle {
        width: 4px;
        height: 4px;
        opacity: 0.1;
    }
}

/* Animación mejorada de partículas */
@keyframes float {
    0% { 
        transform: translateY(0px) rotate(0deg); 
        opacity: 0.15; 
    }
    33% { 
        transform: translateY(-15px) rotate(120deg); 
        opacity: 0.25; 
    }
    66% { 
        transform: translateY(-8px) rotate(240deg); 
        opacity: 0.2; 
    }
    100% { 
        transform: translateY(0px) rotate(360deg); 
        opacity: 0.15; 
    }
}

/* Transiciones suaves */
* {
    transition: all 0.3s ease;
}
</style>