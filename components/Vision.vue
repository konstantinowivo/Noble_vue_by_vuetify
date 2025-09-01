<template>
  <section 
      ref="sectionRef"
      class="about-us-modern fade-edge"
  >
    <!-- Floating particles -->
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

    <!-- Titles -->
    <MainTitle text="VISIÓN" :visible="true" />
    <DecorativeLine />

    <!-- Contenedor mitad descripción / mitad imagen -->
    <div class="content-section">
        <div class="description-wrapper">
            <Description text="En Matafuegos Noble, desde nuestra fundación en 2001, hemos trabajado con la visión de ser líderes en seguridad industrial y protección contra incendios, ofreciendo soluciones confiables y adaptadas a cada cliente.
            Nuestro objetivo es combinar innovación, calidad y atención personalizada, asegurando que cada servicio y producto no solo cumpla con las normativas más exigentes, sino que también genere confianza y tranquilidad en quienes confían en nosotros.
            Aspiramos a construir relaciones duraderas basadas en profesionalismo, compromiso y excelencia, reflejando nuestra pasión por proteger vidas y bienes." :visible="true" />
        </div>
        <div class="image-wrapper">
            <img src="~/assets/control_extintor.png" alt="Historia de Matafuegos" />
        </div>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  flex-direction: row; /* por defecto en PC */
}

/* Que la descripción y la imagen tengan la misma altura */
.description-wrapper, .image-wrapper {
  flex: 1;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.image-wrapper {
  overflow: hidden;
  border-radius: 20px;
  display: flex;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;

  /* Fade alrededor */
  -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: cover;

  mask-image: radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;

  transition: transform 0.4s ease;
}

.image-wrapper img:hover {
  transform: scale(1.05);
}

/* Descriptivo con fuente moderna */
.description-wrapper {
  font-family: 'Poppins', 'Inter', sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  line-height: 1.8;
  color: #111;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

/* Partículas */
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

/* Media query para tablet y móviles */
@media (max-width: 1024px) {
  .content-section {
    flex-direction: column; /* apila verticalmente */
    gap: 1.5rem;
  }

  .description-wrapper, .image-wrapper {
    padding: 1rem;
  }

  .image-wrapper img {
    height: auto; /* que la imagen no se corte en móviles */
  }
}

/* Animación de partículas */
@keyframes float {
  0% { transform: translateY(0px); opacity: 0.2; }
  50% { transform: translateY(-20px); opacity: 0.5; }
  100% { transform: translateY(0px); opacity: 0.2; }
}
</style>
