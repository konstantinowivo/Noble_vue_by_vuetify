import { ref, onMounted, type Ref } from 'vue';

/**
 * Interfaz para configurar las partículas
 */
export interface ParticleConfig {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  minDelay?: number;
  maxDelay?: number;
}

/**
 * Interfaz para una partícula individual
 */
export interface Particle {
  left: string;
  top: string;
  size: string;
  animationDuration: string;
  animationDelay: string;
}

/**
 * Composable para generar efectos de partículas
 * Sigue principios SOLID y DRY (Don't Repeat Yourself)
 *
 * @param config - Configuración de las partículas
 * @returns particles - Array reactivo de partículas generadas
 */
export function useParticleEffect(config: ParticleConfig = {}) {
  const {
    count = 20,
    minSize = 2,
    maxSize = 5,
    minDuration = 3,
    maxDuration = 6,
    minDelay = 0,
    maxDelay = 3,
  } = config;

  const particles: Ref<Particle[]> = ref([]);

  /**
   * Genera un número aleatorio entre min y max
   */
  const randomBetween = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  /**
   * Genera una partícula individual con propiedades aleatorias
   */
  const generateParticle = (): Particle => {
    return {
      left: `${randomBetween(0, 100)}%`,
      top: `${randomBetween(0, 100)}%`,
      size: `${randomBetween(minSize, maxSize)}px`,
      animationDuration: `${randomBetween(minDuration, maxDuration)}s`,
      animationDelay: `${randomBetween(minDelay, maxDelay)}s`,
    };
  };

  /**
   * Genera todas las partículas según la configuración
   */
  const generateParticles = (): void => {
    particles.value = Array.from({ length: count }, () => generateParticle());
  };

  onMounted(() => {
    generateParticles();
  });

  return {
    particles,
    regenerateParticles: generateParticles,
  };
}
